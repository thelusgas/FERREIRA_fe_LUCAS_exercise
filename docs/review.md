## Project report

This is an extensive description of issues I've found within the original code, organized by category.

### General

#### JS/TS
- `var` shouldn't be used; if there's a need for reassignment `let` should be used instead. But in most modern Javascript that prefers immutability, there's virtually no need for variables that are directly reassignable and so `const` should be always preferred.
- `any` shouldn't be used as a type. It defeats the point of using typescript in the first place - type safety.
#### React
- Instantiating components with curly brackets `{Component(props)}` shouldn't ever be done. Its prone to memory leaks and is bad syntax.
- There's no need to explicitly import React in components since many versions ago.
- Create React App (CRA) is facing deprecation due to its slowness and poor performance when compared to other tools. Vite is currently the preferred approach to scaffolding a React project.
#### styling
- Usage of 'px' as an unit is discouraged in most cases; due to it being an absolute unit, it overwrites user preference which makes for poor accessibility. Rem should be preferred
- Setting absolute heights or widths to elements is bad practice that leads to broken layouts. Setting sizing and positioning using padding and flex alignment options/grid layouts is a better approach

### api

_api/index.ts @ 3_
```javascript
const getData = async (path = '') => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/${path}`;
  const res = await fetch(url);
  const json = await res.json();

  return json;
};
```

the 'path' variable seems to be loosely typed as a string. We know all of the avaliable/needed endpoints, therefore making it limited to them would make for better type safety.

### components

#### Card

_components/Card/index.tsx @ 27_
```javascript
<Container
  data-testid={`cardContainer-${id}`}
  hasNavigation={hasNavigation}
  onClick={(e: Event) => {
    if (hasNavigation) {
      navigate(url, {
        state: navigationProps,
      });
    }
    e.preventDefault();
  }}
>
```
Making this a clickable div is poor semantics. This element would be better served as an anchor which would remove the need for an onClick prop.

Even if it were to be kept as a button/div, it would be better to make this handler into a separate function for improved readability.

Lastly, preventDefault does nothing here.


#### Header

_components/Header/index.tsx @ 12_
```javascript
 return (
  <HeaderContainer>
    <NavigationHeader>
```
This component has two nested divs which seem to serve no purpose. That makes for poor semantics, specially because this is the page's header, therefore it would make sense to use the `<header>` element instead. If those divs are nested for styling purposes, flex or grid are powerful enough to create complex layouts without having to resort to nesting divs most of the time.


#### GlobalComponents

This one feels very out of place; Its breaking the pattern enforced by the other components. A better approach would be to make it into its own actual component with a better, more descriptive name.

### Pages

#### TeamOverview

_pages/TeamOverview.tsx @ 10, 35_
```javascript
 var mapArray = (users: UserData[]) => {
```

```javascript
 var mapTLead = tlead => {
```
the use of `var` is discouraged. If a variable needs to be reassignable, `let` should be used; However modern Javascript tends to prefer immutability and thats specially the case with React - even mutable state happens via immutable middleware in the form of hooks.

Considering that and the fact that these two are also never reassigned, they would be better declared as 
`const`

Furthermore, these variable names are non-descriptive or confusing. Variable names shouldn't be shortened most of the time (tLead) as that can lead to making them harder to identify down the road.
'mapArray' says almost nothing about what this function does.

_pages/TeamOverview.tsx @ 90_
```javascript
 {!isLoading && mapTLead(pageData.teamLead)}
```
Components should never be instantiated with curly brackets. That's bad syntax and prone to memory leaks.



#### Teams

_pages/Teams.tsx @ 8_
```javascript
var MapT = (teams: TeamsList[]) => {
```
Similar case as above, `var` should not be used and 'MapT' is a bad variable name.
Not only is it non-descriptive, it also breaks convention by using PascalCase.

_pages/Teams.tsx @ 26_
```javascript
const [teams, setTeams] = React.useState<any>([]);
const [isLoading, setIsLoading] = React.useState<any>(true);
```

`any` should never be used. Not ever. It defeats the point of using Typescript in the first place - to have type safety.
Specially when the types for these variables already exist and are easily avaliable.

#### UserOverview

_pages/UserOverview.tsx @ 8_
```javascript
var mapU = (user: UserData) => {
```
Similar case as above, `var` should not be used and 'MapU' is a bad variable name.

_pages/UserOverview.tsx @ 33_
```javascript
{mapU(location.state)}
```
Similar case as above, it's bad practice to instantiate a component like this. 

### Types
_types/index.ts @ 26_
```javascript
export interface ListItem {
  id: string;
  url?: string;
  columns: Array<ListItemColumn>;
  navigationProps?: UserData | Teams;
}
```
navigationProps seems to serve no real purpose here, as the data is supposed to be fetched by the receiving component; prop-drilling this data is redundant


_types/index.ts @ 12_
```javascript
export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  location: string;
  avatar: string;
}
```
the 'avatar' prop comes in as avatarUrl from the api call, therefore it should be renamed.



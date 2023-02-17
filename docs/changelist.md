## Changelist

This is a comprehensive overview of the changes made to the project.

### General
- moved from CRA to Vite

vite is currently the standard for scaffolding react apps due to better performance, faster building/hot-reload and smaller bundles.
- moved from npm to pnpm

pnpm is a more performant package manager than npm or yarn
- added absolute path imports

smaller, more readable imports on files
- updated tsconfig for better type checking
- updated libs
- improved lint
- renamed 'types' folder to 'interfaces'
- added React Query

react query is a powerful tool for handling async logic and caching data
- enabled strict mode


### Styling
- added global styles using the styled-components tooling
- created themes 
- added css resets
- changed most px to rem
- improved css where needed
- general styling overhaul

### api

- reworked getData to be more type-safe

### Components
#### Card
- simplified the structure for the component 

leveraging typescript, it was possible to give the component the flexibility to act both as a Link and a div which makes for better semantics
- removed redundant props

since only the url prop was needed, the navigationProps could be removed

#### GlobalContextWrapper 
- moved all of the higher order wrapper logic into one file to improve readibility and modularization.

#### Header
- improved semantic by changing the wrapper element to `header`
- added a subtitle to improve UI
- moved page header into this component for reusability and reduced code duplication
#### Layout
-  encapsulated base page layout into this component for consistency and reusability
#### List
- added logic to allow this component to handle async lists as well as regular ones, allowing it to fetch and display items individually which makes for better UX
#### MemberCard
- new component to display a user/member's information in a more specialized way
#### Search
- new search component that's used to filter the lists using a specific key


### Helpers
- a folder to store helper functions and constants.
#### useSearch
- a hook that encapsulates search and filter logic

### Interfaces
- renamed from 'types' as to not be confused with the '@types' folder which is a typescript convention for declaring modules
- separated into 'data' for api/business entities and 'lib' for all others

### pages
- simplified handling of async logic with react query
- refactored common elements into a shared layout component

### styles
- added css resets
- added variables for fonts and colors
- added themes
- 

import { Color } from '@interfaces/lib';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: Color;
      onPrimary: Color;
      primaryContainer: Color;
      onPrimaryContainer: Color;

      secondary: Color;
      onSecondary: Color;
      secondaryContainer: Color;
      onSecondaryContainer: Color;

      background: Color;
      onBackground: Color;

      surface: Color;
      onSurface: Color;
    };
  }
}

import 'styled-components';

import theme from './theme';

declare module 'styled-components' {
    type ThemeType = typeof themeType

    export interface DefaultTheme extends ThemeType{}
}
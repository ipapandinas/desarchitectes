import { createGlobalStyle } from 'styled-components'
import { DesarchitectesTheme } from 'theme'

declare module 'styled-components' {
  export interface DefaultTheme extends DesarchitectesTheme {}
}

interface ThemedProps {
  theme: DesarchitectesTheme
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font: ${({ theme }: ThemedProps) =>
      `normal 400 1.6rem ${theme?.fonts?.regular ?? 'TimesNewRoman'}`};
    font-size: 62.5%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    color: ${({ theme }: ThemedProps) => theme?.colors?.text ?? '#000'};
    margin: 0;
    word-wrap: break-word;
    font-size: 1.6rem;
    font-kerning: normal;

    a {
      text-decoration: none;
    }

    button {
      background: none;
      border: 0;
      font-family: inherit;
      margin: 0;
      padding: 0;
    }

    img {
        height: auto;
        max-width: 100%;
      }

    strong {
      font-family: ${({ theme }: ThemedProps) =>
        theme?.fonts?.bold ?? 'TimesNewRoman-Bold'};
    }
  }
`

export default GlobalStyle

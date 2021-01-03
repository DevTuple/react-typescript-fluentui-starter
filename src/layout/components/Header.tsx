import * as React from 'react';
import { Stack, Link, ILinkStyleProps, ILinkStyles, ITheme, IStackProps } from '@fluentui/react';
import { IThemeRules, ThemeGenerator } from '@fluentui/react/lib/ThemeGenerator';
import { mergeStyles } from '@fluentui/merge-styles';


export interface IHeaderProps {
  themeRules?: IThemeRules;
}

export interface IHeaderState {
  showPanel: boolean;
  jsonTheme: string;
  powershellTheme: string;
  themeAsCode: any;
}

const outputPanelClassName = mergeStyles({
  display: 'flex',
});

const textAreaClassName = mergeStyles({
  height: 350,
  width: '100%',
  marginRight: 28,
  backgroundColor: 'white',
  color: '#333',
});

const microsoftLogo = mergeStyles({
  width: '120px',
  display: 'block',
});

const pipeFabricStyles = (p: ILinkStyleProps): ILinkStyles => ({
  root: {
    textDecoration: 'none',
    color: p.theme.semanticColors.bodyText,
    fontWeight: '600',
    fontSize: p.theme.fonts.medium.fontSize,
  },
});

const headerStackStyles = (p: IStackProps, theme: ITheme) => ({
  root: {
    backgroundColor: theme.semanticColors.bodyBackground,
    minHeight: 47,
    padding: '0 32px',
    boxShadow: theme.effects.elevation16,
  },
});

const codepenHeader = `const {
  createTheme,
  Checkbox,
  DefaultButton,
  Fabric,
  Pivot,
  PivotItem,
  PrimaryButton,
  Stack,
  Toggle,
  ThemeProvider
} = FluentUIReact;\n\n`;
const codepenSamples = `\n\n
const Content = () => {
    return (
      <ThemeProvider applyTo='body' theme={myTheme}>
        <Stack tokens={{childrenGap: 8, maxWidth: 300}}>
          <Pivot>
            <PivotItem headerText="Home" />
            <PivotItem headerText="Pages" />
            <PivotItem headerText="Documents" />
            <PivotItem headerText="Activity" />
          </Pivot>
          <Stack horizontal gap={8}>
            <DefaultButton text="DefaultButton"/>
            <PrimaryButton text="PrimaryButton"/>
          </Stack>
          <Toggle label="Enabled"/>
          <Toggle label="Disabled" disabled={true}/>
          <Checkbox label="Checkbox"/>
          <Checkbox checked label="Checkbox Checked" />
        </Stack>
      </ThemeProvider>
    );
}
ReactDOM.render(<Content />,document.getElementById('content'));`;

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showPanel: false,
      jsonTheme: '',
      powershellTheme: '',
      themeAsCode: <div />,
    };
  }

  public render(): JSX.Element {
    return (
      <Stack horizontal verticalAlign="center" grow={0} styles={headerStackStyles}>
        <Stack horizontal grow={1} verticalAlign="center">
          <a
            href="https://www.microsoft.com"
            title="Microsoft Home Page"
            aria-label="Microsoft Home Page"
            className={microsoftLogo}
          >
            <img src="https://themingdesigner.blob.core.windows.net/$web/MicrosoftLogo.png" className={microsoftLogo} />
          </a>
          <Link
            href="https://www.aka.ms/themedesigner"
            title="Microsoft Theme Designer page"
            aria-label="Microsoft Fabric Theme Designer page"
            styles={pipeFabricStyles}
          >
            | Fluent UI Theme Designer
          </Link>
        </Stack>
        
        
      </Stack>
    );
  }

  

  
}
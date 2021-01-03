import * as React from 'react';

import {
  BaseSlots,
  IThemeRules,
  FabricSlots,
  ThemeGenerator,
  themeRulesStandardCreator,
} from '@fluentui/react/lib/ThemeGenerator';
import { Async } from '@fluentui/react/lib/Utilities';
import { createTheme, ITheme } from '@fluentui/react/lib/Styling';
import { getColorFromString, IColor } from '@fluentui/react/lib/Color';
import { Header } from './layout/Header';
import { IconButton } from '@fluentui/react/lib/compat/Button';
import { isDark } from '@fluentui/react/lib/Color';
import { mergeStyles } from '@fluentui/merge-styles';

import { Stack, IStackProps } from '@fluentui/react/lib/Stack';

import { Text } from '@fluentui/react';

import { MainPanelWidth } from './shared/MainPanelStyles';
import Navigation from './layout/Navigation';
import CardsSection from './components/Cards';

export interface IThemingDesignerState {
  primaryColor: IColor;
  textColor: IColor;
  backgroundColor: IColor;
  theme?: ITheme;
  themeRules?: IThemeRules;
}

const Page = (props: IStackProps) => (
  <Stack
    gap={10}
    className={mergeStyles({
      height: '100vh',
      overflow: 'hidden',
      selectors: {
        ':global(body)': {
          padding: 0,
          margin: 0,
        },
      },
    })}
    {...props}
  />
);

const Content = (props: IStackProps) => (
  <Stack horizontal gap={10} className={mergeStyles({ overflow: 'hidden' })} {...props} />
);

const Sidebar = (props: IStackProps) => (
  <Stack
    disableShrink
    gap={20}
    grow={0}
    className={mergeStyles({
      borderRight: '1px solid #ddd',
      paddingRight: '1rem',
    })}
    {...props}
  />
);

const Main = (props: IStackProps) => (
  <Stack
    grow={1}
    disableShrink
    className={mergeStyles({
      minWidth: MainPanelWidth,
      overflow: 'scroll',
    })}
    {...props}
  />
);

export class Home extends React.Component<{}, IThemingDesignerState> {

  private _async: Async;

  constructor(props: {}) {
    super(props);

    this._async = new Async(this);

    this.state = this._buildInitialState();
  }

  public componentWillUnmount(): void {
    this._async.dispose();
  }

  public render() {
    return (
      <Page>
        <Header themeRules={this.state.themeRules} />
        <Content>
          <Sidebar>
          <Navigation />
            {/* the three base slots, prominently displayed at the top of the page */}
            
          </Sidebar>
          <Main>
         
          <CardsSection />
           
          </Main>
        </Content>
      </Page>
    );
  }

  

  private _buildInitialState = (): IThemingDesignerState => {
    const themeRules = themeRulesStandardCreator();
    const colors = {
      primaryColor: getColorFromString('#0078d4')!,
      textColor: getColorFromString('#323130')!,
      backgroundColor: getColorFromString('#ffffff')!,
    };
    ThemeGenerator.insureSlots(themeRules, isDark(themeRules[BaseSlots[BaseSlots.backgroundColor]].color!));
    ThemeGenerator.setSlot(themeRules[BaseSlots[BaseSlots.primaryColor]], colors.primaryColor, undefined, false, false);
    ThemeGenerator.setSlot(themeRules[BaseSlots[BaseSlots.foregroundColor]], colors.textColor, undefined, false, false);
    ThemeGenerator.setSlot(
      themeRules[BaseSlots[BaseSlots.backgroundColor]],
      colors.backgroundColor,
      undefined,
      false,
      false,
    );

    const themeAsJson: {
      [key: string]: string;
    } = ThemeGenerator.getThemeAsJson(themeRules);

    const finalTheme = createTheme({
      ...{ palette: themeAsJson },
      isInverted: isDark(themeRules[BaseSlots[BaseSlots.backgroundColor]].color!),
    });

    const state = {
      ...colors,
      theme: finalTheme,
      themeRules: themeRules,
    };

    return state;
  };
}
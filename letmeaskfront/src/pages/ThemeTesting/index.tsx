import  Header  from '../../components/Header';
import { ThemedButton } from '../../components/ThemedButton';

import { DEFAULT_THEME, DARK_THEME }  from '../../context/ThemeContext';

export function ThemeTesting() {

  return (
      <div className={"app"}>
        <Header/>
        <div className={"buttons"}>
        <ThemedButton changeTheme={DEFAULT_THEME}>Default</ThemedButton>
        <ThemedButton changeTheme={DARK_THEME}>Dark</ThemedButton>
        </div>
      </div>
  );
}
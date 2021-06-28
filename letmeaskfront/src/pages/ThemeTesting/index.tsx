import Header from '../../components/Header';
import ThemedButton from '../../components/ThemedButton';
import styles from './App.module.scss';

import { DEFAULT_THEME, DARK_THEME, LIGHT_THEME, ThemeContext }  from '../../context/ThemeContext';

export function ThemeTesting() {

  return (
    <ThemeContext>
      <div className={styles.app}>
        <Header/>
        <div className={styles.buttons}>
        <ThemedButton changeTheme={DEFAULT_THEME}>Default</ThemedButton>
        <ThemedButton changeTheme={DARK_THEME}>Dark</ThemedButton>
        <ThemedButton changeTheme={LIGHT_THEME}>Light</ThemedButton>
        </div>
      </div>
    </ThemeContext>
  );
}
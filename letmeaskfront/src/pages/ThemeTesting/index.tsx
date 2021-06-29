import  Header  from '../../components/Header';
import { ThemedButton } from '../../components/ThemedButton';
import styles from './ThemeTesting.module.scss'; 

import { DEFAULT_THEME, DARK_THEME, LIGHT_THEME }  from '../../context/ThemeContext';

export function ThemeTesting() {

  return (
      <div className={styles.app}>
        <Header/>        
         
        <div className={styles.buttons}>
        <ThemedButton changeTheme={DEFAULT_THEME}>Default</ThemedButton>
        <ThemedButton changeTheme={DARK_THEME}>Dark Mode</ThemedButton>
        <ThemedButton changeTheme={LIGHT_THEME}>Light Mode</ThemedButton>
        </div>

      </div>
  );
}
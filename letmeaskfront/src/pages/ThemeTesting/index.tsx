import { Header }  from '../../components/Header';
import { ThemedButton } from '../../components/ToggleMode';
import styles from './ThemeTesting.module.scss';
 

export function ThemeTesting() {

  return (
      <div className={styles.app}>
        <Header/>        
         
        <div className={styles.buttons}>
        <ThemedButton />
        </div>

      </div>
  );
}
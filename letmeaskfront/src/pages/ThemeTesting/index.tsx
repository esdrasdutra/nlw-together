import { Header } from '../../components/Header';
import { ToggleButton } from '../../components/ToggleButton';
import styles from './ThemeTesting.module.scss';


export function ThemeTesting() {

  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.buttons}>
          <ToggleButton />
      </div>
    </div>
  );
}
import {useContext} from "react";
import styles from "./Header.module.scss";

import { ThemeContext } from '../../context/ThemeContext';

export function Header() {

    const { globalTheme } = useContext(ThemeContext);

    return(
        <header className={`${styles.header} ${styles[globalTheme]}`}>
            <p className={styles[globalTheme]}>HEADER - {globalTheme}</p>
        </header>
    )
};
import {ReactNode, useContext} from "react";
import styles from "../../pages/ThemeTesting/ThemeTesting.module.scss";

import { ThemeContext } from '../../context/ThemeContext';

type ThemedButtonProps = {
    children: ReactNode,
    changeTheme: string
}

export function ThemedButton(props:ThemedButtonProps){

    const {globalTheme, setGlobalTheme} = useContext(ThemeContext);

    const onClick = () => {
        setGlobalTheme(props.changeTheme);
    }

    return(
        <button className={`${styles.button} ${styles[globalTheme]}`} onClick={onClick}>
            {props.children}
        </button>
    )
};
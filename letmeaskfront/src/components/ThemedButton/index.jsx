
import React, {useContext} from "react";
import { ThemeContext } from '../../context/ThemeContextParent';

const Button = (props) => {
    const {children, changeTheme} = props;
    const { globalTheme, setGlobalTheme } = useContext(ThemeContext);

    const onClick = () => {
        setGlobalTheme(changeTheme);
    }
    
    return(
        <button className={`${styles.button} ${styles[globalTheme]}`} onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;
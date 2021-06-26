import logoNlw from "../../assets/images/nlw_logo.svg";
import './styles.scss';

export function NavBar() {
    return (
        <div className="styles_header">
            <div className="styles_container">
                <img className="styles_logo" src={logoNlw} alt="NLW TOGETHER" />
            </div>
        </div>
    );
}
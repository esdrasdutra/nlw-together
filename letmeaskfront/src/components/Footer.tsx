import logoRckt from "../assets/images/rocket_logo.svg";

export function Footer() {
    return (
        <footer className="footer fixed-bottom mt-auto py-2 bg-dark">
            <div className="container text-center">
                <div className="text-light">©2021 Created by <a href="https://github.com/esdrasdutra/" target="_blank" rel="noreferrer">Esdras Dutra</a></div>
                <a href="https://rocketseat.com.br/" target="_blank" rel="noreferrer">
                    <img className="styles_logoRocketseat" src={logoRckt} alt="Rocketseat" />
                </a>                
            </div>
        </footer >
    );
}
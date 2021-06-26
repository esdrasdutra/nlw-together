import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import logoImg from '../../assets/images/logo.svg';

import './styles.scss';
import { useHistory } from "react-router-dom";

export function Landing() {
  
  const history = useHistory();

  function handleToHome(){
    history.push("/home");
  }

  return (
    <div>
      <NavBar />
      <div id="landing-page">
        <aside>
          <img src={logoImg} alt="Letmeask" />
          <strong>Plataforma de Interação em Tempo Real</strong>
          <p>Responda as perguntas da sua audiência enquanto transmite seu conteúdo.</p>
        </aside>

        <main>
          <div className="main-content">
            <p>
              Você será capaz de criar uma sala para receber a sua audiência e assim responder as questões mais relevantes
              sobre o seu conteúdo.</p>

           <Button onClick={ handleToHome } type="submit">
              Conheça a Plataforma.
            </Button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
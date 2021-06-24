import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import logoImg from '../assets/images/logo.svg';

import '../styles/landing.scss';

export function Landing() {

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

           <Button type="submit">
              EM DESENVOLVIMENTO
            </Button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
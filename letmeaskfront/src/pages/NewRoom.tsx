import { Link } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom(){
    return(
        <div id="page-auth">
  
          <aside>
            <img src={ illustrationImg } alt="Ilustração parar Perguntas e Respostas" />
            <strong> Crie salas de {`Q&A`} ao-vivo</strong>
            <p>Tire as dúvidas da sua audiência em tempo real</p>
          </aside>
  
          <main>
            <div className="main-content">
              <img src={ logoImg } alt="Letmeask" />
              <h2>Criar uma Nova Sala</h2>
              
              <form>
                <input
                type="text"
                placeholder="Nome da Sala" />
                <Button type="submit">
                  Criar Sala
                </Button>
              </form>
              <p>Quer entrar em uma sala existente? <Link to="/home">Clique AQUI</Link></p>
            </div>
          </main>
    
        </div>
      )
}
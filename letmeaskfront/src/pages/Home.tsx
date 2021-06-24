//import { useHistory } from 'react-router';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { auth, firebase } from '../services/firebase';

import { Button } from '../components/Button';

export function Home() {
  //const history = useHistory();

  function handleCreateRoom() {

    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
        console.log(result);
      })
    //history.push("rooms/new");   
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração parar Perguntas e Respostas" />
        <strong> Crie salas de {`Q&A`} ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre e uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o Código da Sala" />
            <Button type="submit">
              Entrar na Sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}



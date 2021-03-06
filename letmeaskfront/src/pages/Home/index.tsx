import { useHistory } from 'react-router';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

import { FormEvent } from 'react';
import { useState } from 'react';
import { database } from '../../services/firebase';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleImg from '../../assets/images/google-icon.svg';
import joinImg from '../../assets/images/join.svg';

import './styles.scss';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('This Room does not exists!!');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room Already Closed.');
      return;
    }

    history.push(`/rooms/${roomCode}`);

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
              placeholder="Digite o Código da Sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button onClick={handleJoinRoom} type="submit">
              <img src={joinImg} alt="Entrar" />
              Entrar na Sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
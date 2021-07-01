import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import answerImg from '../../assets/images/answer.svg';
import checkImg from '../../assets/images/check.svg';
import exitImg from '../../assets/images/exit.svg';
import emptyquestionsImg from '../../assets/images/empty-questions.svg';

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';
import { CustomModal } from '../../components/CustomModal';

import './styles.scss';


type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const history = useHistory();

  const [endRoomModal, setEndRoomModal] = useState(false);

  const [deletQuestionModal, setDeleteQuestionModal] = useState(false);
  const [questionId, setQuestionId] = useState('');

  const { title, questions } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    await database.ref(`/rooms/${roomId}/questions/${questionId}`).remove();
    setDeleteQuestionModal(false);
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`/rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`/rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleEndRoom(roomId: string) {
    await database.ref(`/rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/home')
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <div>
            <img src={logoImg} alt="letmeask" />
 
          </div>

          <div>
            <RoomCode code={roomId} />
            <Button isOutLined onClick={() => setEndRoomModal(true)}> Encerrar a Sala </Button>
          </div>

        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} Pergunta(s)</span>}
        </div>

        {questions.length > 0 ? questions.map(question => {
          return (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
              isHighlighted={question.isHighlighted}
              isAnswered={question.isAnswered}>

              {!question.isAnswered && (
                <>
                  <button
                    type="button"
                    onClick={() => handleCheckQuestionAsAnswered(question.id)}
                  >
                    <img src={checkImg} alt="Marcar Questão Respondida" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleHighlightQuestion(question.id)}
                  >
                    <img src={answerImg} alt="Dar destaque à pergunta" />
                  </button>
                </>

              )}
              <button
                type="button"
                className="delete-question"
                onClick={() => { setDeleteQuestionModal(true); setQuestionId(question.id) }}
              >
                <img src={deleteImg} alt="Remover Pergunta" />
              </button>
            </Question>
          )
        }) :
          <div className="empty-question-container">
            <div className="without-question">
              <img className="empty-question" src={emptyquestionsImg} alt="Sem Perguntas" />
              <h2>Nenhuma Pergunta por aqui...</h2>
              <p>Envie o código desta sala para seus amigos e comece a responder perguntas!</p>
            </div>
          </div>
        }

        <CustomModal
          icon={exitImg}
          onHide={() => setEndRoomModal(false)}
          onConfirm={() => handleEndRoom(roomId)}
          show={endRoomModal}
          title={"Encerrar Sala?"}
          message={"Tem certeza que você deseja encerrar esta sala?"}
          confirmText={"Sim, encerrar."}
        />

        <CustomModal
          icon={deleteImg}
          onHide={() => setDeleteQuestionModal(false)}
          onConfirm={() => handleDeleteQuestion(questionId)}
          show={deletQuestionModal}

          title={"Excluir Pergunta?"}
          message={"Tem certeza que você deseja deletar esta pergunta?"}
          confirmText={"Sim, excluir."}
        />

      </main>
    </div>
  )
}
import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import answerImg from '../assets/images/answer.svg';
import checkImg from '../assets/images/check.svg';

import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

import '../pages/Room/styles.scss';

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const history = useHistory();

    const { title, questions } = useRoom(roomId);

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm("Tem Certeza que Deseja Excluir esta pergunta?")) {
            await database.ref(`/rooms/${roomId}/questions/${questionId}`).remove();
        }
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
        if (window.confirm("Você quer mesmo encerrar a sala?")) {
            await database.ref(`/rooms/${roomId}`).update({
                endedAt: new Date(),
            });
        }

        history.push("/home");
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutLined onClick={() => handleEndRoom(roomId)}> Encenrrar a Sala </Button>
                    </div>
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} Pergunta(s)</span>}
                </div>

                {questions.map(question => {
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
                                onClick={() => handleDeleteQuestion(question.id)}
                            >
                                <img src={deleteImg} alt="Remover Pergunta" />
                            </button>


                        </Question>
                    )
                })}
            </main>
        </div>
    )
}
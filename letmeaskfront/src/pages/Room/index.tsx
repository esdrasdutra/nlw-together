import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import likeImg from '../../assets/images/like.svg';
import emptyquestionsImg from '../../assets/images/empty-questions.svg';

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';

import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import './styles.scss';

type RoomParams = {
    id: string;
}

export function Room() {
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const { user } = useAuth();
    const { title, questions } = useRoom(roomId);

    const [newQuestion, setNewQuestion] = useState('');

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();

        if (newQuestion.trim() === '') {
            return;
        }

        if (!user) {
            throw new Error('You must be logged in!')
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false,
        };

        await database.ref(`/rooms/${roomId}/questions`).push(question);

        setNewQuestion('');

    }

    async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
        if (likeId) {
            await database.ref(`/rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove();
        } else {
            await database.ref(`/rooms/${roomId}/questions/${questionId}/likes`).push({
                authorId: user?.id,
            })
        }

    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <div className="header-content">
                        <img src={logoImg} alt="letmeask" />
                    </div>
                    <div><RoomCode code={roomId} /></div>
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} Pergunta(s)</span>}
                </div>
                <form onSubmit={handleSendQuestion}>
                    <textarea
                        placeholder="O que voc?? quer perguntar?"
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />
                    <div className="form-footer">
                        {user ? (
                            <div className="user-info">
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <span>Para enviar uma pergunta, <button>fa??a seu login</button>.</span>
                        )}
                        <Button type="submit" disabled={!user}> Enviar Pergunta </Button>
                    </div>
                </form>

                {questions.length > 0 ? questions.map(question => {
                    return (
                        <Question
                            key={question.id}
                            content={question.content}
                            author={question.author}
                            isHighlighted={question.isHighlighted}
                            isAnswered={question.isAnswered}>

                            {!question.isAnswered && (
                                <button
                                    className={`like-button ${question.likeId ? 'liked' : ''}`}
                                    type="button"
                                    aria-label="Marcar como Gostei"
                                    onClick={() => { handleLikeQuestion(question.id, question.likeId) }}
                                >

                                    {question.likeCount > 0 && <span>{question.likeCount}</span>}
                                    <img src={likeImg} alt="Gostei" />

                                </button>
                            )}
                        </Question>
                    )
                }) :
                    !user ?
                        <div className="empty-question-container">
                            <div className="without-question">
                                <img className="empty-question" src={emptyquestionsImg} alt="Sem Perguntas" />
                                <h2>Nenhuma Pergunta por aqui...</h2>
                                <p>Fa??a seu login e seja a primeira pessoa a fazer uma pergunta</p>
                            </div>
                        </div> : <div className="empty-question-container">
                            <div className="without-question">
                                <img className="empty-question" src={emptyquestionsImg} alt="Sem Perguntas" />
                                <h2>Nenhuma Pergunta por aqui...</h2>
                                <p>Seja a primeira pessoa a fazer uma pergunta</p>
                            </div>
                        </div>
                }
            </main>
        </div>
    )
}
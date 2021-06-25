
import checkImg from '../assets/images/check.svg';
import emptyImg from '../assets/images/answer.svg';
import deleteImg from '../assets/images/delete.svg';

import { useAuth } from '../hooks/useAuth';

import '../styles/question.scss';

export function Question() {

  const { user } = useAuth();

  return (
    <div id="room-question">

      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet, mauris at rutrum pulvinar, nibh nulla suscipit elit, ac euismod nunc purus a quam. Ut quis sodales elit, finibus congue tortor. Ut sollicitudin lorem quis leo varius efficitur. Curabitur vitae pulvinar nisi. Quisque quis ligula viverra, faucibus ipsum eget, tincidunt nibh. In malesuada est enim, sed interdum ante sodales nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vel finibus ligula. Cras ex eros, posuere eu fringilla a, lacinia ut nibh.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet, mauris at rutrum pulvinar, nibh nulla suscipit elit, ac euismod nunc purus a quam. Ut quis sodales elit, finibus congue tortor. Ut sollicitudin lorem quis leo varius efficitur. Curabitur vitae pulvinar nisi. Quisque quis ligula viverra, faucibus ipsum eget, tincidunt nibh. In malesuada est enim, sed interdum ante sodales nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vel finibus ligula. Cras ex eros, posuere eu fringilla a, lacinia ut nibh.
        </p>
      </main>

      <footer>
        <div className="user-info">
          <img src={user?.avatar} alt="Foto do Usuário" />
          <span>{user?.name}</span>
        </div>

        <div className="question-info">
          <button>
            <img src={checkImg} alt="isHighlighted" />
          </button>
          <button>
            <img src={emptyImg} alt="isAnswered" />
          </button>
          <button>
            <img src={deleteImg} alt="delete" />
          </button>


        </div>
      </footer>

    </div>
  )
}
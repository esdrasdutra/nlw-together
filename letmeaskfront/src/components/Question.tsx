import { ReactNode } from 'react';
import cx from 'classnames';

import '../styles/question.scss';


type QuestionProps = {
  content: string,
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode,
  isHighlighted?: boolean,
  isAnswered?: boolean
}

export function Question({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}: QuestionProps) {

  return (
    <div className={cx(
      'room-question',
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered},
    )}>
      <p>
        {content}
      </p>

      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div className="question-info">
          {children}
        </div>
      </footer>

    </div>
  )
}
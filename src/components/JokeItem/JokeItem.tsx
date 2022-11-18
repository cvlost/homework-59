import React, {FC} from 'react';
import './JokeItem.css';

interface Props {
  content: string;
}

const JokeItem: FC<Props> = ({content}) => {
  return (
    <div className="JokeItem">
      {content}
    </div>
  );
};

export default JokeItem;
import React from 'react';
import './RequestButton.css';

interface Props {
  onClick: () => void;
}

const RequestButton: React.FC<Props> = ({onClick}) => {
  return (
    <button className="btn RequestButton" onClick={onClick}>Get new jokes</button>
  );
};

export default RequestButton;
import React from 'react';

interface Props {
  onClick: () => void;
}

const RequestButton: React.FC<Props> = ({onClick}) => {
  return (
    <button onClick={onClick}>Get new jokes</button>
  );
};

export default RequestButton;
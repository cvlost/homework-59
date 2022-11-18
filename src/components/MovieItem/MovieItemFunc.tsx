import React, {useEffect, useRef} from 'react';
import './MovieItem.css';

interface Props {
  onTitleChange: (title: string) => void;
  deleteMovie: React.MouseEventHandler;
  title: string;
}

const MovieItemFunc: React.FC<Props> = ({onTitleChange, deleteMovie, title}) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log(`[MovieItem] (title: ${title}) updated from useEffect()`);
    }
  }, [title]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTitleChange(e.target.value);
  };

  return (
    <div className="MovieItem">
      <input
        className="MovieItem-input"
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Enter a new title..."
      />
      <button
        className="MovieItem-button btn"
        type="button"
        onClick={deleteMovie}
      >
        X
      </button>
    </div>
  );
}

export default MovieItemFunc;
import React, {ChangeEvent, useState} from 'react';
import './AddMovieForm.css';

interface Props {
  addMovie: (text: string) => void;
}

const AddMovieFormFunc: React.FC<Props> = ({addMovie}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    addMovie(value);
    setValue('');
  };

  return (
    <div className="AddMovieFrom">
      <input
        className="AddMovieFrom-input"
        type="text"
        placeholder="The movie title..."
        value={value}
        onChange={handleChange}
      />
      <button
        className="AddMovieFrom-button btn"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};

export default AddMovieFormFunc;
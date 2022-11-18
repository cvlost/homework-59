import React, {ChangeEvent, Component} from 'react';
import './AddMovieForm.css';

interface State {
  value: string;
}

interface Props {
  addMovie: (text: string) => void;
}

class AddMovieForm extends Component<Props, State> {
  state: State = {value: ''};

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState(prev => ({...prev, value: e.target.value}));
  };

  handleClick = () => {
    this.props.addMovie(this.state.value);
    this.setState(prev => ({...prev, value: ''}));
  };

  render() {
    return (
      <div className="AddMovieFrom">
        <input
          className="AddMovieFrom-input"
          type="text"
          placeholder="The movie title..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className="AddMovieFrom-button btn"
          onClick={this.handleClick}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddMovieForm;
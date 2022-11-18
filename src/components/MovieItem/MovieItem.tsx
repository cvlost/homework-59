import React, {Component} from 'react';
import './MovieItem.css';

interface Props {
  rename: (title: string) => void;
  deleteMovie: React.MouseEventHandler;
  title: string;
}

class MovieItem extends Component<Props> {
  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    return this.props.title !== nextProps.title;
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
    console.log(`[MovieItem] (title: ${this.props.title}) from componentDidUpdate()`);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.rename(e.target.value);
  };

  render() {
    return (
      <div className="MovieItem">
        <input
          className="MovieItem-input"
          type="text"
          value={this.props.title}
          onChange={this.handleChange}
          placeholder="Enter a new title..."
        />
        <button
          className="MovieItem-button btn"
          type="button"
          onClick={this.props.deleteMovie}
        >
          X
        </button>
      </div>
    );
  }
}

export default MovieItem;
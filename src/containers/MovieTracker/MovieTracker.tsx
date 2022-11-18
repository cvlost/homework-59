import React, {Component} from 'react';
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import MovieItem from "../../components/MovieItem/MovieItem";
import './MovieTracker.css';

interface MovieData {
  title: string;
  id: string;
}

interface State {
  list: MovieData[];
}

class MovieTracker extends Component<{}, State> {
  state: State = {
    list: []
  };

  componentDidMount() {
    const savedList = this.getList();
    if (savedList) this.setState(prev => ({...prev, list: savedList}));
  }

  getList() {
    let list: MovieData[] | null = null;
    const saves: string | null = localStorage.getItem('list_1');
    if (saves !== null) list = JSON.parse(saves);
    return list;
  };
  saveList(data: MovieData[]) {
    localStorage.setItem('list_1', JSON.stringify(data));
  };

  addItem = (title: string) => {
    this.setState(prev => {
      const newItem: MovieData = {title, id: Math.random().toString()};
      const list = [...prev.list, newItem];
      this.saveList(list);
      return {...prev, list};
    });
  };

  deleteItem = (id: string) => {
    this.setState(prev => {
      const list = prev.list.filter(item => item.id !== id);
      this.saveList(list);
      return {...prev, list};
    });
  };

  changeTitleHandler = (item: MovieData) => {
    return (title: string) => {
      this.setState(prev => {
        const newItem: MovieData = {...item, title};
        const list = [...prev.list];
        list[list.indexOf(item)] = newItem;
        this.saveList(list);
        return {...prev, list}
      });
    }
  };

  render() {
    return (
      <div className="MovieTracker">
        <AddMovieForm addMovie={this.addItem}/>
        <div className="MovieTracker-list">
          <h4 className="MovieTracker-title">To watch list: </h4>
          {this.state.list.map(movie => (
            <MovieItem
              key={movie.id}
              title={movie.title}
              deleteMovie={() => this.deleteItem(movie.id)}
              rename={this.changeTitleHandler(movie)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MovieTracker;
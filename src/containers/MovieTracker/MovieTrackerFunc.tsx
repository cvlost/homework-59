import React, {useEffect, useState} from 'react';
import AddMovieFormFunc from "../../components/AddMovieForm/AddMovieFormFunc";
import MovieItemFunc from "../../components/MovieItem/MovieItemFunc";

interface MovieData {
  title: string;
  id: string;
}

const MovieTrackerFunc = () => {
  const [list, setList] = useState<MovieData[]>([]);

  useEffect(() => {
    const savedList = getList();
    if (savedList) setList(savedList);
  }, []);

  const addItem = (title: string) => {
    setList(prev => {
      const newItem: MovieData = {title, id: Math.random().toString()};
      const list = [...prev, newItem];
      saveList(list);
      return list;
    });
  };

  const deleteItem = (id: string) => {
    setList(prev => {
      const list = prev.filter(item => item.id !== id);
      saveList(list);
      return list;
    });
  };

  const changeTitleHandler = (item: MovieData) => {
    return (title: string) => {
      setList(prev => {
        const newItem: MovieData = {...item, title};
        const listCopy = [...prev];
        listCopy[listCopy.indexOf(item)] = newItem;
        saveList(listCopy);
        return listCopy;
      });
    }
  };

  const getList = () => {
    let list: MovieData[] | null = null;
    const saves: string | null = localStorage.getItem('list_2');
    if (saves !== null) list = JSON.parse(saves);
    return list;
  };

  const saveList = (data: MovieData[]) => {
    localStorage.setItem('list_2', JSON.stringify(data));
  };

  return (
    <div className="MovieTracker">
      <AddMovieFormFunc addMovie={addItem}/>
      <div className="MovieTracker-list">
        <h4 className="MovieTracker-title">To watch list: </h4>
        {list.map(movie => (
          <MovieItemFunc
            key={movie.id}
            title={movie.title}
            deleteMovie={() => deleteItem(movie.id)}
            onTitleChange={changeTitleHandler(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieTrackerFunc;
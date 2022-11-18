import React, {useEffect, useState} from 'react';
import JokeItem from "../../components/JokeItem/JokeItem";
import RequestButton from "../../components/RequestButton/RequestButton";
import './JokeBox.css';
import Preloader from "../../components/Preloader/Preloader";

const url = 'https://api.chucknorris.io/jokes/random';

interface Joke {
  id: string;
  value: string;
}

const JokeBox = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const getRandomJoke = async (url: string) => {
    const response = await fetch(url);

    if (response.ok) return response.json();
    else throw new Error('Something went wrong');
  };

  const getJokes = async (count: number) => {
    setIsFetching(true);
    const responses = [];
    for (let i = 0; i < count; i++) {
      responses.push(getRandomJoke(url));
    }
    const jokesData = await Promise.all(responses);
    const newJokes: Joke[] = jokesData.map(joke => ({id: joke.id, value: joke.value}))
    setJokes(newJokes);
    setIsFetching(false);
  };

  useEffect(() => {
    getJokes(5).catch(console.error);
  }, []);

  let preloader: React.ReactNode | null = <Preloader/>;

  if (!isFetching) preloader = null;

  return (
    <div className="JokeBox">
      {preloader}
      {jokes.map(joke => (
        <JokeItem key={joke.id} content={joke.value}/>
      ))}
      <RequestButton onClick={() => getJokes(5)}/>
    </div>
  );
};

export default JokeBox;
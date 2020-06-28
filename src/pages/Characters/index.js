import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { hashGenerate } from "../../utils/hashGenerator";

import Title from '../../components/Title';
import Main from "../../components/Main";


const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getCharacters(orderBy, limit, query) {
    const valuesHashGenerate = hashGenerate();

    try {
      await api
        .get(
          `${query}?ts=${valuesHashGenerate.timestamp}&orderBy=${orderBy}&limit=${limit}&apikey=${process.env.REACT_APP_API_KEY}&hash=${valuesHashGenerate.hash}`
        )
        .then((response) => {
          setCharacters(response.data.data.results);
        });

      setLoading(true);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCharacters('name', 4, 'characters');
  }, []);

  return (
    <>
      <Title>
        <h2>Characters</h2>
        <p>See all the Marvel characters</p>
      </Title>

      {loading ? (
        <Main
          variants={{
            show: {
              x: 0,
              opacity: 1,
            },
            hide: {
              x: -50,
              opacity: 0,
            },
            initial: {
              x: "100%",
              opacity: 0,
            },
          }}
          animate="show"
          initial="initial"
          exit="hide"
        >
          <ul className="heroes-grid">
            {characters.map((character) => (
              <li key={character.id}>
                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt={character.name}
                />
                <span>{character.name}</span>
              </li>
            ))}
          </ul>
        </Main>
      ) : (
        <Main>Loading...</Main>
      )}
    </>
  );
};

export default Character;

import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { hashGenerate } from '../../services/hashGenerator';

import NavMenu from '../../components/NavMenu';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Main, slideAnimation } from '../../components/Main';

import '../Home/styles.css'


const Character = () => {

    const [characters, setCharacters]   = useState([]);
    const [loading, setLoading]         = useState(false);

    async function getCharacters(){
        const orderBy ='name';
        const limit = 4;
        const query = 'characters';
        const valuesHashGenerate = hashGenerate();

        try {
            await api.get(`${query}?ts=${valuesHashGenerate.timestamp}&orderBy=${orderBy}&limit=${limit}&apikey=${process.env.REACT_APP_API_KEY}&hash=${valuesHashGenerate.hash}`)
                .then(response => {
                    setCharacters(response.data.data.results);
            });
            
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCharacters(); 
    }, []);


    return (
        <div id="page-home">
            <div className="content">
                    <Header />

                    <NavMenu />

                <legend>
                    <h2>Characters</h2>
                    <p>See all the Marvel characters</p>
                </legend>

                {loading ? 
                    <Main 
                        variants={slideAnimation}
                        animate="show" 
                        initial="initial"
                        exit="hide"
                    >
                        <ul className="heroes-grid">
                            {
                                characters.map((character) =>
                                    <li key={character.id}>
                                        <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name} />
                                        <span>
                                            {character.name}
                                        </span>
                                    </li>
                                )
                            }
                        </ul>
                    </Main>
                 : 
                    <Main 
                        variants={slideAnimation}
                        animate="show" 
                        initial="initial"
                        exit="hide"
                    >
                        Loading...
                    </Main>
                }

                <Footer />

            </div>
        </div>
    )
}


export default Character;

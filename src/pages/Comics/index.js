import React, { useState, useEffect } from 'react';
import api from '../../services/api';


const Comic = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <h1>Marvel Project</h1>
                </header>

                <NavMenu />

                <legend>
                    <h2>Comics</h2>
                    <p>See all the Marvel comics</p>
                </legend>

                <main>
                    <ul className="heroes-grid">
                        {
                            characters.map((character) =>
                                <li key={character}>
                                    <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name} />
                                    <span>
                                        {character.name}
                                    </span>
                                </li>
                            )
                        }
                    </ul>
                </main>

                <footer>

                </footer>
            </div>
        </div>
    );
}

export default Comic;

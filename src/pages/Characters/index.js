import React from 'react';

import api from '../../services/api';


export default class Character extends React.Component{

    state = {
        data: [],
    }

    async componentDidMount(){
        const orderBy = 'name';
        const limit = 10;

        try {
            await api.get(`${process.env.REACT_APP_API_URL}characters?ts=${process.env.REACT_APP_API_TIMESTAMP}&orderBy=${orderBy}&limit=${limit}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_API_HASH}`)
                .then(res => {
                    this.setState({ data: res.data.data.results });
                });
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return(
            <ul>
                { 
                    this.state.data.map((character, index) =>
                        <li key={index}>
                            <img alt="heroThumbnail" src={character.thumbnail.path + '.' + character.thumbnail.extension}></img>
                            Hero {character.name}
                        </li>
                    )
                }
            </ul>
        )
    };
}

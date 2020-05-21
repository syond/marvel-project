import React from 'react';

import api from '../../services/api';

import { Container, Thumbnail, Card, CardText, Header } from './styles';

import Logo from '../../assets/MarvelLogo.svg';



export default class Character extends React.Component{

    state = {
        data: [],
    }

    async componentDidMount(){
        const orderBy = 'name';
        const limit = 20;
        const query = 'characters';

        try {
            await api.get(`${process.env.REACT_APP_API_URL && query}?ts=${process.env.REACT_APP_API_TIMESTAMP}&orderBy=${orderBy}&limit=${limit}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_API_HASH}`)
                .then(res => {
                    this.setState({ data: res.data.data.results });
                });
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return(
                <Container>
                    <Header>
                        <img src={Logo} alt="Marvel" width="300" height="300" />
                    </Header>
                    <ul>
                        { 
                            this.state.data.map((character, index) =>
                                <li key={index}>
                                    <Thumbnail src={character.thumbnail.path + '.' + character.thumbnail.extension}/>
                                    <CardText>
                                        {character.name}
                                    </CardText>
                                </li>
                            )
                        }
                    </ul>
                </Container>
        )
    };
}

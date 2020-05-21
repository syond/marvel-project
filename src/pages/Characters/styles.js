import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 30px;
    margin: 32px auto;

    width: 100%;
    max-width: 1280px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    height: 150px;
    background: white;
`;

export const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    

    position: relative;
    
    background:black;
`;

export const Thumbnail = styled.img`
    width: 280px;
    height: 425px;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-size: cover;
`;

export const CardText = styled.p`
    color: white;
    font-family: roboto;
`;
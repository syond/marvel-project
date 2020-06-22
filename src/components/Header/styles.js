import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    margin: 40px 0 0;
`;

export const Logo = styled.div`
    height: 100px;
    width: 250px;

    background-image: url(${props => props.src});
`;

export const Menu = styled.div``;

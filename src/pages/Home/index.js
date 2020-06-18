import React from 'react';

import NavMenu from '../../components/NavMenu';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Main, slideAnimation } from '../../components/Main';

import './styles.css';


const Home = () => {

    return(
        <div id="page-home">
            <div className="content">
                <Header />

                <NavMenu />

                <legend>
                    <h2>Welcome</h2>
                    <p>See all the Marvel content here :)</p>
                </legend>

                <Main 
                    variants={slideAnimation}
                    animate="show" 
                    initial="initial"
                    exit="hide"
                >
                    dsfgdfg
                </Main>

                <Footer />
                
            </div>
        </div>
    );
}


export default Home;

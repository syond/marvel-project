import React from "react";

import Title from "../../components/Title";
import Main from "../../components/Main";

import "./styles.css";

const Home = () => {
  return (
    <>
      <Title>
        <h2>Welcome</h2>
        <p>See all the Marvel content here :)</p>
      </Title>

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
        Home Page
      </Main>
    </>
  );
};

export default Home;

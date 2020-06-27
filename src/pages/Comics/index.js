import React from "react";

import Title from "../../components/Title";
import Main from "../../components/Main";


const Comic = () => {
  return (
    <>
      <Title>
        <h2>Welcome</h2>
        <p>See all the Marvel comics here :)</p>
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
        Comics Page
      </Main>
    </>
  );
};

export default Comic;

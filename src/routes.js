import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from './components/Footer';

import Home from "./pages/Home";
import Character from "./pages/Characters";
import Comic from "./pages/Comics";
import About from "./pages/About";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Character} path="/characters" exact />
          <Route component={Comic} path="/comics" exact />
          <Route component={About} path="/about" exact />
        </Switch>
        <Footer><span>2020 - All Rights Reserved - Syond Santos</span></Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;

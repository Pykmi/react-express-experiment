import React from "react";
import "./App.css";

import Footer from "./Footer";
import Header from "./Header";

function About() {
  return (
    <>
      <Header />

      <main>
        <div className="row">
          <div className="col-sm-8">
            <div className="jumbotron">
              <h1>This is great</h1>
              <p>Welcome to templating using EJS</p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="well">
              <h3>Look I'm A Sidebar!</h3>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default About;

import React, { Component } from "react";
import "./App.css";

import Footer from "./Footer";
import Header from "./Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { get: false };
  }

  componentDidMount() {
    fetch(`http://localhost:8090/api/get`)
      .then(res => res.json())
      .then(json => JSON.parse(json))
      .then(json => this.setState({ get: json }));
  }

  render() {
    const { drinks, tagline } = this.state.get;

    return (
      <>
        <Header />

        <main>
          <div className="jumbotron">
            <h1>This is great</h1>
            <p>Welcome to templating using EJS</p>

            {tagline && (
              <>
                <h2>Variable</h2>
                <p>{tagline}</p>
              </>
            )}

            {drinks && (
              <>
                <h2>Loop</h2>
                <ul>
                  {drinks.map(drink => (
                    <li key={drink.name}>
                      {drink.name} - {drink.drunkness}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default App;

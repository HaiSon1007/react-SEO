import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Router } from "@reach/router";
function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My React SEO - Counter</title>
        <link
          rel="canonical"
          href="https://react-seo-demo-dunghd.vercel.app/"
        />
        <meta
          name="description"
          content="Simple React SEO Application for counter"
        />
      </Helmet>
      <h3>Simple React SEO Demo - Counter page</h3>
      <header className="App-header">
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>Simple counter</p>
        <a href="/">Back to homepage</a>
      </header>
    </div>
  );
}

function Home(props) {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My React SEO - Homepage</title>
        <link
          rel="canonical"
          href="https://react-seo-demo-dunghd.vercel.app/"
        />
        <meta name="description" content="Simple React SEO Application" />
      </Helmet>
      <h3>Simple React SEO Demo</h3>
      <header className="App-header">
        <a href="/counter">Go to counter</a>
      </header>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Counter path="counter" />
      </Router>
    </div>
  );
}

export default App;
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>;

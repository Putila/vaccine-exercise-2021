import React from "react";
import logo from "./snaids.png";
import "./App.css";
import ReactJson from 'react-json-view'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  const [data,setData]=React.useState([]);
  const fetchData = () => {
    return fetch("/api")
      .then((response) => response.json())
      .then((data) => 
        setData(data),
        console.log(data));
    }
  // fetch('/api')
  // .then(response => response.json())
  // .then(data => console.log(data));

  //const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>{!data ? "Loading..." : data}</p> */}
        {console.log(data)}
        <ReactJson src={data} />
      </header>
    </div>
  );
}

export default App;
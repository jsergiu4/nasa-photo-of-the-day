
import React from "react";
import "./App.css";

function getCurrentDate(){
  const today = new Date();
  const dd = String(today.getDate()).padStart(2 , '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  return yyyy + '-' + mm + '-' + dd + '-'
}


function App() {
  const [state , setState] = React.useState({});
  const [query, setQuery] = React.useState(() => getCurrentDate());

  React.useEffect(() =>{
    const fetchData = async () => {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${query}`);
    const data = await res.json();

    setState(data);
    }
    fetchData()
  } , [query]);

  const onChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div className="App">
      <img src={state.url} alt={state.title} />
      <input type="date" value={query} onChange={onChange} />
    </div>
  );
}

export default App;

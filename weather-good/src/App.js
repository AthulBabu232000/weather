import "./App.css";
const api = {
  key: "6c96608721bcbe2ba8475cb0c88a73c8",
  base: "https //api.openweathermap.org/data/2.5/"
}

function App() {

  const dateBuilder = (d) =>{
    let months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>

        <div className="location-box">
          <div className="location"></div>
          <div className="date">{dateBuilder(new Date)}</div>
        </div>

        <div className="weather-box">
          <div className="temp"></div>

          <div className="weather"></div>
        </div>
      </main>
    </div>
  );
}

export default App;

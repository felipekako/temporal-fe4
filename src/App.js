
import './App.css';

const appi = {
  kay: "b4dffd7b70953ee9b9d3fa84516ce89c",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div className="App calor">
     <main>
       <div className="search-box">
         <input
         type="text"
          classsName="search-bar"
          placeholder="digite a cidade"
         
         />
       </div>
     </main>
    </div>
  );
}

export default App;

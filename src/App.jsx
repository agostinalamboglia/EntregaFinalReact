
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <div style={{width:'100vh', height: '100vh'}}>
      <><NavBar></NavBar></>
      <><ItemListContainer greeting="Hola mundo"></ItemListContainer></>
      
    </div>
  );
  
}

export default App;

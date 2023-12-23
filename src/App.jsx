import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGetProducts } from "./hooks/useProducts";


const App = () => {
  const {productsData} = useGetProducts(10);

  return(
    <div style={{width:'100vw', height: '100vh'}}>
      <><NavBar></NavBar></>
      <><ItemListContainer greeting="Agostina Shop" productsData={productsData} ></ItemListContainer></>
    </div>
  );
  
}

export default App;

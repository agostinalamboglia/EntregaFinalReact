import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useGetProducts } from "../hooks/useProducts";

export const Home = () =>{
    const {productsData} = useGetProducts(12);

    return <><ItemListContainer productsData={productsData}></ItemListContainer></>
};

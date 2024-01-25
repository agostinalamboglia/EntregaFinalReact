import { useState, useEffect } from "react";
import { getCategories, getProductById, getProducts, getProductsByCategory } from "../services";

export const useGetProducts = (limit /*= 8*/) => {
    const [productsData, setProductsData] = useState([]);
    
    useEffect(() => {
        getProducts(limit)
        .then((response) => {
            setProductsData(response.data.products)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return{productsData}
}

export const useGetProductById = (id) => {
    const [productData, setProductData] = useState([]);
    
    useEffect(() => {
        getProductById(id)
        .then((response) => {
            setProductData(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);

    return{productData}
}

export const useGetCategories = () => {  ///GET CAT ISNT DEFINED
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getCategories()
        .then((response) => {
            setCategories(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return{categories}
}

export const useGetProductsByCategory = (id) => {
    const [productsData, setProductsData] = useState([]);
    
    useEffect(() => {
        getProductsByCategory(id)
        .then((response) => {
            setProductsData(response.data.products)
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);

    return{productsData}
}
import { useState, useEffect } from "react";
import { getCategories, getProductsByCategory } from "../services";
import {collection, getDocs, doc, getDoc, getFirestore} from "firebase/firestore";



export const useGetProducts = (collectionName = "products") => {
    const [productsData, setProductsData] = useState([]);
    
    useEffect(() => {
        const db = getFirestore();

        const productsCollection = collection(db, collectionName);

        getDocs(productsCollection).then((snapshot) => {
            setProductsData(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
        });

    }, []);

/*     useEffect(() => {
        getProducts(limit)
        .then((response) => {
            setProductsData(response.data.products)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []); */

    return{productsData}
}

export const useGetProductById = (collectionName = "products", id) => {
    const [productData, setProductData] = useState([]);
    
    useEffect(() => {
        const db = getFirestore();
        
        const docRef = doc(db, collectionName, id)

        getDoc(docRef).then((doc) => {
            setProductData({id: doc.id, ...doc.data()})
        })
/*         getProductById(id)
        .then((response) => {
            setProductData(response.data)
        })
        .catch((error) => {
            console.log(error);
        }); */
    }, [id]);

    return{productData};
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
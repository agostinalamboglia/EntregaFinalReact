import axios from "axios";

export async function getProducts(limit=8) {
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
}
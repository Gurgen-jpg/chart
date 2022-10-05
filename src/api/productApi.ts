import axios from "axios";
import {ECategoryName} from "../types/chartSliceType";


const instance = axios.create({
    baseURL: `https://dummyjson.com/products/`
})

export const prodAPI = {
    getCategory(categoryName: ECategoryName) {
        return instance
            .get(`category/${categoryName}`)
            .then((response) => {
                return response.data
            })
    }
}
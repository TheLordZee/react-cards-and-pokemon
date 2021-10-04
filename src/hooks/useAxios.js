import uuid from "uuid";
import axios from "axios";
import React, {useState} from "react"

const useAxios = (url) => {
    const [items, setItems] = useState([]);
    const addItem = async (data="") => {
        url = url + data + '/'
        try{
            const response = await axios.get(url);
            setItems(items => [...items, { ...response.data, id: uuid() }]);
        }catch(e){
            console.log(e)
        }
    };

    return [items, addItem]
}

export default useAxios;
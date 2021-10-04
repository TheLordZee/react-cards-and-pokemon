import React, {useState} from "react"
const useFlip = (initialState = true) => {
    const [flip, setFlip] = useState(initialState);
    const flipCard = () => {
      setFlip(flip => !flip);
    };
    return [flip, flipCard];
} 

export default useFlip;
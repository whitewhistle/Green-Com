import { createContext, useState } from "react";
export const Context=createContext();

const AppContext =({children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartarray, setCart]=useState([]);

    return <Context.Provider value ={{
    categories,
    setCategories,
    products,
    setProducts,
    cartarray,
    setCart,

    }}> 
        
        
        
{children} </Context.Provider>;

};

export default AppContext;
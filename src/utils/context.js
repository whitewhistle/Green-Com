import { createContext, useState } from "react";
export const Context=createContext();

const AppContext =({children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartarray, setCart]=useState([]);
    const [update, setUpdate]=useState(0);
    const [users, setUsers] = useState();

    return <Context.Provider value ={{
    categories,
    setCategories,
    products,
    setProducts,
    cartarray,
    setCart,
    update,
    setUpdate,
    users,
    setUsers

    }}> 
        
        
        
{children} </Context.Provider>;

};

export default AppContext;
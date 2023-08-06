import { createContext, useState } from "react";

const WikiContext = createContext();

const WikiProvider = ({ children }) => {

    const [ results, setResults ] = useState([]);

    return (
        <WikiContext.Provider value={{
            results, 
            setResults
        }}>
            {children}
        </WikiContext.Provider>
    )
};


export { WikiProvider };
export default WikiContext;
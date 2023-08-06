import { useState, useEffect, useContext } from "react";
import WikiContext from "../context/WikiContext";
import { TfiSearch } from 'react-icons/tfi'

import wiki from "../api/wiki";

const SearchBar = () => {

    const [ term, setTerm ] = useState('');
    const [ debounce, setDebounce ] = useState(term);

    const { setResults } = useContext(WikiContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(term)
        }, 1000); 

        return () => {
            clearTimeout(timer);
        };
    }, [term]);

    useEffect(() => {

        if(!debounce.length) return;

        const search = async () => {
            const { data } = await wiki(debounce);
            setResults(data.query.search);
        } 

        search()
    }, [debounce]);

    const handleSubmit = e => {
        e.preventDefault();
    };

    const handleChange = e => {
        setTerm(e.target.value);
    };

    return (
        <div className="searchbar-label-box">
            <form onSubmit={handleSubmit}>
                <label className="searchbar-label">Search In Wikipedia</label>
                <input
                    className="searchbar-input" 
                    type="text"
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default SearchBar;
import '../css/dropdown.scss';

import { useState, useRef, useEffect } from 'react';



const Dropdown = ({options, label, selected, onSelectedChange}) => {

    const dropdownRef = useRef();

    const [ show, setShow ] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    const handleClick = (option) => {
        onSelectedChange(option)
        setShow(false);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div
                onClick={() => handleClick(option)} 
                key={option.value} 
                className="option-item">
                {option.label}
            </div>
        );
    });

    useEffect(() => {
        const refHandler = (e) => {

            if(!dropdownRef.current) return;

            if(!dropdownRef.current.contains(e.target)) {
                setShow(false);
            }
        }
            document.body.addEventListener('click', refHandler)

        return () => {
            document.body.removeEventListener('click', refHandler)
        };
    }, [])
    console.log(selected)

    return (
        <div ref={dropdownRef} className='dropdown-form'>
            <div className='dropdown-field'>
                <label 
                    className='dropdown-label'
                    onClick={handleShow}
                >{selected.label ? selected.label : label}</label>
                <div 
                    className={`dropdown-selection${show ? '-visible' : ''}`}
                >
                    <i className="dropdown-icon"></i>
                    <div className="dropdown-text"></div>
                    <div className="menu-visible">
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
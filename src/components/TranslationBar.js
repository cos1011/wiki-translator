import React, { useState } from "react";


const TranslationBar = ({setText}) => {


    const handleChange = e => {
        setText(e.target.value);
    };

    return (
        <div>
            <article>
                <h2 className="input-text">Input Text</h2>
                    <input
                    type="text"
                    className="translator-input" 
                    style={{width:'30vw', height: '5vw'}}
                    onChange={handleChange}/>
                    
            </article>
        </div>
    );
};

export default TranslationBar;
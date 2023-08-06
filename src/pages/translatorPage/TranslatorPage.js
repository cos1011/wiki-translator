import { useState } from "react";

import '../../css/translatorPage.scss';
import TranslationBar from "../../components/TranslationBar";
import Dropdown from "../../components/Dropdown";
import Convert from "../../components/Convert";

const langOptions = [
    {
        label: 'Dutch',
        value: 'nl'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];


const TranslatorPage = () => {

    const [ language, setLanguage ] = useState(langOptions[0]);
    const [ text, setText ] = useState('');


    return (
        <div className="translator-container">
            <div className="dropdown-box">
                <Dropdown
                    label='Select Language'
                    options={langOptions} 
                    selected={language}
                    onSelectedChange={setLanguage} 
                />
            </div>
            <hr />

            <div className="input-output-container">
                <div className="translation-bar-box">
                    <TranslationBar
                        setText={setText}
                    />
                </div>
                <div className="convert-bar-box">
                    <Convert text={text} language={language} />
                </div>
            </div>
        </div>
    );
};

export default TranslatorPage;

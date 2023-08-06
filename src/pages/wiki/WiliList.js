import { useContext } from "react";
import WikiContext from "../../context/WikiContext";


const WikiList = () => {
    const { results } = useContext(WikiContext);

    const renderList = results.map(item => {
        return (
            <div key={item.pageid} className="resulted-item">
                <div className="content">
                    <div className="header">
                        {item.title}
                    </div>
                    <span className="text" dangerouslySetInnerHTML={{__html:item.snippet}}></span>
                    
                    <div className="link"><a target="_blank" href={`https://en.wikipedia.org?curid=${item.pageid}`}>Link</a></div>
                </div>
            </div>
        )
    }); 

    return (
        <div className='results-box'>
            {renderList}
        </div>
    );
};

export default WikiList;

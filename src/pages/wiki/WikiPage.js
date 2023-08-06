import SearchBar from "../../components/SearchBar";
import WikiList from "./WiliList";
import '../../css/wiki.scss';

const  WikiPage = () => {
    return (
        <div>
            <SearchBar />
            <div className="wiki-container">
                <WikiList />
            </div>
        </div>
    );
};

export default WikiPage;
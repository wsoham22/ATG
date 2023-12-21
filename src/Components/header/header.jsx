
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = ({ switchToSignUp }) => {
    return (
        <div>
            <div className="header">
                <ul>
                    <li>
                        <div className="whole">
                            {/* Add the whole.svg content or styling here */}
                        </div>
                    </li>
                    <li id='searchbar'>
                        <span id='sirch'>
                            <FontAwesomeIcon icon={faSearch} id='sear'/>
                            <input type="text" placeholder="Search for your favorite groups in ATG" className="label"/>
                        </span>
                    </li>
                    <li>
                        <div className="label">
                            <p className="create-account-it-s">
                                <span className="text-wrapper">Create account. </span>
                                <span className="span"><a href="#" onClick={switchToSignUp}>It’s free!</a></span>
                                <FontAwesomeIcon icon={faChevronDown} className="arrow-down" />
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="box2">
                <div className="text1">
                    Computer Engineering
                </div>
                <div className="text2">
                    142,765 Computer Engineers follow this
                </div>
            </div>
        </div>
    );
}

export default Header;

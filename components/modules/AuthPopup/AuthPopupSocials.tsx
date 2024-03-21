import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const AuthPopupSocials = ({ handleSignupWithOAuth }: { handleSignupWithOAuth: VoidFunction }) => {
    return (
        <div className='cart-body__socials'>
            <button className='btn-reset socials__btn gh-color' onClick={handleSignupWithOAuth}>
                <FontAwesomeIcon icon={faGithub} beat />
            </button>
            <button className='btn-reset socials__btn g-color' onClick={handleSignupWithOAuth} >
                <FontAwesomeIcon icon={faGoogle} shake />
            </button>
        </div>
    );
};

export default AuthPopupSocials;
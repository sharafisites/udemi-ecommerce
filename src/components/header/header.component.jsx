import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from './../../assets/crawn.svg'
import { auth } from './../../firebase/firebase.utils';
import { connect } from 'react-redux'

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>

                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                        :
                        <Link to="/signin"> Sign In </Link>
                }

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
})
export default connect(mapStateToProps)(Header);
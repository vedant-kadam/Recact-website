import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join in the Advnture
                </p>
                <p className='footer-subscrtion-text'>
                    Yo can also unsubscribe
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name='email'
                        placeholder='email@email.com'
                        className='footer-input'/>

                        <Button buttonStyle='btn--outline'>
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>

            <div className='footer-links'>
                <div className='footer-links-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to= "/sign-up"> HowIt Works </Link>
                        <Link to ="/sign-up"> HowIt Works </Link>
                        <Link to ="/sign-up"> HowIt Works </Link>
                        <Link to ="/sign-up"> HowIt Works </Link>
                        <Link to= "/sign-up"> HowIt Works </Link>
                        
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to= "/sign-up"> HowIt Works </Link>
                        <Link to ="/sign-up"> HowIt Works </Link>
                        <Link to ="/sign-up"> HowIt Works </Link>
                        <Link to ="/sign-up"> HowIt Works </Link>
                        <Link to= "/sign-up"> HowIt Works </Link>
                        
                    </div>
                
                </div>
                <div className='footer-links-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to= "/sign-up"> HowIt Works </Link>
                        <Link to ="/sign-up"> HowIt Works </Link>
                        <Link to ="/sign-up"> HowIt Works </Link>
                        <Link to ="/sign-up"> HowIt Works </Link>
                        <Link to= "/sign-up"> HowIt Works </Link>
                        
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to= "/sign-up"> HowIt Works </Link>
                        <Link to ="/sign-up"> HowIt Works </Link>
                        <Link to ="/sign-up"> HowIt Works </Link>
                        <Link to ="/sign-up"> HowIt Works </Link>
                        <Link to= "/sign-up"> HowIt Works </Link>
                        
                    </div>
                
                </div>
            </div>

            <section  className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to={'/'} className='social-logo'>
                            TRVL <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='Website-rights'>
                        TRVL 
                    </small>
                    <div className='social-icons'>
                        <Link to="/"
                        target='_blank'
                        class='social-icon-link facebook'
                        aria-lable = 'LinkedIn'>
                            <i class='fab fa-linkedin'/>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer

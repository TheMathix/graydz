import React from 'react';
import {Button} from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <div className='footer-container'>


      <div className='footer-links'>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>Como funciona</Link>
            <Link to='/'>Termos e Condições</Link>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contato</h2>
            <Link to='/'>Suporte</Link>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>YouTube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>

      </div>

      <section className='social-media'>
        <div className='social-media-wrapper'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Graydz <i class="fa fa-solid fa-kiwi-bird"></i>
            </Link>
          </div>
          <small className='website-rights'>Graydz © 2021</small>
          <div className='social-icons'>
            <Link className='social-icon-link facebook' to='/' target='_blank' arial-label='Facebook'>
              
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Footer;

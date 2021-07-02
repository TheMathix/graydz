import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--profile'];

const LINKS = ['', 'sign-up','accounthome'];



export const Button = ({
  children,
  type,
  onClick = null,
  onMouseOver = null,
  onMouseOut = null,
  linkTo = null,
  buttonStyle,
  buttonSize,
  width = null
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkLinkTo = LINKS.includes(linkTo) ? linkTo : LINKS[0];

   
    return(
      (checkLinkTo==LINKS[0]) ? (

        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} type={type} >
          {children}
        </button>

      ) : (

    <Link to={`${checkLinkTo}`} className='btn-mobile'>
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} type={type} >
        {children}
      </button>
    </Link>

    )
  )
};

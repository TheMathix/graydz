import React from 'react'
import '../../App.css';
import {Button} from './Button';
import { Link } from 'react-router-dom';

function ClassCardItem(props) {

    return (
        <>
            <li className='cards-item'>
                <Link className='cards-item-link' to={props.path}>
                    <div className ='cards-item-title'>
                        <h4 className='cards-item-text'>{props.title}</h4>
                    </div>
                    <div className='cards-item-info'>
                        <h5 className='cards-item-text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );

}


export default ClassCardItem;
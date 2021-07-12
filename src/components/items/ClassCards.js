import React from 'react'
import '../../App.css';
import {Button} from './Button';
import './ClassCards.css';
import Carousel from 'react-material-ui-carousel'
import ClassCardItem from './ClassCardItem';
import { useSelector } from 'react-redux';


const ClassCards = (props) =>  {

    const posts = useSelector((state) => state.posts);   

    console.log("class_act")
    console.log(props.class_act)
    
    const activities = props.class_act
    const card_list = {}
    let items = []

    // if ("class_act" in Object.keys(props)){
    //     console.log("entrou")
    if (props.class_act?.length > 0){
    for (let index = 0; index < props.class_act?.length; index++) {
        // console.log("index "+index)
        let div_num = activities[index].act.list
        // console.log("div_num "+div_num)
        let card_item = 
            <ClassCardItem
                title= {activities[index].act.title}
                text={activities[index].act.info}
                // label={actvities.class_actvities[index].title}
                path='/services'
            />
        // console.log("card_item")
        // console.log(card_item)

        if (div_num in Object.keys(card_list)) {
            card_list[div_num] = card_list[div_num].push(card_item)
        } 
        else{
            card_list[div_num] = [card_item]
            
        }
        console.log("card_list")
        console.log(card_list)
        
    }
    
    items = card_list['1']
    
    // console.log("items")
    // console.log(items)
    }
    else{
        return (
            <>
            </>
        )
    //     items =
    // [
    // <ClassCardItem
    //     title='Trabalho Discente Efetivo II'
    //     text='Desenhar em perspectiva cavallera a formiga apresentada em aula.'
    //     label='TDE'
    //     path='/services'
    // />,
    //    <ClassCardItem
    //     title='Trabalho Discente Efetivo III'
    //     text='Desenhar em perspectiva cavallera a aranha apresentada em aula.'
    //     label='TDE'
    //     path='/services'
    // />]
    }
    return (
        <div className ='cards'>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        
                        <Carousel animation="slide" autoPlay={false} cycleNavigation timeout={300}>
                            {
                                items.map( (item, i) => item)
                            }
                        </Carousel>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ClassCards;
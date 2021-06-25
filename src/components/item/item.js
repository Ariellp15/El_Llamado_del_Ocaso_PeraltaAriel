import {ItemCount} from '../itemCount/itemCount'
import './item.css'
import React, { useEffect, useState } from 'react'

export const Item = (props)=>{
        
    const onAdd = (items) => {
        if (props.stock !== 0) {
            alert('Se ha agregado ' + items)
        }
    } 
    return (
        <item>
    <div className='item-spects'>
    <div className='image'><img src={props.imgUrl} alt=''/></div>
        <div className='producto'>
        <h2>{props.title}</h2>
        <label>Código:</label>
        <p>{props.id}</p>
        <label>Descripción:</label>
        <p>{props.description}</p>
        <label>Precio:</label>
        <p>{props.price}</p>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    </div> 
        </item>
    )
}   
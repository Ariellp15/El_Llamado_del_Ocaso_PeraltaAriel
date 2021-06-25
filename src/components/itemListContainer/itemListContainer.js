import { useEffect, useState } from 'react'
import {ItemCount} from '../itemCount/itemCount'
import {Item} from '../Item/item'
import {ItemList} from '../ItemList/itemList'
export const ItemListContainer = (props) =>{
    
    const [items, setItems] = useState([])
    useEffect(()=>{
        const getItems=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve([
                    {
                        imgUrl: 
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyd0ZqijLetEsXy4LqMJp6KfF3np_oOzAsaoUTmJRj&usqp=CAE&s",
                        title: 
                        "Río sagrado",
                        id: "1234",
                        description: 
                        "Río sagrado es el título de una novela del autor Wilbur Smith ambientada en el Segundo Periodo Intermedio del antiguo Egipto. Fue publicada en 1994 y junto a El séptimo papiro, El hechicero y El soberano del Nilo forma parte de una serie de novelas ambientadas en Egipto",
                        price: 
                        "$1500",
                    },
                    {
                        imgUrl: 
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9a8SJUTHx7RPAIT8sfg0ndOayzUEXZ92pKcX_olV&usqp=CAE&s",
                        title: 
                        "Retumba el Trueno ",
                        id: "1235",
                        description: 
                        "Retumba el trueno retoma la trama de Cuando comen los leones. La accion se desarrolla en uno de los momentos culminantes de la guerra anglo-boer. En medio de una lucha sin cuartel vuelve a aparecer la figura avasalladora de Sean Courtney, ahora jefe de un comando britanico",
                        price: 
                        "$1600",
                    },
                    {
                        imgUrl: 
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TyCgb9gHqVO7SyBBysyo7jzRCo3oQAY5H6K6jsHv&usqp=CAE&s",
                        title: 
                        'Aves de Presa"',
                        id: "1236",
                        description: 
                        " Descubri una verdadera experiencia inmersiva con el monitor curvo de Samsung. Con una pantalla de 1.800R, disfrutá de un campo de visión parecido a una pantalla iMax, una gran curva con radio de 1.800 mm que crea un campo visual más amplio, mejora la profundidad y minimiza la distracción para que te concentres en tu contenido. No importa si es una película en línea, tu serie favorita de TV o un juego de carreras. La gran curva de Samsung te pondrá en el centro de tu contenido multimedia.",
                        price: 
                        "$1700",
                    },
                ])
            
            },2000)
        })
            getItems.then((arr)=>{
            setItems(arr)
            })
            
    })
    return (     
        
        <items clasName='list'>
            <hr/>
            <ItemList items={items}/>
            <br/>
            <Item/>
            <br/>
        </items>
        
        )
    } 
    
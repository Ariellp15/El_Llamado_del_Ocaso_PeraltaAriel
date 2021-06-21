import './home.css';
import { ItemListContainer } from '../../components/itemListContainer/itemListContainer';
import { NavBar } from '../../components/navBar/navBar';

export const Home = () =>{
    const name= 'Ari';
    const lastName= 'Peralta';
    const greeting = 'Mensaje de prueba';
    const fullName= `${name} ${lastName} ` 
    const library= 'React Js';
    const handdleClick = ()=> alert ('wtf');

    return(
        <div className= 'home'> 
            <NavBar 
            userName={name}
            userLastName={lastName}
            onClick={handdleClick}>
            <span>
            <p> aca esta el children</p>    
            </span>
            </NavBar>
            <ItemListContainer
            greetingMessage={greeting} />
            <section className='section_column'>
                <h1>Esta funcionando {fullName}</h1>
                <p>Parece que funciona con {library}</p>
            </section>
            <section className='section_row'>
            </section>
        </div>
    )
}
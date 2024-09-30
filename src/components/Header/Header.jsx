import Button from 'react-bootstrap/Button';
import './Header.scss'

export default function Header({handleShow}){
    return (
        <header className='header'>
            <div>
                <img className='header__img' src="./cafe_medialunas.svg" alt="" />
                <span>1 Café + 2 Medialunas</span>
            </div>
            <div className='header__credits' onClick={handleShow}>Créditos</div>
           {/*  <div className='header__links'>
                <div><a href="">Barrios</a></div>
                <div><a href="">Bares Notables</a></div>
                <div><a href="">Universidades</a></div>
            </div> */}
        </header>
    )
}
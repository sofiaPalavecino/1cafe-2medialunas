import './Header.scss'

export default function Header(){
    return (
        <header className='header'>
            <div>
                <img className='header__img' src="./cafe_medialunas.svg" alt="" />
                <span>1 Café + 2 Medialunas</span>
            </div>
            <div className='header__links'>
                <div><a href="">Barrios</a></div>
                <div><a href="">Bares Notables</a></div>
                <div><a href="">Universidades</a></div>
                <div><a href="">Créditos</a></div>
            </div>
        </header>
    )
}
import { useState } from 'react'
import Header from './Header/Header'
import CurrencyTable from './CurrencyTable/CurrencyTable'
import MainSign from './MainSign/MainSign'
import './App.scss'

function App() {

    return (
        <main>
            <Header />
            <section>
                <div className="wrap">
                    <div className="row title-wrapper">
                        <div className="col-md order-md-1 order-2">
                            <MainSign />
                        </div>
                        <div className="title-wrapper__main col-md order-md-2 order-1">
                            <h1>
                                <img className='title-icon' src="./cafe.svg" alt="" /> <span>+</span> <img className='title-icon' src="./medialunas.svg" alt="" />
                                &nbsp;Índice 2024 <br />Café + 2 Medialunas <br /> Buenos Aires
                            </h1>
                            <h2>Una foto de los precios del clásico combo porteño</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className='-theme-2'>
                <div className="wrap">
                    <h2 className='-bold-italic'>¿Cómo está la cosa?</h2>
                    <p>Los precios en este índice son pasados de pesos argentinos a dólares pues... inflación&nbsp;&#128522;.</p>
                    <hr />
                    <CurrencyTable />
                </div>
            </section>
        </main>
    )
}

export default App

import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import CurrencyTable from './components/CurrencyTable/CurrencyTable.jsx'
import MainSign from './components/MainSign/MainSign.jsx'
import Carrousel from './components/Carrousel/Carrousel.jsx'
import ReferenceTable from './components/ReferenceTable/ReferenceTable.jsx'
import data from './data.js'
import './App.scss'

function App() {

    const [allData, setAllData] = useState(data.data)

    const twitts = allData.twitts
    const cafes = allData.cafes


    function getCafeById(id){
        return cafes.find((cafe) => cafe.id === id);
    }
    
    const twittsElements = twitts.map((t) => {
        const cafe = getCafeById(t.cafeId)
        return (
            <MainSign
                key={`sign-${t.id}`}
                cafe={cafe}
                {...t}
            />
        )
    })

    return (
        <main>
            <Header />
            <section>
                <div className="wrap">
                    <div className="row title-wrapper">
                        <div className="col-xl order-xl-1 order-2">
                            <Carrousel items={twittsElements} />
                        </div>
                        <div className="title-wrapper__main col-xl order-xl-2 order-1">
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
                    <div className="row">
                        <div className="col">
                            <CurrencyTable />
                        </div>
                        <div className="col">
                            <ReferenceTable />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default App

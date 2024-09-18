import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import CurrencyTable from './components/CurrencyTable/CurrencyTable.jsx'
import MainSign from './components/MainSign/MainSign.jsx'
import Carrousel from './components/Carrousel/Carrousel.jsx'
import ReferenceTable from './components/ReferenceTable/ReferenceTable.jsx'
import ValuesTable from './components/ValuesTable/ValuesTable.jsx'
import data from './data.js'
import './App.scss'

function App() {

    const [allData, setAllData] = useState(data.data)

    const twitts = allData.twitts
    const cafes = allData.cafes.sort((a, b) => a.price - b.price);
    const currencies = allData.currencies
    
    const cafesUni = cafes.filter((c) => c.type == "university")
    const cafesNotables = cafes.filter((c) => c.type == "cafe-notable")
    const cafeChain = cafes.filter((c) => c.type == "cafe-chain")
    const fastFood = cafes.filter((c) => c.type == "fast-food")

    function getPriceLevel(price){
        let level = "-level-"
        if (price < 1350){
            return level + "4"
        } else if (price < 2700){
            return level + "3"
        } else if (price < 4060) {
            return level + "2"
        }
        return level + "1"
    }

    function getPriceLevelClass(price, tone){
        let level = getPriceLevel(price)
        if (tone) {
            level = `${level}__${tone}`
        }
        return level
    }


    function getCafeById(id){
        return cafes.find((cafe) => cafe.id === id);
    }
    
    const twittsElements = twitts.map((t) => {
        const cafe = getCafeById(t.cafeId)
        return (
            <MainSign
                key={`sign-${t.id}`}
                cafe={cafe}
                getPriceLevel={() => getPriceLevel(cafe.price)}
                {...t}
            />
        )
    })

    const currenciesData = {
        "2024": [
            getCafeById(currencies[2024].cheapestBar),
            getCafeById(currencies[2024].mostExpensiveBar)
        ],
        "2023": [
            getCafeById(currencies[2023].cheapestBar),
            getCafeById(currencies[2023].mostExpensiveBar)
        ],
        "2022": [
            getCafeById(currencies[2022].cheapestBar),
            getCafeById(currencies[2022].mostExpensiveBar)
        ]
    }

    console.log(currenciesData)

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
            <hr className='-theme-1' />
            <section className='-theme-2'>
                <div className="wrap">
                    <h2 className='-bold-italic'>¿Cómo está la cosa?</h2>
                    <div className='tables-container'>
                        <CurrencyTable />
                        <ReferenceTable />
                    </div>
                    <ValuesTable 
                        headers={["Menor/Mayor", "ARS", "USD"]}
                        currency={currencies[2023].currency}
                        year={2024}
                        info={currenciesData[2023]}
                        getPriceLevelClass={getPriceLevelClass}
                    />
                    <ValuesTable
                        title="Notables"
                        headers={["Bar", "ARS", "USD"]}
                        info={cafesNotables}
                        getPriceLevelClass={getPriceLevelClass}
                        dots={true}
                    />
                    <ValuesTable
                        title="Facultades"
                        headers={["Facultad", "ARS", "USD"]}
                        info={cafesUni}
                        getPriceLevelClass={getPriceLevelClass}
                        dots={true}
                    />
                    <ValuesTable
                        title="Cadenas de Café"
                        headers={["Cafeterías", "ARS", "USD"]}
                        info={cafeChain}
                        getPriceLevelClass={getPriceLevelClass}
                        dots={true}
                    />
                    <ValuesTable
                        title="Cadenas"
                        headers={["Comida Rápida", "ARS", "USD"]}
                        info={fastFood}
                        getPriceLevelClass={getPriceLevelClass}
                        dots={true}
                    />
                </div>
            </section>
        </main>
    )
}

export default App

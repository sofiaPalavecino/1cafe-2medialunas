import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import CurrencyTable from './components/CurrencyTable/CurrencyTable.jsx'
import MainSign from './components/MainSign/MainSign.jsx'
import Carrousel from './components/Carrousel/Carrousel.jsx'
import ReferenceTable from './components/ReferenceTable/ReferenceTable.jsx'
import ValuesTable from './components/ValuesTable/ValuesTable.jsx'
import Masonry from '@mui/lab/Masonry'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'
import parse from 'html-react-parser'
import data from './data.js'
import './App.scss'

function App() {
    const { t, i18n } = useTranslation()
    const [ currLgn, setCurrLgn ] = useState('es')

    console.log(currLgn)

    const allData = data.data

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

    function getProportions(array){
        let countPerCost = { "-level-4": 0, "-level-3": 0, "-level-2": 0, "-level-1": 0 }
        let proportions = []
        for (let i = 0; i < array.length; i++) {
            const cafe = array[i];
            const level = getPriceLevel(cafe.price)
            countPerCost[level] += 1
        }

        for (const key of Object.keys(countPerCost)){
            proportions[key] = `${(countPerCost[key] * 100) / array.length}%`
        }
        return proportions
    }

    function splitArrayInParts(array, partsNum){
        const arraysLength = Math.floor(array.length / partsNum) //TODO
        let arrayParts = []
        let indexFromNum = 0
        let indexToNum = arraysLength
        for (let i = 1; i <= partsNum; i++) {
            arrayParts.push(array.slice(indexFromNum,indexToNum))
            indexFromNum = indexToNum
            indexToNum += arraysLength
        }
        return arrayParts
    }

    const cafesTables = splitArrayInParts(cafes, 4).map((cafesPart) => (
        <ValuesTable 
            headers={[t("tables.columns.place"), t("tables.columns.neighborhood"), "ARS", "USD"]}
            barrio={true}
            line={true}
            info={cafesPart}
            getPriceLevelClass={getPriceLevelClass}
            scale={true}
        />
    ))

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
    
    const twittsElements = twitts.map((twitt) => {
        const cafe = getCafeById(twitt.cafeId)
        return (
            <MainSign
                key={`sign-${twitt.id}`}
                cafe={cafe}
                getPriceLevel={() => getPriceLevel(cafe.price)}
                t={t}
                {...twitt}
            />
        )
    })

    const proportions = getProportions(cafes)

    const proportionsBoxes = Object.keys(proportions).map((key, i) => (
        <div 
            key={`box_${i}`} 
            className={`proportion__box ${key}`}  
            style={{"width": proportions[key]}}
        >
        </div>
    ))

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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <main>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{t('credits')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {parse(t("modal.text1"))}
                    <br />
                    {parse(t("modal.text2"))}
                    <hr />
                    Dev: <a href="https://github.com/sofiaPalavecino" target="_blank">Sofía Palavecino</a>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {t("close")}
                </Button>
                </Modal.Footer>
            </Modal>
            <Header
                handleShow={handleShow}
                t={t}
                i18n={i18n}
                currLgn = {currLgn}
                setCurrLgn = {setCurrLgn}
            />
            <section className='-theme-2'>
                <div className="wrap">
                    <div className="row title-wrapper">
                        <div className="col-xl order-xl-1 order-2 mt-5 mt-xl-4 mt-lx-0">
                            <Carrousel items={twittsElements} />
                            <div className="little-sign">
                                {t("little-sign")}
                                <br />
                                <span className='little-sign__heart'>&#60;3</span>
                                <span class="tip"></span>
                            </div>
                        </div>
                        <div className="title-wrapper__main col-xl order-xl-2 order-1">
                            <h1 className='main-title'>
                                <img className='title-icon' src="./cafe.svg" alt="" /> <span>+</span> <img className='title-icon' src="./medialunas.svg" alt="" />
                                &nbsp;{parse(t("title.main"))}
                                <h2>{t("title.subtitle")}</h2>
                                <p className='mt-3'>{t("title.text")}<a href="https://www.instagram.com/p/C_HJv7RPIcJ/" target="_blank" >@pilardibujito</a></p>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='-theme-1' />
            <section className='-theme-1'>
                <div className="wrap">
                    <h2 className='-bold-italic mb-4'>{t("tables.title")}</h2>
                    <Masonry columns={{xs: 1, md: 2, lg: 3}} spacing={4}>
                        <ValuesTable 
                            headers={[t("tables.columns.m-m"), "ARS", "USD"]}
                            currency={currencies[2024].currency}
                            title="2024"
                            info={currenciesData[2024]}
                            getPriceLevelClass={getPriceLevel}
                            tableStyle={{"max-width": "360px", "margin": "0 auto"}}
                        />
                        <ValuesTable 
                            headers={[t("tables.columns.m-m"), "ARS", "USD"]}
                            currency={currencies[2023].currency}
                            title="2023"
                            year={2023}
                            info={currenciesData[2023]}
                            getPriceLevelClass={getPriceLevelClass}
                            tableStyle={{"max-width": "360px", "margin": "0 auto"}}
                        />
                        <ValuesTable 
                            headers={[t("tables.columns.m-m"), "ARS", "USD"]}
                            currency={currencies[2022].currency}
                            title="2022"
                            year={2022}
                            info={currenciesData[2022]}
                            getPriceLevelClass={getPriceLevelClass}
                            tableStyle={{"max-width": "360px", "margin": "0 auto"}}
                        />
                        <CurrencyTable />
                        <ReferenceTable
                            t={t}
                        />
                        <ValuesTable
                            title={t("tables.titles.chains")}
                            headers={[t("tables.columns.fast-food"), "ARS", "USD"]}
                            info={fastFood}
                            getPriceLevelClass={getPriceLevelClass}
                            dots={true}
                        />
                        <ValuesTable
                            title={t("tables.titles.notable")}
                            headers={["Bar", "ARS", "USD"]}
                            info={cafesNotables}
                            getPriceLevelClass={getPriceLevelClass}
                            dots={true}
                        />
                        <ValuesTable
                            title={t("tables.titles.universities")}
                            headers={[t("tables.columns.university"), "ARS", "USD"]}
                            info={cafesUni}
                            getPriceLevelClass={getPriceLevelClass}
                            dots={true}
                        />
                        <ValuesTable
                            title={t("tables.titles.coffee-chains")}
                            headers={[t("tables.columns.cafeteria"), "ARS", "USD"]}
                            info={cafeChain}
                            getPriceLevelClass={getPriceLevelClass}
                            dots={true}
                        />
                        
                    </Masonry>
                    
                    
                </div>
            </section>
            <hr className='-theme-1' />
            <section className='-theme-3'>
                <div className="wrap">
                    <div className="row">
                        <div className="col col-xl-3">
                            <h4 className='fs-5 mb-0'><strong>{t("proportion.title")}</strong></h4>
                        </div>
                        <div className="col scale-col mt-4 mt-xl-0 d-flex align-items-center">
                            <div className="scale w-100">
                                <div className="currencies">
                                    <span>{t("proportion.proportion")}</span>
                                    <div className="currencies__values mt-2 mt-sm-0">
                                        <div className="currencies__values--box -level-4__2">
                                            <div></div>
                                            <span>USD &#60;1</span>
                                        </div>
                                        <div className="currencies__values--box -level-3__1">
                                            <div></div>
                                            <span>USD 1</span>
                                        </div>
                                        <div className="currencies__values--box -level-2__1">
                                            <div></div>
                                            <span>USD 2</span>
                                        </div>
                                        <div className="currencies__values--box -level-1__2">
                                            <div></div>
                                            <span>USD &#62;2</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="proportion_md pt-2">
                                    {
                                        cafes.map((c, i) => {
                                            return (
                                                <div className={`proportion_md__box ${getPriceLevel(c.price)} ${i == cafes.length - 1 ? "last" : ""}`}></div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='w-100 proportion mt-3'>
                                    {proportionsBoxes}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cafe-tables d-flex flex-wrap pt-3 pt-sm-4">
                        { cafesTables }
                    </div>
                </div>
            </section>
            <footer>&#169; Estudio Chinchulín</footer>
        </main>
    )
}

export default App

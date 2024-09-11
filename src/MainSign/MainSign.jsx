import './MainSign.scss'

export default function MainSign() {
    return (
        <div className="main-sign">
            <div className="main-sign__header row">
                <div className="main-sign__header__content -title col-8">Bar Británico</div>
                <div className="main-sign__header__content -price col-4 -level-4">
                    <span>$3400</span> 
                    <div className="main-sign__header__usd">&#61;2,51 USD</div>
                </div>
            </div>
            <div className="main-sign__body">
                <div className="main-sign__body__header">
                    <img src="./vite.svg" alt="" />
                    <div className="main-sign__body__header--name">
                        <span>Sofi :)</span>
                        <span>@ddmembrillo</span>
                    </div>
                </div>
                <div className="main-sign__body__text">
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
            </div>
        </div>
    )
}
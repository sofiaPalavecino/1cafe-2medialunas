import './MainSign.scss'

export default function MainSign({cafe, user, userName, text, getPriceLevel}) {

    return (
        <div className="main-sign">
            <div className="main-sign__header row">
                <div className="main-sign__header__content -title col-8">{cafe.name}</div>
                <div className={`main-sign__header__content -price col-4 ${getPriceLevel()}`}>
                    <span>{cafe.price}</span> 
                    <div className="main-sign__header__usd">&#61;{cafe.usdPrice} USD</div>
                </div>
            </div>
            <div className="main-sign__body">
                <div className="main-sign__body__header">
                    <img src="./vite.svg" alt="" />
                    <div className="main-sign__body__header--name">
                        <span>{userName}</span>
                        <span>{user}</span>
                    </div>
                </div>
                <div className="main-sign__body__text">
                    <span>{text}</span>
                </div>
            </div>
        </div>
    )
}
import './ValuesTable.scss'

export default function ValuesTable({
    title, currency, year, headers, info, line, dots, barrio, getPriceLevelClass, scale
}){

    let colSpan = "3"
    let tableClass = "-no-dots"
    if (dots) {
        colSpan = "4"
        tableClass = "-dots"
    } else if(line) {
        colSpan = "5"
        tableClass = "-line"
    }

    const headersElements = headers === null
                            ? []
                            : headers.map((h, index) => (
                                <th key={`header_${index}`}>{h}</th>
                            ))

    const infoElements = info.map((i, index) => {
        const tone = index % 2 === 0 ? "2" : "1"
        return (
            <tr key={`row_${index}`} className={`${getPriceLevelClass(i.price, tone)}`}>
                {
                    dots &&
                    <td><div className='circle'></div></td>
                }
                {
                    line &&
                    <td className='line'></td>
                }
                <td>{i.name}</td>
                {
                    barrio && i.barrio &&
                    <td className='barrio'>{i.barrio}</td>
                }
                <td>&#36;{year ? i.history[year].price.toString() : i.price.toString()}</td>
                <td>&#36;{year ? i.history[year].usdPrice.toString() : i.usdPrice.toString()}</td>
            </tr>
        )
    })

    return (
        <div className={`values-table ${scale ? 'scale' : ''}`}>
            <table className={`table ${tableClass}`}>
                <thead>
                    { title && 
                        <tr>
                            <th className={`title ${currency ? "currency" : ""} -theme-2`} colSpan={colSpan}>
                                <div>
                                    <span>{title}</span>
                                    {
                                        currency &&
                                        <span className='curency-values'>
                                            <span>{currency}</span>
                                            <span>ARS=1USD</span>
                                        </span>
                                    }
                                </div>
                            </th>
                        </tr>
                    }
                    {
                        headersElements &&
                        <tr className="subtitle">
                            {
                                dots &&
                                <th></th>
                            }
                            {
                                line &&
                                <th></th>
                            }
                            { headersElements }
                        </tr>
                    }
                </thead>
                <tbody>
                    { infoElements }
                </tbody>
            </table>
        </div>
    )
}
import './ValuesTable.scss'

export default function ValuesTable({title, currency, year, headers, info, dots, barrio, getPriceLevelClass}){

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
                <td>{i.name}</td>
                {
                    barrio && i.barrio &&
                    <td>{i.barrio}</td>
                }
                <td>&#36;{year ? i.history[year].price.toString() : i.price.toString()}</td>
                <td>&#36;{year ? i.history[year].usdPrice.toString() : i.usdPrice.toString()}</td>
            </tr>
        )
    })

    return (
        <div className='values-table'>
            <table className={`table ${dots ? "-dots" : "-no-dots"}`}>
                <thead>
                    <tr>
                        <th className={`title ${currency ? "currency" : ""} -theme-2`} colSpan={dots ? "4" : "3"}>
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
                    {
                        headersElements &&
                        <tr className='subtitle'>
                            {
                                dots &&
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
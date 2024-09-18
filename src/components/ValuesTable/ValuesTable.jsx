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
                <td>&#36;{i.price.toString()}</td>
                <td>&#36;{i.usdPrice.toString()}</td>
            </tr>
        )
    })

    return (
        <div className='values-table'>
            <table className={`table ${dots ? "-dots" : "-no-dots"}`}>
                <thead>
                    <tr>
                        <th className='title -theme-2' colSpan={dots ? "4" : "3"}>
                            {title}
                            {
                                currency &&
                                <span>{currency}</span>
                            }
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
import './CurrencyTable.scss'

export default function CurrencyTable(){
    return (
        <div className='currency-table'>
            <table className="table">
                <thead>
                    <tr>
                        <th className='title -theme-1' colSpan="2">Termómetro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='-main'>
                        <th>ARS</th>
                        <th>USD</th>
                    </tr>
                    <tr className='-level-4'>
                        <td>&#60;&#36;1350</td>
                        <td>&#60;&#36;1</td>
                    </tr>
                    <tr className='-level-3'>
                        <td>&#36;1350</td>
                        <td>&#36;1</td>
                    </tr>
                    <tr className='-level-2'>
                        <td>&#36;2700</td>
                        <td>&#36;2</td>
                    </tr>
                    <tr className='-level-1'>
                        <td>&#36;4050</td>
                        <td>&#62;&#36;2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
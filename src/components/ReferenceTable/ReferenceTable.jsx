import { useTranslation } from 'react-i18next'
import './ReferenceTable.scss'

export default function ReferenceTable({t}){

    return (
        <div className="reference-table">
            <table className="table">
                <thead>
                    <tr>
                        <th className='title -theme-1'>{t("reference-table.title")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='-level-2'>
                        <td>1350 ARS = 1 USD</td>
                    </tr>
                    <tr className='-text'>
                        <td>{t("reference-table.subtitle")}</td>
                    </tr>
                    <tr className='-text'>
                        <td>{t("reference-table.text")}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
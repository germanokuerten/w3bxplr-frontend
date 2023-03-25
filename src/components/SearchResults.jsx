import moment from "moment"
import styles from "../styles/Home.module.css"

const commonStyles = 'min-h-[50px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

export default function SearchResults(props) {
    return (
        <>
            <section className="px-4 py-2">
                <p className="text-sm text-white mb-2">
                    Latest 25 from a total of{' '}
                    <span className="font-medium text-white">
                    {props.result.result.length}
                    </span>{' '}
                    transactions
                </p>
                <table className="table-auto w-full">
                    <thead>
                    <tr className="bg-[#100F15] text-left">
                        <th className="py-2 px-1 text-xs text-white">Hash</th>
                        {/* <th className="py-1 px-2 font-medium text-black">Method</th> */}
                        {/* <th className="py-1 px-4 font-medium text-black">Block</th> */}
                        <th className="py-1 px-1 text-xs text-blue-600">Date</th>
                        <th className="py-1 px-1 text-xs text-white">From</th>
                        <th className="py-1 px-1 text-xs text-white">In/Out</th>
                        <th className="py-1 px-1 text-xs text-white">To</th>
                        <th className="py-1 px-1 text-xs text-white">Value</th>
                        {/* <th className="py-1 px-4 font-medium text-blue-600">Txn Fee</th> */}
                    </tr>
                    </thead>
                    <tbody>
                    {props.result.result.map((txn) => (
                        <tr className="border-t border-gray-500">
                        <td className="py-1 px-1 text-xs text-blue-600">
                            {txn.hash.slice(0, 2)}...
                            {txn.hash.slice(62)}
                        </td>
                        {/* <td className="py-2 px-2">
                            <span className="text-xs text-white">
                            {txn.decoded_call ? txn.decoded_call.label : 'Unknown'}
                            </span>
                        </td> */}
                        {/* <td className="py-2 px-4 text-xs text-blue-600">
                            {txn.block_number}
                        </td> */}
                        <td className="py-1 px-1 text-xs text-white">
                            {moment(txn.block_timestamp, 'YYYYMMDD').fromNow()}
                        </td>
                        <td className="py-1 px-1 text-xs text-white">
                            {txn.from_address.slice(0, 2)}...
                            {txn.from_address.slice(38)}
                        </td>
                        <td className="py-1 px-1">
                            <span
                            className={`${
                                txn.from_address.toLowerCase() !==
                                props.result.searchInput.toLowerCase()
                                ? 'text-green-600'
                                : 'text-red-600'
                            } text-xs text-white`}
                            >
                            {txn.from_address.toLowerCase() !==
                            props.result.searchInput.toLowerCase()
                                ? 'IN'
                                : 'OUT'}
                            </span>
                        </td>
                        <td className="py-1 px-2 text-xs text-blue-600">
                            {txn.to_address.slice(0, 2)}...
                            {txn.to_address.slice(38)}
                        </td>
                        <td className="py-1 px-1 text-xs text-white">
                            {(txn.value / 10 ** 18).toFixed(4)} ETH
                        </td>
                        {/* <td className="py-2 px-4 text-xs text-blue-600 text-white">
                            {(txn.gas_price / 10 ** 18).toFixed(12)}
                        </td> */}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </>
    ) 
}
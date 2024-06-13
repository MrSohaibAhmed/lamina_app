import React from 'react'
import "../Dashboard/Dashboard.css"
import solIconImg from "../../assets/dashboard/sol-icon.png";
import clockImg from '../../assets/pairtableImg/noun-clock-6929908 1.png'
const SettingRight = () => {
    return (

        <div className='row rounded-3'>
            <div className=' p-5 rounded-3'>
                <h4 className='mb-4 '>What is Slippage?</h4>
                <p className='font-ten'>Suppose you wanted to spend 1 sol to buy 10 $MOON tokens, and you have your slippage set to 10%. You place your order, and when it's confirmed, you see that instead of 10 $MOON tokens, you only received 9 $MOON tokens.I</p>
                <p className='font-ten'>In this case, you just experienced slippage of 10% because of price fluctuations and it decreased your total buying power. In the scenario above, if the price had fluctuated even more, and Photon estimates that you would only have received 8 $MOON tokens for your 1 sol, the transaction would have failed, as this was above your slippage setting of 10%.</p>
                <p className='font-ten'>Slippage essentially represents how much fewer tokens you would be willing to accept for your transaction.</p>

            </div>
        </div>

    )
}

export default SettingRight
import React, { useState } from 'react'
import "../Dashboard/Dashboard.css"
import solIconImg from "../../assets/dashboard/sol-icon.png";
import clockImg from '../../assets/pairtableImg/noun-clock-6929908 1.png'
import InputComp from '../../utilities/InputComp';
const SettingLeft = () => {

    const [amounts, setAmounts] = useState({
        amount1: 0.25,
        amount2: 0.5,
        amount3: 1.0,
        amount4: 2.0,
        amount5: 5,
        amount6: 10
    });

    const handleAmountChange = (key) => (e) => {
        setAmounts((prevAmounts) => ({
            ...prevAmounts,
            [key]: parseFoat(e.target.value)
        }));
    };

    return (

        <div className='setting-silpace'>
            <div className=' setting-silpace'>
                <div className='row settingRowClass '>
                    <div className='col px-3 d-flex justify-content-between align-items-center  settings-card py-5 setting-silpace2'>
                        <div>
                            <p className=''>SLIPPACE</p>
                            <p className='font-twelve opacity-50'>How much less tokens you're willing to receive from a trade due to price volatility.</p>
                        </div>

                        <div className='text-end'>
                            <span ><input className=' bg-transparent w-25 border mr-1' type='number' placeholder='0.0' />%</span>
                        </div>
                    </div>
                    <div className=' col px-3 d-flex justify-content-between align-items-center settings-card py-5 setting-silpace'>
                        <div>
                            <p className=''>PRIORITY FEE <img src={clockImg} /></p>
                            <p className='font-twelve opacity-50'>
                                Extra 'tip' to have your transaction completed faster. The higher the priority fee, the higher the chance of getting your transaction processed sooner.
                            </p>
                        </div>

                        <div className='text-end'>
                            <span ><input className=' bg-transparent w-50 border mr-1' type='number' placeholder='0.0' />SOL</span>
                        </div>
                    </div>
                </div>
                <div className='row settingRowClass '>
                    <div className='d-flex justify-content-between align-items-center col px-3 settings-card py-5 setting-silpace'>
                        <div>
                            <p className=''>PRIORITY FEE <img src={clockImg} /></p>
                            <p className='font-twelve opacity-50'>
                                Extra 'tip' to have your transaction completed faster. The higher the priority fee, the higher the chance of getting your transaction processed sooner.
                            </p>
                        </div>

                        <div className='text-end'>
                            <span ><input className=' bg-transparent w-50 border mr-1' type='number' placeholder='0.0' />SOL</span>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center col px-3 settings-card py-5 setting-silpace2'>
                        <div>
                            <p className=''>SLIPPACE</p>
                            <p className='font-twelve opacity-50'>How much less tokens you're willing to receive from a trade due to price volatility.</p>
                        </div>

                        <div className='text-end'>
                            <span ><input className=' bg-transparent w-25 border mr-1' type='number' placeholder='0.0' />%</span>
                        </div>
                    </div>
                </div>
                <div className='row m-0'>
                    <div className=' py-5 px-4 settings-card'>
                        <p>Customize</p>
                        <p className='font-twelve opacity'>Customize your Quick Buy buttons with your own preset amounts.</p>
                        <div className='d-flex justify-content-evenely'>
                            <InputComp
                             value={amounts.amount1}
                             onChange={handleAmountChange}
                             image={solIconImg}
                             placeholder="Amount to buy in SOL"
                             ariaLabel="Amount"
                             ariaDescribedBy="basic-addon1"
                            />
                            <InputComp
                             value={amounts.amount2}
                             onChange={handleAmountChange}
                             image={solIconImg}
                             placeholder="Amount to buy in SOL"
                             ariaLabel="Amount"
                             ariaDescribedBy="basic-addon1"
                            />
                            <InputComp
                             value={amounts.amount3}
                             onChange={handleAmountChange}
                             image={solIconImg}
                             placeholder="Amount to buy in SOL"
                             ariaLabel="Amount"
                             ariaDescribedBy="basic-addon1"
                            />
                            <InputComp
                             value={amounts.amount4}
                             onChange={handleAmountChange}
                             image={solIconImg}
                             placeholder="Amount to buy in SOL"
                             ariaLabel="Amount"
                             ariaDescribedBy="basic-addon1"
                            />
                            <InputComp
                             value={amounts.amount5}
                             onChange={handleAmountChange}
                             image={solIconImg}
                             placeholder="Amount to buy in SOL"
                             ariaLabel="Amount"
                             ariaDescribedBy="basic-addon1"
                            />
                            <InputComp
                             value={amounts.amount6}
                             onChange={handleAmountChange}
                             image={solIconImg}
                             placeholder="Amount to buy in SOL"
                             ariaLabel="Amount"
                             ariaDescribedBy="basic-addon1"
                            />
                            
                        </div>
                    </div>
                    <button className='btn-buy-quick w-25 mb-4'>Save</button>
                </div>

            </div>
            
        </div>

    )
}

export default SettingLeft
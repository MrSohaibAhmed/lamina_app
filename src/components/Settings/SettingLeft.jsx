
import React, { useEffect, useState } from 'react';
import "../Dashboard/Dashboard.css";
import solIconImg from "../../assets/dashboard/sol-icon.png";
import clockImg from '../../assets/pairtableImg/noun-clock-6929908 1.png';
import InputComp from '../../utilities/InputComp';
import { postSettings, getSettings } from '../hooks/useWallet';
import toast from 'react-hot-toast';
const SettingLeft = () => {
    const [settingsData, setSettingsData] = useState([])
    const [amounts, setAmounts] = useState({
        amount1: 0.25,
        amount2: 0.5,
        amount3: 1.0,
        amount4: 2.0,
        amount5: 5,
        amount6: 10
    });
    const [formData, setFormData] = useState({
        userAddress: localStorage.getItem("publicKey"),
        Slippage: 0,
        priorityFee: 0,
        smartMevProtection: false,
        BriberyAmount: 0,

    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAmountChange = (key) => (e) => {
        setAmounts((prevAmounts) => ({
            ...prevAmounts,
            [key]: parseFloat(e.target.value)
        }));
    };
    const submit = async () => {
        // console.log(formData);
        const amountValues = Object.values(amounts);
        const formattedAmounts = amountValues.map(amount => {
            if (amount !== null) {
                return parseFloat(amount);
            } else {
                return 0;
            }
        });
        // console.log(formattedAmounts);
        const slippageNumber = parseFloat(formData.Slippage);
        const briberyAmountNumber = Number(formData.BriberyAmount);
        const priorityFeeNumber = Number(formData.priorityFee);

        // Replace the string values with the converted numbers in the formData object
        formData.Slippage = slippageNumber;
        formData.BriberyAmount = briberyAmountNumber;
        formData.priorityFee = priorityFeeNumber;
        // formData.amounts = formattedAmounts;


        const res = await postSettings(formData).then((res) => {
            toast.success("Settings Updated Successfully")
        }).catch((err) => {
            toast.error("Error In updating Settings")
        })

    }
    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await getSettings(localStorage.getItem("publicKey"));

                const responseData = res.data.data;
                setSettingsData(responseData);
                const { _id, createdAt, ...formDataFromAPI } = responseData;
                setFormData({
                    ...formDataFromAPI,
                    // Convert Slippage, priorityFee, and BriberyAmount to numbers
                    Slippage: parseFloat(responseData.Slippage),
                    priorityFee: parseFloat(responseData.priorityFee),
                    BriberyAmount: parseFloat(responseData.BriberyAmount),
                });
                // Update the amounts state with values from the API response
                setAmounts({
                    amount1: parseFloat(responseData.amount1),
                    amount2: parseFloat(responseData.amount2),
                    amount3: parseFloat(responseData.amount3),
                    amount4: parseFloat(responseData.amount4),
                    amount5: parseFloat(responseData.amount5),
                    amount6: parseFloat(responseData.amount6)
                });
            } catch (error) {
                console.error("Error fetching settings:", error);
                toast.error("Error In fetching Settings");
            }
        };

        fetchSettings();
    }, []);
    return (
        <div className='setting-silpace rounded rounded-custom'>
            <div className='setting-silpace rounded rounded-custom'>
                <div className='row settingRowClass'>
                    <div className='col px-3 d-flex justify-content-between align-items-center settings-card py-5 setting-silpace2 rounded-custom2'>
                        <div className='col-8'>
                            <p className=''>SLIPPACE</p>
                            <p className='font-twelve opacity-50'>How much less tokens you're willing to receive from a trade due to price volatility.</p>
                        </div>

                        <div className='text-end col-4'>
                            <span>
                                <input
                                    style={{ border: "1px solid #303138", padding: "5px", borderRadius: "5px" }}
                                    className='bg-transparent w-50 mr-1 text-white'
                                    type='number'
                                    placeholder='20.0'
                                    name='Slippage'
                                    value={formData.Slippage}
                                    onChange={handleChange}
                                />%
                            </span>
                        </div>
                    </div>
                    <div className='col px-3 d-flex justify-content-between align-items-center settings-card py-5 setting-silpace rounded-custom3  rounded'>
                        <div className='col-8'>
                            <p className=''>PRIORITY FEE</p>
                            <p className='font-twelve opacity-50'>
                                Extra 'tip' to have your transaction completed faster. The higher the priority fee, the higher the chance of getting your transaction processed sooner.
                            </p>
                        </div>

                        <div className='text-end col-4'>
                            <span>  <input
                                style={{ border: "1px solid #303138", padding: "5px", borderRadius: "5px" }}
                                className='bg-transparent w-50 mr-1 text-white'
                                type='number'
                                placeholder='0.00001'
                                name='priorityFee'
                                value={formData.priorityFee}
                                onChange={handleChange}
                            />SOL</span>
                        </div>
                    </div>
                </div>
                <div className='row settingRowClass'>
                    <div className='d-flex justify-content-between align-items-center col px-3 settings-card py-5 setting-silpace'>
                        <div className='col-8'>
                            <p className=''>SMART-MEV PROTECTION <img src={clockImg} /></p>
                            <p className='font-twelve opacity-50'>
                                Enable this for protection against sandwich attacks from MEV bots and save on gas fees in the event of a failed transaction.
                            </p>
                        </div>

                        <div className='col-4 text-end'>
                            <span>
                                <input
                                    style={{ backgroundColor: 'transparent' }}
                                    className='border mr-1 text-white'
                                    type='checkbox'
                                    name='smartMevProtection'
                                    checked={formData.smartMevProtection}
                                    onChange={handleChange}
                                />Enable
                            </span>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center col px-3 settings-card py-5 setting-silpace2 '>
                        <div className='col-8'>
                            <p className=''>BRIBERY AMOUNT</p>
                            <p className='font-twelve opacity-50'>Set an additional bribe amount on top of your priority fee to place your transaction as soon as possible.</p>
                        </div>

                        <div className='col-4 text-end'>
                            <span>
                                <input
                                    style={{ border: "1px solid #303138", padding: "5px", borderRadius: "5px" }}
                                    className='bg-transparent w-50 mr-1 text-white'
                                    type='number'
                                    placeholder='0.00001'
                                    name='BriberyAmount'
                                    value={formData.BriberyAmount}
                                    onChange={handleChange}
                                />SOL
                            </span>
                        </div>
                    </div>
                </div>
                <div className='row m-0'>
                    <div className='py-5 px-4 settings-card rounded'>
                        <p>Customize</p>
                        <p className='font-twelve opacity'>Customize your Quick Buy buttons with your own preset amounts.</p>
                        <div className='d-flex justify-content-evenly'>
                            <InputComp
                                value={amounts.amount1}
                                onChange={handleAmountChange('amount1')}
                                image={solIconImg}
                                placeholder="Amount to buy in SOL"
                                ariaLabel="Amount"
                                ariaDescribedBy="basic-addon1"
                            />
                            <InputComp
                                value={amounts.amount2}
                                onChange={handleAmountChange('amount2')}
                                image={solIconImg}
                                placeholder="Amount to buy in SOL"
                                ariaLabel="Amount"
                                ariaDescribedBy="basic-addon1"
                            />
                            <InputComp
                                value={amounts.amount3}
                                onChange={handleAmountChange('amount3')}
                                image={solIconImg}
                                placeholder="Amount to buy in SOL"
                                ariaLabel="Amount"
                                ariaDescribedBy="basic-addon1"
                            />
                            <InputComp
                                value={amounts.amount4}
                                onChange={handleAmountChange('amount4')}
                                image={solIconImg}
                                placeholder="Amount to buy in SOL"
                                ariaLabel="Amount"
                                ariaDescribedBy="basic-addon1"
                            />
                            <InputComp
                                value={amounts.amount5}
                                onChange={handleAmountChange('amount5')}
                                image={solIconImg}
                                placeholder="Amount to buy in SOL"
                                ariaLabel="Amount"
                                ariaDescribedBy="basic-addon1"
                            />
                            <InputComp
                                value={amounts.amount6}
                                onChange={handleAmountChange('amount6')}
                                image={solIconImg}
                                placeholder="Amount to buy in SOL"
                                ariaLabel="Amount"
                                ariaDescribedBy="basic-addon1"
                            />
                        </div>
                    </div>
                    <button onClick={submit} className='btn-buy-quick w-25 mb-4 rounded'>Save</button>
                </div>
            </div>
        </div>
    );
}

export default SettingLeft;

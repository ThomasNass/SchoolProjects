import React, { useState, useEffect } from 'react'

const FuncDevice = (props) => {

    const tempId = props.device.tempId;
    const humidityId = props.device.humidityId;
    const tempMax = props.device.tempMax;
    const tempMin = props.device.tempMin;
    const humidityMax = props.device.humidityMax
    const humidityMin = props.device.humidityMin
    const [tempTooLow, setTempTooLow] = useState(false)
    const [tempTooHigh, setTempTooHigh] = useState(false)
    const [tempValue, setTempValue] = useState(30)
    const [humidityTooLow, setHumidityTooLow] = useState(false)
    const [humidityTooHigh, setHumidityTooHigh] = useState(false)
    const [humidityValue, setHumidityValue] = useState(90)
    function checkTemp() {
        if (tempValue < tempMin) {
            setTempTooLow(true)
        }
        else { setTempTooLow(false) }
        if (tempValue > tempMax) {
            setTempTooHigh(true)
        }
        else { setTempTooHigh(false) }
        if (humidityValue < humidityMin) {
            setHumidityTooLow(true)
        }
        else { setHumidityTooLow(false) }
        if (humidityValue > humidityMax) {
            setHumidityTooHigh(true)
        }
        else { setHumidityTooHigh(false) }
    }



    function onClick(e) {
        if (e.target.value == "temp") {
            setTempValue((tempMax + tempMin) / 2)
        }
        if (e.target.value == "humidity") {
            setHumidityValue((humidityMax + humidityMin) / 2)
        }
        checkTemp()
    }


    useEffect(() => {
        checkTemp()
    })

    return <div className='device'>
        <p>{props.device.name}</p>
        <div className='device-data'>

            <div className='data-div'> <p>Temperatur</p>
                <p>{tempValue}°C</p>
                {(tempTooHigh) ? <div className='alert-div'>FÖR HÖGT <button className='alert-button' value={"temp"} onClick={onClick}> Återställ</button></div> : null}

                {(tempTooLow) ? <div className='alert-div'>FÖR LÅGT <button className='alert-button' value={"temp"} onClick={onClick}>Återställ</button></div> : null}

            </div>

            {(humidityMax != undefined) ?
                <>
                    <div className='data-div'>
                        <p>Luftfuktighet </p>
                        <p>{humidityValue}%</p>
                        {(humidityTooHigh) ?
                            <div className='alert-div'>FÖR HÖGT <button className='alert-button' value={"humidity"} onClick={onClick}> Återställ</button></div>
                            : null}

                        {(humidityTooLow)
                            ?
                            <div className='alert-div'>FÖR LÅGT
                                <button className='alert-button' value={"humidity"} onClick={onClick}>Återställ</button>
                            </div>
                            : null}
                    </div>
                </>
                : null}
        </div>
    </div>;

}

export default FuncDevice
import React from 'react';
import data from "../data.json"
import Device from './device.jsx';
import { formattedData } from '../services/alter-devices';
import FuncDevice from './func-device';
export default class App extends React.Component {

    async componentDidMount() {

    }

    render() {
        let devices = formattedData();
        console.log(devices)
        return (
            <div className='content-div'>
                <h1>{data.name}</h1>
                {devices.map((device => <FuncDevice device={device} />))}

            </div>
        )
    }
}
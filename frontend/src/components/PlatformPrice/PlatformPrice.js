import React from 'react';
import {getData} from '../../api/api';
import { useState,useEffect } from 'react';

const PlatformPrice = ({ lightMode }) => {

    const [datas,setData] = useState([]);

    useEffect(()=>{
        getAllData();
    },[]);

    const getAllData = async () =>{
        let response = await getData();
        setData(response.data);
    }

    return (
        <div className="platform-price">
        <table className="platform-price-table">
            <thead>
                <tr>
                    <th>
                        <h4><span className="pointer">#</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Name</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Last Traded Price</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Buy / Sell Price</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Volume</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Base Unit</span></h4>
                    </th>
                </tr>
            </thead>
            <tbody>
                
                {datas.map((data,id) => (
                    
                    <tr 
                        style={{
                            backgroundColor: lightMode ? "#f8f9fa" : "#2e3241",
                            color: lightMode ? "#0c0f48" : "#fff",
                            transition: "all .5s"
                        }}
                    >
                        {/* ranking */}
                        <td><h4>{id+1}</h4></td>
                        <td className="platform">
                            <a 
                                href={data.link} 
                                target="_blank" 
                                rel="noreferrer"
                                style={{
                                    color: lightMode ? "#0c0f48" : "#fff",
                                    transition: "all .5s"
                                }}
                            >
                                {/* name */}
                                <h4 className='symbol'>{data.symbol}</h4> 
                            </a>

                        </td>
                        <td>
                            {/* last traded price */}
                            <h4>₹ {data.lastPrice.toLocaleString('en-IN')}</h4>
                        </td>
                        <td>
                            <h4>
                                {/* buy and sell price */}
                                <span>₹ {data.bidPrice.toLocaleString('en-IN')}</span> /
                                <span> ₹ {data.askPrice.toLocaleString('en-IN')}</span>
                            </h4>
                        </td>
                        <td className="styling">
                            {/* volume */}
                            <h4>{data.volume}</h4>
                        </td>
                        <td  className="styling">
                            {/* base unit */}
                            <h4>
                                {(data.baseAsset).toLocaleString('en-IN')}
                            </h4>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default PlatformPrice

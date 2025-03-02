import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Spin } from 'antd';
import CryptoCard from './components/CryptoCard';


const App = () => {
  const [currencies, setCurrencies] = useState([])
  const [currencyId, setCurrencyId] = useState(1)
  const [currencyData, setCurrencyData] = useState(null)

  const base_url = 'http://127.0.0.1:8000';



  const fetchCurrencies = () => {
    axios.get(`${base_url}/currencies`).then(response => {
      const curreciesResponse = response.data;
      const menuItems = [
        {
          key: 'g1',
          label: 'CryptoCurrency List',
          type: 'group',
          children:
            curreciesResponse.map(c => {
              return { key: c.id, label: c.name }
            })


        }

      ]
      setCurrencies(menuItems)
    })
  }




  const fetchCurrency = () => {
    axios.get(`${base_url}/currencies/${currencyId}`).then(r => {
      setCurrencyData(r.data)
    })
      
  }

  
  const onClick = (e) => {
    console.log(e.key)
    console.log(currencyData)
    setCurrencyId(e.key)


  };

  
  useEffect(() => {
    fetchCurrencies()
  }, [])


  useEffect(() => {
    setCurrencyData(null)
    fetchCurrency()
  }, [currencyId])
  
  return (
    <div className='flex'>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={currencies}
        className='h-screen overflow-scroll'
      />
      <div className='mx-auto my-auto'>
        {currencyData ? <CryptoCard currency={currencyData} /> : <Spin size="large"></Spin>}
      </div>
    </div>
  );
};
export default App;
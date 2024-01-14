import './index.scss';
import './fonts.css';

import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import FactionsContent from '../FactionsContent/FactionsContent';
import NotFound from '../NotFound/NotFound';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

export let Info = React.createContext();

function App() {
    const [value, setValue] = useState(0);
    const [items, setItems] = useState([]);
    const [cardInfo, setCardInfo] = useState([]);
    let data = items[value - 1];


    useEffect(() => {
        async function GetApi() {
            let url = 'https://653442dce1b6f4c59046a6c4.mockapi.io/Content/'
            axios.get(url).then((resp) => {
                const data = resp.data;
                setItems(data);
              });
        }
        GetApi();

        async function GetData() {
            let url = 'https://653442dce1b6f4c59046a6c4.mockapi.io/Cards/'
            axios.get(url).then((resp) => {
                const data = resp.data;
                setCardInfo(data);
              });
        }
        GetData();
    }, []);

    return (
        <Info.Provider value={cardInfo}>
            <Routes>
                <Route path="/" element={<Layout value={value} setValue={setValue} />}></Route>
                <Route path="/content/:id" element={<FactionsContent setValue={setValue} value={value} data={data} />}></Route>
                <Route path="/*" element={<NotFound/>}></Route>
            </Routes>
        </Info.Provider>
    );
}

export default App;

/** @format */

import { useState, useEffect } from 'react';
import AxiosInstance from '../components/axios/AxiosInstance';
import Banner from '../components/Banner';
import StatisticsRow from '../components/cards/StatisticsRow';

export default function Home() {
  const [globalData, setGlobalData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    AxiosInstance.get('/summary').then((res) => {
      setGlobalData(res.data.Global);
      setCountriesData(res.data.Countries);
    });
  }, []);

  return (
    <>
      {/* Banner */}
      <Banner />

      {/* Global Statistics */}
      <div style={{ marginTop: '60px' }}>
        <StatisticsRow title='GLOBAL STATISTICS' data={globalData} />
      </div>
    </>
  );
}

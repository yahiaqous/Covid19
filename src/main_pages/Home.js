/** @format */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */

import { useState, useEffect } from 'react';

import AxiosInstance from '../components/axios/AxiosInstance';
import Banner from '../components/Banner';
import StatisticsRow from '../components/cards/StatisticsRow';

import CoronaMaskGIF from '../media/CoronaMaskGIF.gif';

export default function Home() {
  useEffect(() => {
    getSummaryDataFromAPI();
  }, []);

  const [globalData, setGlobalData] = useState({});
  const [allCountriesData, setAllCountriesData] = useState({});
  function getSummaryDataFromAPI() {
    AxiosInstance.get('https://api.covid19api.com/summary').then((res) => {
      setGlobalData(res.data.Global);

      let countriesDictionary = {};
      res.data.Countries.map((country) => {
        countriesDictionary[country.CountryCode] = country;
      });
      setAllCountriesData(countriesDictionary);
    });
  }

  useEffect(() => {
    getUserCountryFromDeviceIP();
  }, [allCountriesData]);

  const [selectedCountryData, setSelectedCountryData] = useState('');
  function getUserCountryFromDeviceIP() {
    // https://codesandbox.io/s/50bi9?file=/src/App.js
    AxiosInstance.get('https://ipapi.co/json').then((res) => {
      let userCountry = res.data.country;
      setSelectedCountryData(allCountriesData[userCountry]);
    });
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Banner */}
      <Banner />

      {/* Global Statistics */}
      <div style={{ margin: '120px 0 60px 0' }}>
        <StatisticsRow title='GLOBAL STATISTICS' data={globalData} />
      </div>

      <img alt='Virus Mask GIF' src={CoronaMaskGIF} style={{}}></img>

      {/* Your Country */}
      <div style={{ margin: '120px 0 60px 0' }}>
        <StatisticsRow
          title={selectedCountryData ? selectedCountryData['Country'] : ''}
          data={selectedCountryData}
          allCountriesData={allCountriesData}
          setSelectedCountryData={setSelectedCountryData}
        />
      </div>
    </div>
  );
}

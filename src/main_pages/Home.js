/** @format */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */

import { useState, useEffect } from 'react';

import AxiosInstance from '../components/axios/AxiosInstance';

import Banner from '../components/Banner';
import StatisticsRow from '../components/cards/StatisticsRow';
import OtherCountriesCarousel from '../components/carousels/OtherCountriesCarousel';
import OtherCountriesTable from '../components/tables/OtherCountriesTable';

import CoronaMaskGIF from '../media/CoronaMaskGIF.gif';
import CoronaVirusGIF from '../media/CoronaVirusGIF.gif';

export default function Home() {
  useEffect(() => {
    getSummaryDataFromAPI();
  }, []);

  const [globalData, setGlobalData] = useState({});
  const [allCountriesData, setAllCountriesData] = useState({});
  const [allCountriesDataSorted, setAllCountriesDataSorted] = useState({});
  function getSummaryDataFromAPI() {
    AxiosInstance.get('https://api.covid19api.com/summary').then((res) => {
      setGlobalData(res.data.Global);

      let countriesDictionary = {};
      res.data.Countries.map((country) => {
        countriesDictionary[country.CountryCode] = country;
      });
      setAllCountriesData(countriesDictionary);

      countriesDictionary = sort_dictionary(countriesDictionary);
      setAllCountriesDataSorted(countriesDictionary);
    });
  }

  // https://stackoverflow.com/a/53530097
  function sort_dictionary(obj) {
    let items = Object.keys(obj).map(function (key) {
      return [key, obj[key]];
    });
    items.sort(function (first, second) {
      return (
        second[1].TotalConfirmed +
        second[1].NewConfirmed -
        (first[1].TotalConfirmed + first[1].NewConfirmed)
      );
    });
    let sorted_dictionary = {};
    items.forEach(function (v) {
      let use_key = v[0];
      let use_value = v[1];
      sorted_dictionary[use_key] = use_value;
    });
    return sorted_dictionary;
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
        <StatisticsRow title='GLOBAL' data={globalData} />
      </div>

      {/* Mask GIF */}
      <img
        alt='Virus Mask GIF'
        src={CoronaMaskGIF}
        style={{ height: '400px' }}></img>

      {/* Your Country */}
      <div style={{ margin: '120px 0 60px 0' }}>
        <h1 style={{ fontWeight: 'bold', marginBottom: '30px' }}>
          YOUR COUNTRY
        </h1>

        <StatisticsRow
          title={selectedCountryData ? selectedCountryData['Country'] : ''}
          data={selectedCountryData}
          allCountriesData={allCountriesData}
          setSelectedCountryData={setSelectedCountryData}
        />
      </div>

      {/* Other Countries */}
      <div style={{ margin: '120px 0 60px 0' }}>
        <h1 style={{ fontWeight: 'bold', marginBottom: '30px' }}>
          OTHER COUNTRIES
        </h1>

        <OtherCountriesCarousel
          allCountriesDataSorted={allCountriesDataSorted}
        />
      </div>

      {/* Virus GIF */}
      <img
        alt='Virus GIF'
        src={CoronaVirusGIF}
        style={{ height: '400px' }}></img>

      {/* Countries Table */}
      <div style={{ padding: '0', margin: '120px 60px 0 60px' }}>
        <OtherCountriesTable allCountriesDataSorted={allCountriesDataSorted} />
      </div>
    </div>
  );
}

/** @format */

import { useState } from 'react';

import { Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FiArrowDown } from 'react-icons/fi';

export default function OtherCountriesTable(props) {
  const [sortedBy, setSortedBy] = useState('cases');

  return (
    <Table
      responsive
      bordered
      style={{ color: 'white', border: '5px solid', fontWeight: 'bold' }}>
      {/* Table Header */}
      <thead>
        <tr>
          {/* #1 Number */}
          <th>#</th>

          {/* #2 Country */}
          <OverlayTrigger
            overlay={
              <Tooltip>
                {sortedBy === 'alphabetical'
                  ? 'Sorted Alphabetically'
                  : 'Click to Sort Alphabetically'}
              </Tooltip>
            }>
            <th
              onClick={() => {
                props.setAllCountriesDataSorted(props.allCountriesData);
                setSortedBy('alphabetical');
              }}>
              COUNTRY
              {sortedBy === 'alphabetical' && (
                <FiArrowDown style={{ float: 'right' }} />
              )}
            </th>
          </OverlayTrigger>

          {/* #3 Total Cases */}
          <OverlayTrigger
            overlay={
              <Tooltip>
                {sortedBy === 'cases'
                  ? 'Sorted by Total Cases'
                  : 'Click to Sort by Total Cases'}
              </Tooltip>
            }>
            <th
              onClick={() => {
                props.setAllCountriesDataSorted(
                  props.sortDictionary(props.allCountriesData, 'cases')
                );
                setSortedBy('cases');
              }}>
              TOTAL CASES
              {sortedBy === 'cases' && (
                <FiArrowDown style={{ float: 'right' }} />
              )}
            </th>
          </OverlayTrigger>

          {/* #4 Total Deaths */}
          <OverlayTrigger
            overlay={
              <Tooltip>
                {sortedBy === 'deaths'
                  ? 'Sorted by Total Deaths'
                  : 'Click to Sort by Total Deaths'}
              </Tooltip>
            }>
            <th
              onClick={() => {
                props.setAllCountriesDataSorted(
                  props.sortDictionary(props.allCountriesData, 'deaths')
                );
                setSortedBy('deaths');
              }}>
              TOTAL DEATHS
              {sortedBy === 'deaths' && (
                <FiArrowDown style={{ float: 'right' }} />
              )}
            </th>
          </OverlayTrigger>

          {/* #5 Total Recovered */}
          <OverlayTrigger
            overlay={
              <Tooltip>
                {sortedBy === 'recovered'
                  ? 'Sorted by Total Recovered'
                  : 'Click to Sort by Total Recovered'}
              </Tooltip>
            }>
            <th
              onClick={() => {
                props.setAllCountriesDataSorted(
                  props.sortDictionary(props.allCountriesData, 'recovered')
                );
                setSortedBy('recovered');
              }}>
              TOTAL RECOVERED
              {sortedBy === 'recovered' && (
                <FiArrowDown style={{ float: 'right' }} />
              )}
            </th>
          </OverlayTrigger>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>
        {Object.keys(props.allCountriesDataSorted).map((key, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              {props.allCountriesDataSorted[key]?.Country.toLocaleString(
                'en-US'
              )}
            </td>
            <td>
              {(
                props.allCountriesDataSorted[key]?.TotalConfirmed +
                props.allCountriesDataSorted[key]?.NewConfirmed
              ).toLocaleString('en-US')}
            </td>
            <td>
              {(
                props.allCountriesDataSorted[key]?.TotalDeaths +
                props.allCountriesDataSorted[key]?.NewDeaths
              ).toLocaleString('en-US')}
            </td>
            <td>
              {(
                props.allCountriesDataSorted[key]?.TotalRecovered +
                props.allCountriesDataSorted[key]?.NewRecovered
              ).toLocaleString('en-US')}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

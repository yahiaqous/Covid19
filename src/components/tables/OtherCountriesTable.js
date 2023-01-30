/** @format */

import { Table } from 'react-bootstrap';

export default function OtherCountriesTable(props) {
  return (
    <Table
      responsive
      bordered
      style={{ color: 'white', border: '5px solid', fontWeight: 'bold' }}>
      <thead>
        <tr>
          <th>#</th>
          <th>COUNTRY</th>
          <th>TOTAL CASES</th>
          <th>TOTAL DEATHS</th>
          <th>TOTAL RECOVERED</th>
        </tr>
      </thead>

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

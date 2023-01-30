/** @format */
/* eslint-disable array-callback-return */

import { Row, Col } from 'react-bootstrap';

import CountriesFilter from '../search&filters/CountriesFilter';
import StatisticCard from './StatisticCard';

export default function StatisticsRow(props) {
  const cardsData = [
    {
      title: 'TOTAL CASES',
      value1: props.data?.TotalConfirmed,
      value2: props.data?.NewConfirmed,
    },
    {
      title: 'TOTAL DEATHS',
      value1: props.data?.TotalDeaths,
      value2: props.data?.NewDeaths,
    },
    {
      title: 'TOTAL RECOVERED',
      value1: props.data?.TotalRecovered,
      value2: props.data?.NewRecovered,
    },
  ];

  return (
    <Row style={{ margin: '0 40px 0 40px', justifyContent: 'center' }}>
      {/* Row Header */}
      <Row style={{ margin: '0', padding: '0' }}>
        <Col lg={2} sm={3} style={{ padding: '0' }}></Col>

        {/* Row Title */}
        <Col lg={8} sm={6} style={{ padding: '0' }}>
          <h1 style={{ fontWeight: 'bold' }}>{props.title?.toUpperCase()}</h1>
        </Col>

        {/* Countries Filter */}
        <Col lg={2} sm={3} style={{ padding: '0 20px 0 20px' }}>
          {props.allCountriesData && (
            <div style={{ width: '100%', float: 'right' }}>
              <CountriesFilter
                allCountriesData={props.allCountriesData}
                selectedCountryData={props.data}
                setSelectedCountryData={props.setSelectedCountryData}
              />
            </div>
          )}
        </Col>
      </Row>

      {/* Cards */}
      {cardsData.map((item, key) => (
        <Col xl={4} md={6} key={key} style={{ padding: '0' }}>
          <StatisticCard
            title={item.title}
            value1={item.value1}
            value2={item.value2}
          />
        </Col>
      ))}
    </Row>
  );
}

/** @format */
/* eslint-disable array-callback-return */

import { Row, Col } from 'react-bootstrap';

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
    <Row style={{ margin: '0 40px 0 40px' }}>
      <h1 style={{ fontWeight: 'bold' }}>{props.title?.toUpperCase()}</h1>

      {cardsData.map((item, key) => (
        <Col key={key}>
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

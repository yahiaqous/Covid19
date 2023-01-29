/** @format */
/* eslint-disable array-callback-return */

import { Row, Col } from 'react-bootstrap';

import StatisticCard from './StatisticCard';

export default function StatisticsRow(props) {
  const cardsData = [
    {
      title: 'TOTAL CASES',
      value1: 677962644,
      value2: 132337,
    },
    {
      title: 'TOTAL DEATHS',
      value1: 6744509,
      value2: 594,
    },
    {
      title: 'TOTAL RECOVERED',
      value1: 0,
      value2: 0,
    },
  ];

  return (
    <Row style={{ margin: '0 40px 0 40px', textAlign: 'center' }}>
      <h1 style={{ fontWeight: 'bold' }}>{props.title}</h1>

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

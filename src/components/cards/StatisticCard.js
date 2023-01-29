/** @format */

import { Card } from 'react-bootstrap';
import { FaLongArrowAltUp } from 'react-icons/fa'; // https://react-icons.github.io/react-icons/

export default function StatisticCard(props) {
  return (
    <Card
      border='light'
      style={{
        backgroundColor: '#04061c',
        borderWidth: '5px',
        margin: '20px',
      }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '32px' }}>{props.title}</Card.Title>

        {/* Format Numbers with Commas => https://sabe.io/blog/javascript-format-numbers-commas#:~:text=The%20best%20way%20to%20format,the%20number%20formatted%20with%20commas. */}
        <Card.Text style={{ fontSize: '48px', fontWeight: 'bold' }}>
          {props.value1 ? props.value1.toLocaleString('en-US') : '00'}
        </Card.Text>

        <Card.Text style={{ fontSize: '48px', fontWeight: 'bold' }}>
          {props.value2 ? <FaLongArrowAltUp /> : <></>}
          {props.value2 ? props.value2.toLocaleString('en-US') : '00'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

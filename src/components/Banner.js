/** @format */

import { Row, Col } from 'react-bootstrap';

import VirusExplainGIF from '../media/VirusExplainGIF.gif';

export default function Banner() {
  return (
    <Row style={{ margin: '0' }}>
      <Col xs={12} md={12} lg={4} style={{ padding: '40px' }}>
        <div
          style={{
            fontSize: '24px',
            textAlign: 'center',
            display: 'flex',
            height: '100%',
            alignItems: 'center',
          }}>
          “In every crisis, doubt or confusion, take the higher path - the path
          of compassion, courage, understanding and love.” -Amit Ray
        </div>
      </Col>

      <Col xs={12} md={12} lg={8} style={{ padding: '0' }}>
        <img
          alt='Virus Explain GIF'
          src={VirusExplainGIF}
          style={{ width: '100%' }}></img>
      </Col>
    </Row>
  );
}

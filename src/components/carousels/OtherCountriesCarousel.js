/** @format */

import { Carousel } from 'react-bootstrap';

import StatisticsRow from '../cards/StatisticsRow';

export default function OtherCountriesCarousel(props) {
  return (
    <Carousel>
      {Object.keys(props.allCountriesDataSorted).map((key, index) => (
        <Carousel.Item key={index}>
          <StatisticsRow
            title={props.allCountriesDataSorted[key].Country}
            data={props.allCountriesDataSorted[key]}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

/** @format */

import { Form } from 'react-bootstrap';

export default function CountriesFilter(props) {
  console.log('props.selectedCountryData', props.selectedCountryData);

  function yy(e) {
    console.log('e', e.target.value);
    props.setSelectedCountryData(props.allCountriesData[e.target.value]);
  }

  return (
    <Form.Select onChange={yy}>
      {Object.keys(props.allCountriesData).map((key) => (
        <option
          key={key}
          value={key}
          selected={key === props.selectedCountryData?.CountryCode}>
          {props.allCountriesData[key].Country}
        </option>
      ))}
    </Form.Select>
  );
}

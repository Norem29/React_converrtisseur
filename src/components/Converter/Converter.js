import './converter.scss';
import propTypes from 'prop-types';
import React from 'react';
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import data from '../../../data/currencies';

class Converter extends React.Component {

  render () {

    return (

      <div className="converter">
        <Header baseCurrency={1} baseAmount='euro'/>
        <Currencies currencies={data}/>
        <Amount value={data[0].rate} currency={data[0].name}/>
      </div>
    );
  }
}

Converter.propTypes = {


};

Converter.defaultProps = {


};

export default Converter;

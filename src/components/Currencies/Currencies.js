import './currencies.scss';
import Currency from '../Currency/Currency';
import PropTypes from 'prop-types';

const Currencies = ({
  currencies,
}) => (

  <div className="currencies">
    <div className="currencies-title">Currencies</div>
    <ul>
      {currencies.map(({name}) => (
        <Currency key={name} name={name} />
      ))}
    </ul>
  </div>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

Currencies.defaultProps = {


};

export default Currencies;

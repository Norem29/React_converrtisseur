import './amount.scss';
import PropTypes from 'prop-types';

const Amount = ({
  value,
  currency,
}) => (

  <footer className="amount">
    <p className='amount-value'>{value}</p>
    <p className='amount-currency'>{currency}</p>
  </footer>
);

Amount.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Amount;

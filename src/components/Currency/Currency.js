import './currency.scss';
import PropTypes from 'prop-types'

const Currency = ({name}) => {
  return (
    <li className='currency'>{name}</li>
  );
}

Currency.propTypes = {

  name: PropTypes.string.isRequired,
};

export default Currency

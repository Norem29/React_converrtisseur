import './header.scss';
import PropTypes from 'prop-types';

const Header = ({

  baseAmount,
  baseCurrency,
  className
}) => (

  <header className={`header ${className}`}>
    <h1 className='header-title'>Converter</h1>
    <p className='header-amount'>{baseAmount} {baseCurrency}</p>
  </header>
);

Header.propTypes = {

  baseAmount: PropTypes.number,
  baseCurrency: PropTypes.string,
  className: PropTypes.string,
}

Header.defaultProps = {

  baseAmount: 1,
  baseCurrency: 'euro',
  className: '',
}

export default Header;

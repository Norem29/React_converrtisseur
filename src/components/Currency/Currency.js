import './currency.scss';
import PropTypes from 'prop-types'

const Currency = ({name}) => {
  return (
    <div>{name}</div>
  )
}

Currency.propTypes = {

  name: PropTypes.string.isRequired,
}

export default Currency

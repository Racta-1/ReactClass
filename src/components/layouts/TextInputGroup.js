import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  id,
  name,
  type,
  value,
  placeholder,
  onInputChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        className={classnames('form-control', {
          'is-invalid': error,
        })}
        id={id}
        name={name}
        onChange={onInputChange}
        type={type}
        placeholder={placeholder}
        value={value}
      />
      {error && (
        <div className="invalid-feedback">
          <small>{error}</small>
        </div>
      )}
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
TextInputGroup.defaultProps = {
  type: 'text',
};

export default TextInputGroup;

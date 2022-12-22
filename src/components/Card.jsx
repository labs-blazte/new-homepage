import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({children}) => {
  return (
    <div >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any
}
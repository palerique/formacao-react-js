/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import {NavLink} from 'react-router-dom';

const LinkWrapper = props => {
  return <NavLink activeStyle={{fontWeight: 'bold'}} {...props} />;
};

export default LinkWrapper;

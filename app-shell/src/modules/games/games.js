import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable import/no-unresolved */
import { mount } from 'games/app';

const Games = ({ userInfo }) => {
  const componentRef = useRef();

  useEffect(() => {
    mount(componentRef.current, {
      userInfo,
    });
  }, []);

  return (
    <div ref={componentRef} />
  );
};

Games.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

export default Games;

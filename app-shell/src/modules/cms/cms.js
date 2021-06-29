import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable import/no-unresolved */
import { mount } from 'cms/app';

const Cms = ({ userInfo }) => {
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

Cms.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

export default Cms;

import React from 'react';

const withRenderName = (renderFn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        { renderFn }
      </Wrapped>
    );
  };
};

export default withRenderName;
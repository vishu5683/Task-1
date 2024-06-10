import React, { useState } from 'react';

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(false);

    return <WrappedComponent isLoading={isLoading} setIsLoading={setIsLoading} {...props} />;
  };
};

export default withLoader;

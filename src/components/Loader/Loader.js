import React from 'react';
import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Circles
        height="80"
        width="80"
        color="#c84dd1"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

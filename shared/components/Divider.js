import React from 'react';

const Divider = () => (
  <span className="divider">
    <style jsx>{`
        .divider {
          width: 140px;
          height: 3px;
          background-color: #FC4B63;
          display: block;
          margin: 0 0 30px;
          background: linear-gradient(to right, #fc4b63 0%, rgba(255, 255, 255, 0.01) 100%);
        }
      `}</style>
  </span>
);

export default Divider;

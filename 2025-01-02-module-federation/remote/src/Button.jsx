import React from 'react'

const Button = ({ theme, onClick, children }) => {
  return (
    <button onClick={onClick}>
      [{theme}] {children}
    </button>
  );
};

export default Button;

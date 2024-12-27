import React from 'react';

type ButtonProps = {
  name: string;
  isBeam?: boolean;
  containerClass?: string;
};

const Button: React.FC<ButtonProps> = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping-dot" />
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;

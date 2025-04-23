import React from 'react';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon
}) => {
  return (
    <button
      type={type}
      className={`button button--${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button; 
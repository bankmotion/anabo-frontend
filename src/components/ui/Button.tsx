import type { FC, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => (
  <button
    className={`px-4 py-2 rounded-full font-bold text-white bg-pink-500 shadow-md active:bg-pink-600 disabled:bg-gray-300 disabled:text-gray-400 transition w-20`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button; 
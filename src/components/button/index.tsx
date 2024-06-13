interface ButtonProps {
  value: string;
  classes?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ type, value, classes, onClick }: ButtonProps) => {
  return (
    <button
      className={`${classes} py-1 min-w-[6.382rem] font-bold px-3 rounded-full text-[0.7rem] lg:text-[0.813rem] lg:text-normal`}
      onClick={onClick}
      type={type}
    >
      {value}
    </button>
  );
};

export default Button;

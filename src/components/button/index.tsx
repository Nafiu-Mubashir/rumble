interface ButtonProps {
  value: string,
  classes?: string,
  onClick?: () => void,

}
const Button = ({value, classes, onClick}: ButtonProps) => {
  return (
    <button className={`${classes} py-2 font-bold px-3 rounded-full text-[0.813rem] lg:text-normal`} onClick={onClick}>
      {value}
    </button>
  )
}

export default Button
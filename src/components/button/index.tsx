interface ButtonProps {
  value: string,
  classes?: string,
  onClick?: () => void,

}
const Button = ({value, classes, onClick}: ButtonProps) => {
  return (
    <button className={`${classes} py-2 font-bold px-3 rounded-full`} onClick={onClick}>
      {value}
    </button>
  )
}

export default Button
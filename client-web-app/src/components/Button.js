const Button = ({ btnClass, btnText }) => {
  let className = "btn";
  if (btnClass) {
    className += " " + btnClass;
  }

  return <button className={className}>{btnText}</button>;
};

export default Button;

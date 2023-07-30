function Button(props) {
  return <button onClick={props.onClickCounter}>{props.text}</button>;
}

export default Button;

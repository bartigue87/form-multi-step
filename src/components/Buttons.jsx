import "./component_styles/Button.css";

export default function Button(props) {
  return (
    <>
      <button onClick={props.click} className={`button ${props.class}`}>
        {props.text}
      </button>
    </>
  );
}

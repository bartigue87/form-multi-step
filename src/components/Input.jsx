import "./component_styles/Input.css";

export default function Input(props) {
  return (
    <div className="input--container">
      <label>
        {props.label}
        <br></br>
        <input
          className="input"
          id={props.id}
          name={props.name}
          type={props.type}
          placeholder={props.placeHolder}
        />
      </label>
    </div>
  );
}

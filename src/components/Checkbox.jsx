import "./component_styles/Checkbox.css";

export default function Checkbox(props) {
  return (
    <>
      <div className="checkbox--container">
        <input
          type="checkbox"
          id={props.id}
          name={props.id}
          value={props.value}
        />
        <label htmlFor={props.id}>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </label>
        <p>+${props.price}/mo</p>
      </div>
      <br></br>
    </>
  );
}

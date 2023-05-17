import "./component_styles/Checkbox.css";

export default function Checkbox(props) {
  const handleCheckbox = (event) => {
    props.setFormData({
      ...props.formData,
      [props.id]: event.target.checked,
    });
    console.log(props.formData);
    console.log(event.target.checked);
  };
  return (
    <>
      <div className="checkbox--container">
        <input
          type="checkbox"
          id={props.id}
          name={props.id}
          value={props.value}
          onChange={handleCheckbox}
          checked={props.checked}
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

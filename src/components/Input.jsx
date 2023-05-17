import "./component_styles/Input.css";

export default function Input(props) {
  const handleChange = (event) =>
    props.setFormData({
      ...props.formData,
      [props.name]: event.target.value,
    });
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
          value={props.formData[props.name]}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

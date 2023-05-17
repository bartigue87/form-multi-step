export default function SelectSquare(props) {
  const handleRadio = (event) => {
    props.setFormData({
      ...props.formData,
      [props.name]: event.target.value,
    });
    console.log(props.formData);
    console.log(event.target.value);
  };
  return (
    <>
      <input
        type="radio"
        name={props.name}
        id={props.id}
        class="hidebox"
        value={props.value}
        onChange={handleRadio}
        checked={props.formData.tier === props.id}
      />
      <label htmlFor={props.id} class="selection-div">
        <img className="select--img" src={props.img} alt="joystick" />
        <h3>{props.id}</h3>
        <p>${props.price}/mo</p>
      </label>
    </>
  );
}

export default function SelectSquare(props) {
  return (
    <>
      <input
        type="radio"
        name={props.name}
        id={props.id}
        class="hidebox"
        value={props.value}
      />
      <label for={props.id} class="selection-div">
        <img className="select--img" src={props.img} alt="joystick" />
        <h3>{props.name}</h3>
        <p>${props.price}/mo</p>
      </label>
    </>
  );
}

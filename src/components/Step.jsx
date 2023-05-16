import "./component_styles/Step.css";

export default function Step(props) {
  console.log(props.active);
  let activeState = props.active === props.number ? "active" : "inactive";

  return (
    <div className="step">
      <div className={`circle ${activeState}`}>{props.number}</div>
      <div className="step-info">
        <p>Step {props.number}</p>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

import Step from "./Step";
import "./component_styles/SideStepper.css";

export default function SideStepper(props) {
  return (
    <div className="left-container">
      <div className="steps-container">
        <Step active={props.activeNumber} number={1} title={"Your Info"} />
        <Step active={props.activeNumber} number={2} title={"Select Plan"} />
        <Step active={props.activeNumber} number={3} title={"Add-Ons"} />
        <Step active={props.activeNumber} number={4} title={"Summary"} />
      </div>
    </div>
  );
}

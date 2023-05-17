import SideStepper from "../components/SideStepper";

export default function Step4Page(props) {
  return (
    <div className="step4--container">
      <p>Name: {props.formData.name}</p>
      <p>Email: {props.formData.email}</p>
      <p>Phone: {props.formData.phone}</p>
      <p>Plan: {props.formData.tier}</p>
      <p>Recurrance: {props.formData.plan ? "Yearly" : "Monthly"}</p>
      <div>
        Added Options:
        {props.formData.online ? <li>Online Service - $1/mo</li> : ""}
        {props.formData.storage ? <li>Extra Storage - $2/mo </li> : ""}
        {props.formData.profile ? <li>Customizable Profile - $2/mo</li> : ""}
      </div>
    </div>
  );
}

import Checkbox from "../components/Checkbox";
import SideStepper from "../components/SideStepper";

export default function Step3Page(props) {
  return (
    <div className="step3--container">
      <Checkbox
        id={"online"}
        title={"Online Service"}
        description={"Access to multiplayer games"}
        price={1}
        value={"online-service"}
        formData={props.formData}
        setFormData={props.setFormData}
        checked={props.formData.online}
      />
      <Checkbox
        id={"storage"}
        title={"Larger Storage"}
        description={"Extra 1 TB of cloud storage"}
        price={2}
        value={"extra-storage"}
        formData={props.formData}
        setFormData={props.setFormData}
        checked={props.formData.storage}
      />
      <Checkbox
        id={"profile"}
        title={"Customizable Profile"}
        description={"Custom theme on your profile"}
        price={2}
        value={"custom-profile"}
        formData={props.formData}
        setFormData={props.setFormData}
        checked={props.formData.profile}
      />
    </div>
  );
}

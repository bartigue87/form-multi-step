import Checkbox from "../components/Checkbox";
import SideStepper from "../components/SideStepper";

export default function Step3Page() {
  return (
    <div className="step3--container">
      <Checkbox
        id={"online"}
        title={"Online Service"}
        description={"Access to multiplayer games"}
        price={1}
        value={"online-service"}
      />
      <Checkbox
        id={"storage"}
        title={"Larger Storage"}
        description={"Extra 1 TB of cloud storage"}
        price={2}
        value={"extra-storage"}
      />
      <Checkbox
        id={"profile"}
        title={"Customizable Storage"}
        description={"Custom theme on your profile"}
        price={2}
        value={"custom-profile"}
      />
    </div>
  );
}

import SideStepper from "../components/SideStepper";
import arcade from "../assets/arcade.png";
import advanced from "../assets/advanced.png";
import pro from "../assets/pro.png";
import "./page_styles/Step1Page.css";
import SelectSquare from "../components/SelectSquare";

export default function Step2Page(props) {
  const handleCheckbox = (event) => {
    props.setFormData({
      ...props.formData,
      plan: event.target.checked,
    });
    console.log(props.formData);
    console.log(event.target.checked);
  };
  return (
    <div className="step--container">
      <div className="answer-div">
        <SelectSquare
          name={"tier"}
          id={"Arcade"}
          value={"Arcade"}
          img={arcade}
          price={9}
          formData={props.formData}
          setFormData={props.setFormData}
        />
        <SelectSquare
          name={"tier"}
          id={"Advanced"}
          value={"Advanced"}
          img={advanced}
          price={12}
          formData={props.formData}
          setFormData={props.setFormData}
        />
        <SelectSquare
          name={"tier"}
          id={"Pro"}
          value={"Pro"}
          img={pro}
          price={15}
          formData={props.formData}
          setFormData={props.setFormData}
        />
      </div>
      <div className="toggle--container">
        <p>Monthly</p>
        <label class="switch">
          <input type="checkbox" onChange={handleCheckbox} />
          <span class="slider round"></span>
        </label>
        <p>Yearly</p>
      </div>
    </div>
  );
}

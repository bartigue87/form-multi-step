import SideStepper from "../components/SideStepper";
import arcade from "../assets/arcade.png";
import advanced from "../assets/advanced.png";
import pro from "../assets/pro.png";
import "./page_styles/Step1Page.css";
import SelectSquare from "../components/SelectSquare";

export default function Step2Page() {
  return (
    <div className="step--container">
      <div className="answer-div">
        <SelectSquare
          name={"Arcade"}
          id={"arcade-id"}
          value={"arcade-plan"}
          img={arcade}
          price={9}
        />
        <SelectSquare
          name={"Advanced"}
          id={"advanced-id"}
          value={"advanced-plan"}
          img={advanced}
          price={12}
        />
        <SelectSquare
          name={"Pro"}
          id={"pro-id"}
          value={"pro-plan"}
          img={pro}
          price={15}
        />
      </div>
      <div className="toggle--container">
        <p>Monthly</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p>Yearly</p>
      </div>
    </div>
  );
}

import Button from "./Buttons";
import "./component_styles/Footer.css";

export default function Footer(props) {
  return (
    <footer className={props.footerClass}>
      <button onClick={props.prevClick} className={props.activeState}>
        Go Back
      </button>
      <Button click={props.nextClick} text={props.text} class={props.class} />
    </footer>
  );
}

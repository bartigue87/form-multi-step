import "./component_styles/Header.css";

export default function Header(props) {
  return (
    <header>
      <h1>{props.heading}</h1>
      <h4>{props.subHeading}</h4>
    </header>
  );
}

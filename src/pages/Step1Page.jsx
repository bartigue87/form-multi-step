import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import SideStepper from "../components/SideStepper";
import "./page_styles/Step1Page.css";

export default function Step1Page(props) {
  return (
    <div className="step--container">
      <Input
        id={"name"}
        name={"name"}
        label={"Name"}
        type={"text"}
        placeHolder={"e.g. Stephen King"}
        formData={props.formData}
        setFormData={props.setFormData}
      />
      <Input
        id={"email"}
        name={"email"}
        label={"Email Address"}
        type={"email"}
        placeHolder={"e.g. sking@lorem.com"}
        formData={props.formData}
        setFormData={props.setFormData}
      />
      <Input
        id={"phone"}
        name={"phone"}
        label={"Phone Number"}
        type={"text"}
        placeHolder={"e.g. +1 234 567 8900"}
        formData={props.formData}
        setFormData={props.setFormData}
      />
    </div>
  );
}

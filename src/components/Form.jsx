import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Step1Page from "../pages/Step1Page";
import Step2Page from "../pages/Step2Page";
import Step3Page from "../pages/Step3Page";
import Step4Page from "../pages/Step4Page";
import Step5Page from "../pages/Step5Page";
import SideStepper from "./SideStepper";

import "./component_styles/Form.css";

export default function Form() {
  const [page, setPage] = useState(0);
  const FormHeader = [
    "Personal info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up",
  ];
  const FormSubHeader = [
    "Please provide your name, email address, and phone number.",
    "You have the option of monthly or yearly billing",
    "Add-ons help enhance your gaming experience.",
    "Double-check everything looks OK before confirming.",
  ];

  function PageDisplay() {
    if (page === 0) {
      return <Step1Page />;
    } else if (page === 1) {
      return <Step2Page />;
    } else if (page === 2) {
      return <Step3Page />;
    } else if (page === 3) {
      return <Step4Page />;
    } else if (page === 4) {
      return <Step5Page />;
    }
  }

  function next() {
    setPage((currPage) => currPage + 1);
  }

  function previous() {
    if (page === 0) {
      return page;
    } else {
      setPage((currPage) => currPage - 1);
    }
  }

  const buttonActiveState = page === 0 ? "invisible" : "visible";
  const buttonClass = page < FormHeader.length - 1 ? "next" : "confirm";
  const buttonText = page < FormHeader.length - 1 ? "Next Step" : "Confirm";
  const footerClass =
    page === FormHeader.length ? "footer--inactive" : "footer-void";

  return (
    <div className="page--container">
      <SideStepper activeNumber={page + 1} />
      <div className="form">
        <Header heading={FormHeader[page]} subHeading={FormSubHeader[page]} />
        <div className="form--container">
          <div className="body--container">{PageDisplay()}</div>
        </div>
        <Footer
          footerClass={footerClass}
          nextClick={next}
          prevClick={previous}
          activeState={buttonActiveState}
          class={buttonClass}
          text={buttonText}
        />
      </div>
    </div>
  );
}

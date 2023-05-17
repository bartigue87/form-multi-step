import check from "../assets/Check.png";

export default function Step5Page() {
  return (
    <>
      <div className="step5--container">
        <img style={{ height: "80px", width: "80px" }} src={check} />
        <h1>Thank You!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </>
  );
}

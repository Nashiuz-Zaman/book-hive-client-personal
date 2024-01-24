// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

// lottie animation
import Lottie from "lottie-react";
import loginAnimation from "../../../animation-data/last.json";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <InnerContainer>
        <section>
          <div className="grid grid-cols-1 gap-4 2md:grid-cols-2 items-center lg:gap-20">
            <div className="text-center">
              <Lottie animationData={loginAnimation}></Lottie>
            </div>

            <div>
              <RegistrationForm modifyClasses="shadow-medium rounded-2xl" />
            </div>
          </div>
        </section>
      </InnerContainer>
    </div>
  );
};

export default RegistrationPage;

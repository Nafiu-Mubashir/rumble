import React from "react";
import NotificationMessage from "../../components/notificationMessage/NotificationMessage";

const RegistrationVerification = () => {
  return (
    <>
      <NotificationMessage
        title="YOUR ACCOUNT HAS BEEN SUCCESSFULLY VERIFIED!"
        message="Please check your email to activate your account!"
        additionalText=""
      />
    </>
  );
};

export default RegistrationVerification;

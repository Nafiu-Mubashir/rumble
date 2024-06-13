import React from "react";
import NotificationMessage from "../../components/notificationMessage/NotificationMessage";

const SuccessfulRegistration = () => {
  return (
    <>
      <NotificationMessage
        title="CONGRATULATIONS"
        message="Please check your email to activate your account!"
        additionalText="You have successfully registered"
      />
    </>
  );
};

export default SuccessfulRegistration;

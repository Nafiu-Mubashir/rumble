// src/components/NotificationMessage.jsx
import React from "react";

interface NotificationMessageProps {
  title: string;
  message: string;
  additionalText: string;
}

const NotificationMessage: React.FC<NotificationMessageProps> = ({
  title,
  message,
  additionalText,
}) => {
  return (
    <div className="dark:text-white text-center flex flex-col h-screen py-20">
      <h2 className="text-[32px] leading-[32px] font-500 dark:text-white text-titan-blue mb-[37px] font-inter">
        {title}
      </h2>
      <div className="bg-titan-gray text-white text-[16px] leading-[22.4px] mx-auto px-12 py-2 font-roboto font-700 mb-[37px] rounded-sm">
        {message}
      </div>
      {additionalText && (
        <div className="text-[20px] font-inter leading-[24.2px]">
          {additionalText}
        </div>
      )}
    </div>
  );
};

export default NotificationMessage;

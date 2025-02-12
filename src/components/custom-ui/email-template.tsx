import React from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
  phone: string;
};

const EmailTemplate = ({ name, email, message, phone }: EmailTemplateProps) => {
  return (
    <div>
      <h2>You just received a message from {name}</h2>
      <h2>{email}</h2>
      <h2>{phone}</h2>
      <p>{message}</p>
    </div>
  );
};

export default EmailTemplate;

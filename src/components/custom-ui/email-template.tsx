import React from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
};

const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
  return (
    <div>
      <h2>You just received a message from {name}</h2>
      <h2>{email}</h2>
      <p>{message}</p>
    </div>
  );
};

export default EmailTemplate;

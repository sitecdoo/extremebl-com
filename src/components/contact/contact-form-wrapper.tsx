"use client";

import { Suspense } from "react";
import ContactForm from "./contact-form";

const ContactFormWrapper = () => {
  return (
    <Suspense>
      <ContactForm />
    </Suspense>
  );
};

export default ContactFormWrapper;

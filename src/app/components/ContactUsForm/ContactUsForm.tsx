/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactFormImage from "../../public/assets/images/contact-form-am.png";
import Button from "../Button/Button";
import TextArea from "./components/TextArea/TextArea";
import TextField from "./components/TextField/TextField";
import styles from "./ContactUsForm.module.scss";

const ContactUsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState<any>({});

  const handleInputChange = (event: any) => {
    const errors: any = {};
    const { name, value } = event.target;
    switch (name) {
      case "firstName": {
        setFirstName(value);
        if (!value) {
          errors.firstName = "First Name is required";
        } else {
          delete formErrors.firstName;
        }
        break;
      }
      case "lastName": {
        setLastName(value);
        if (!value) {
          errors.lastName = "Last Name is required";
        } else {
          delete formErrors.lastName;
        }
        break;
      }
      case "email": {
        setEmail(value);
        if (!value) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errors.email = "Email is invalid";
        } else {
          delete formErrors.email;
        }
        break;
      }
      case "phoneNumber": {
        setPhoneNumber(value);
        break;
      }
      case "message": {
        setMessage(value);
        if (!value) {
          errors.message = "Message is required";
        } else {
          delete formErrors.message;
        }
        break;
      }
      default:
        break;
    }
    setFormErrors((prevErrors: any) => {
      return { ...prevErrors, ...errors };
    });
  };

  const isFormInValid = () => {
    return (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      message === "" ||
      Object.keys(formErrors).length !== 0
    );
  };

  const resetFormFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setFormErrors({});
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (isFormInValid()) return;

    const GOOGLE_FORM_ACTION =
      "https://docs.google.com/forms/d/e/1FAIpQLScKG7zisVA0BXtccjRB-MxYlt9kG8HfZcRi_bq4htREuKKxfg/formResponse";

    const formData = new FormData();
    formData.append("entry.300955838", firstName);
    formData.append("entry.1057687638", lastName);
    formData.append("entry.1409379865", email);
    formData.append("entry.203794087", phoneNumber);
    formData.append("entry.1964830231", message);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      resetFormFields();
      toast.success("Form submitted successfully!");
    } catch {
      toast.error("Failed to submit form");
    }
  };

  return (
    <div className={`${styles.contact_form_wrapper}`} id="contact-us-form">
      <div
        className={`${styles.contact_form_container} grid grid-cols-4 gap-12`}
      >
        <div
          className={`flex flex-col justify-between col-span-4 md:col-span-2 text-white`}
        >
          <h2>Contact Us</h2>
          <div className="flex flex-col gap-4">
            <h3>Let’s Build with Purpose</h3>
            <small>
              Great work begins with a candid assessment. Describe the primary
              challenge impeding your growth, and let’s chat.
            </small>
          </div>
        </div>
        <div className="flex col-span-4 md:col-span-2">
          <Image src={ContactFormImage} alt="contact-form" className="w-full" />
        </div>
        <div
          className={`flex flex-col col-span-4 md:col-span-4 gap-5 ${styles.input_fields_div}`}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <TextField
                placeholder="First Name*"
                required
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                error={formErrors.firstName}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <TextField
                placeholder="Last Name*"
                required
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                error={formErrors.lastName}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <TextField
                placeholder="Business Email*"
                required
                name="email"
                value={email}
                onChange={handleInputChange}
                error={formErrors.email}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <TextField
                placeholder="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-span-2">
              <TextArea
                placeholder="What would you like help with?*"
                required
                name="message"
                value={message}
                onChange={handleInputChange}
                error={formErrors.message}
              />
            </div>
          </div>
          <div>
            <Button
              // disabled={isFormInValid()}
              label="Spark the strategy session"
              btnClass="whiteBtn"
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
};

export default ContactUsForm;

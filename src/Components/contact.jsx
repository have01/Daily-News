import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FormGroup,
  Form,
  Label,
  Input,
  Button,
  Textarea,
  Section,
} from "./formComponent";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c7zmdpj",
        "template_7rfh03a",
        form.current,
        "-fpVVwf0C8swLb143"
      )
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <>
      <Section>
        <h2 class="mb-4 mt-10 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white ">
          Contact Us
        </h2>
        <p class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Will get back to you asap!
        </p>

        <Form ref={form} onSubmit={sendEmail} className="">
          <FormGroup>
            {" "}
            <Label>Name</Label>
            <Input type="text" name="name" />{" "}
          </FormGroup>
          <FormGroup>
            {" "}
            <Label>Email</Label>
            <Input type="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <Textarea name="message" />
          </FormGroup>

          <Button type="submit" value="Send">
            Submit{" "}
          </Button>
        </Form>
      </Section>
    </>
  );
};

export default Contact;

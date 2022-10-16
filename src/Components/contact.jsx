import React from "react";
import {
  FormGroup,
  Label,
  Input,
  Paragraph,
  Button,
  Textarea,
  Section,
} from "./formComponent";

const contact = () => {
  return (
    <>
      <Section>
        <h2 class="mb-4 mt-10 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Will get back to you asap!
        </p>
        <FormGroup>
          <Label htmlFor="label">Your Name</Label>
          <Input id="label" />
        </FormGroup>
        <FormGroup>
          <Label>Your Email</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Your Message</Label>
          <Textarea />
        </FormGroup>
        <Button>Submit</Button>
      </Section>
    </>
  );
};

export default contact;

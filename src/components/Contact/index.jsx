import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  ContactTitle,
  Container,
  Desc,
  Title,
  Wrapper,
} from "./ContactStyledComponent";
import { Snackbar } from "@mui/material";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nolahbh",
        "template_z7bp8le",
        form.current,
        "wmTXNqKVbZvfXYXzB",
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc></Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email me🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" name="message" />
          <ContactButton type="submit" value="send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Message sent successfully"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;

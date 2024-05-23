import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4frdnzd", "contact_form", form.current, {
        publicKey: "7KUAuGH0VLcG2mPgC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    alert("Email successfully sent. Please check for auto reply email.");
  };

  return (
    <form
      ref={form}
      className="flex flex-col w-full items-center mt-10"
      onSubmit={sendEmail}
    >
      <input
        className="h-14 px-4 rounded-lg borderBlack transition-all w-full"
        placeholder="Your email"
        type="email"
        name="user_email"
        required
        maxLength={500}
        // value={this.state.value}
        // onChange={this.handleChange}
      />
      <input
        className="h-14 px-4 rounded-lg borderBlack transition-all w-full mt-3"
        placeholder="Your name"
        name="user_name"
        type="text"
        maxLength={500}
        // value={this.state.value}
        // onChange={this.handleChange}
      />
      <textarea
        className="h-52 my-3 rounded-lg borderBlack p-4 transition-all w-full "
        placeholder="Your message"
        name="message"
        // value={this.state.message}
        // onChange={this.handleMessageChange}
        maxLength={5000}
      />
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-12 w-32 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
      >
        <input type="submit" value="Send" />
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
        </svg>{" "}
      </button>
    </form>
  );
}

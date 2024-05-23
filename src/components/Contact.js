import Form from "./Form";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-center items-center mb-20 sm:mb-28  w-[min(100%,38rem)] text-center ">
      <h1 className="text-3xl font-medium capitalize mb-8 text-center">Contact Me</h1>
      <h2 className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at <a className="underline" href="mailto:elginsi2000@gmail.com">elginsi2000@gmail.com</a> or through this form.
      </h2>
      <Form />
    </section>
  );
}

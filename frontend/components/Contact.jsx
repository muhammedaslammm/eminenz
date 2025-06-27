import EnquiryForm from "./EnquiryForm";
import MetaData from "./MetaData";

const Contact = () => {
  return (
    <section className="w-[90%] lg:w-[87%] mx-auto py-10 space-y-4">
      <div>
        <h2 className="text-[1.1rem] lg:text-[1.4rem] uppercase font-medium">
          Contact us
        </h2>
        <p className="text-[1rem] lg:text-[1.2rem] text-neutral-900">
          Get in touch with us for any enquiries
        </p>
      </div>
      <div className="flex gap-6">
        <EnquiryForm />
        <MetaData />
      </div>
    </section>
  );
};

export default Contact;

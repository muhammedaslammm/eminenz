import EnquiryForm from "./EnquiryForm";
import MetaData from "./MetaData";

const Contact = () => {
  return (
    <section className="w-full py-10 bg-[rgba(188,213,227,.50)]">
      <div className="w-[90%] lg:w-[87%] mx-auto p-4 lg:p-8 bg-white space-y-4">
        <div className="leading-[1.5rem]">
          <h2 className="text-[1.1rem] lg:text-[1.4rem] uppercase font-medium">
            Contact us
          </h2>
          <p className="text-[1rem] lg:text-[1.2rem] text-neutral-900">
            Get in touch with us for any enquiries
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <EnquiryForm />
          <MetaData />
        </div>
      </div>
    </section>
  );
};

export default Contact;

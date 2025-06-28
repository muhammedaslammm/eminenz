"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import enquirySchema from "@/schema/enquirySchema";
import { useState } from "react";
import { Spinner } from "phosphor-react";

const EnquiryForm = () => {
  const [submitState, setSubmitState] = useState("idle");
  const [responseMessage, setResponseMessage] = useState("");
  const [responseStat, setResponseStat] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(enquirySchema) });

  const getButtonContent = () => {
    switch (submitState) {
      case "loading":
        return <Spinner className="animate-spin w-5 h-5 lg:w-6 lg:h-6" />;
      case "success":
        return responseMessage;
      case "fail":
        return responseMessage;
      default:
        return "Submit Your Enquiry";
    }
  };

  const onSubmit = async (data) => {
    setSubmitState("loading");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response_data = await response.json();
      if (response.ok) {
        setResponseMessage(response_data.message);
        reset();
        setSubmitState("success");
        setTimeout(() => {
          setSubmitState("idle");
        }, 1500);
      } else throw new Error(response_data.message);
    } catch (error) {
      setResponseMessage(error.message);
      setSubmitState("fail");
      setTimeout(() => {
        setSubmitState("idle");
      }, 1500);
    }
  };
  return (
    <form
      className="w-full lg:w-4/6 lg:border border-neutral-400 p-0 lg:p-4 space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full space-y-1">
          <div className="flex justify-between items-center">
            <label htmlFor="" className="block">
              Fullname
            </label>
            {errors.name && (
              <p className="text-[.7rem] text-red-800 bg-red-100 py-[.2rem] px-[.5rem] rounded-[.2rem]">
                {errors.name.message}
              </p>
            )}
          </div>
          <input
            type="text"
            className="border border-neutral-400 p-2 w-full"
            placeholder="Enter your full name"
            {...register("name")}
          />
        </div>
        <div className="w-full space-y-1">
          <div className="flex justify-between items-center">
            <label htmlFor="" className="block">
              Email
            </label>
            {errors.email && (
              <p className="text-[.7rem] text-red-800 bg-red-100 py-[.2rem] px-[.5rem] rounded-[.2rem]">
                {errors.email.message}
              </p>
            )}
          </div>
          <input
            type="email"
            className="border border-neutral-400 p-2 w-full"
            placeholder="Enter your email address"
            {...register("email")}
          />
        </div>
      </div>
      <div>
        <textarea
          name=""
          id=""
          rows={7}
          className="border border-neutral-400 w-full p-2"
          placeholder="Enter you query here..."
          {...register("query")}
        ></textarea>
        {errors.query && (
          <p className="inline text-[.7rem] text-red-800 bg-red-100 py-[.2rem] px-[.5rem] rounded-[.2rem]">
            {errors.query.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className={`${
          submitState === "loading"
            ? "bg-black/60 cursor-not-allowed"
            : submitState === "success"
            ? "bg-green-800"
            : submitState === "fail"
            ? "bg-red-800"
            : "bg-black/90"
        } text-white text-[.9rem] lg:text-[1rem] transition-transform font-medium mt-4 w-full p-2 cursor-pointer flex justify-center`}
        disabled={submitState !== "idle"}
      >
        {getButtonContent()}
      </button>
    </form>
  );
};

export default EnquiryForm;

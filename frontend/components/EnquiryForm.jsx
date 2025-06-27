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
        return <Spinner className="animate-spin" />;
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
      const response = await fetch("/api/enquiry/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response_data = await response.json();
      if (response.ok) {
        setResponseMessage(response_data.message);
        setResponseStat(true);
        reset();
        setSubmitState("success");
        setTimeout(() => {
          setSubmitState("idle");
        }, 1000);
      } else {
        setResponseMessage(response_data.message);
        setResponseStat(false);
        setSubmitState("fail");
        setTimeout(() => {
          setSubmitState("idle");
        });
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <form
      className="w-4/6 border border-neutral-400 p-4 space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex gap-4">
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
        className={`bg-black/80 text-white font-medium mt-4 w-full p-2 cursor-pointer flex justify-center`}
      >
        {getButtonContent()}
      </button>
    </form>
  );
};

export default EnquiryForm;

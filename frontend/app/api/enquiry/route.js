import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    const { name, email, query } = req.json();
    const date = new Date().toISOString().split("T")[0];
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_APP_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: process.env.USER_EMAIL,
      subject: "New Enquiry Recieved",
      text: `You have recieved a new enquiry from a user named ${name}.
      Client Name: ${name}
      EmailID: ${email}
      ${name}'s Query: ${query}
      Date: ${date}`,
    };
    await transporter.sendMail(mailOptions);
    console.log("success");
    return NextResponse.json(
      { message: "Enquiry successfully send" },
      { status: 200 }
    );
  } catch (error) {
    console.log("failed", error);
    return NextResponse.json(
      { message: "Enquiry submission failed" },
      { status: 500 }
    );
  }
};

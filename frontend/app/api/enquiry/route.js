import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    const { name, email, query } = await req.json();
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
      subject: "New Enquiry : Total Solutions",
      html: `
      <div style="border:1px solid #b8b8b8; width:600px">
  <h1 style="padding:10px 15px; background-color:#225ca3; color:white; font-size:30px">
    Total Solutions New Client Enquiry
  </h1>
  <div style="padding:15px 15px; font-size:25px">
    <p>A new client have made an enquiry through the website</p>
    <ul style="list-style:none; margin:20px 0px; padding:10px 15px; border:1px solid #b8b8b8; border-radius:3px">
      <li>Name : <strong>${name}</strong></li>
      <li>Email ID : <strong>${email}</strong></li>
      <li>Date : <strong>${date}</strong></li>
    </ul>
    <div style="border:1px solid #b8b8b8; padding:10px 15px; border-radius:3px">
      <div>Client Note/Enquiry : </div>
      <p style="margin-top:8px;">${query}</p>
    </div>    
  </div>
</div>
      `,
    };
    await transporter.sendMail(mailOptions);
    console.log("success");
    return NextResponse.json(
      { message: "Enquiry successfully submitted" },
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

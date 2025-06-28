import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().min(3, "Required minimum of 3 characters"),
  email: z.string().email("Enter a valid email address"),
  query: z.string().min(10, "Enquiry must have atleast 10 characters"),
});

export default enquirySchema;

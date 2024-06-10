import * as z from "zod";

export const getQuoteSchema = z.object({
    firstName: z.string().min(1, "Please enter your first name"),
    lastName: z.string().min(1, "Please enter your last inkast Name"),
    email: z.string().email("Please enter a valid email").min(1, "Please enter email"),
    phone: z.string().min(1, "Please enter your phone Number"),
    services: z.enum(['Service Type 1', 'Service Type 2', 'Service Type 3'], { required_error: "Please select a service" }),
    NoOfServices: z.number({ invalid_type_error: "Please enter a valid number for No Of Services" }),
    comments: z.string().min(1, "Please Add Comments"),
});
export const getTouchSchema = z.object({
    fullName: z.string().min(1, "Please enter your first name"),
    email: z.string().email("Please enter a valid email").min(1, "Please enter email"),
    phone: z.string().min(1, "Please enter your phone Number"),
    message: z.string().min(1, "Please Add Comments"),
});

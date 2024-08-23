"use server";

import { redirect } from "next/navigation";
import { CompanyFields, ContactFields } from "@/store/signUpStore";

export const signUpAction = async (
  companyFormData: CompanyFields,
  contactFormData: ContactFields
) => {

  try {
  } catch (error) {
    return { message: "SignUp error" };
  }

  redirect("/login");
};

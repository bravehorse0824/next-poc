import { create } from "zustand";

export interface CompanyFields {
  searchCompanyName: string;
  searchVatCode: string;
  companyName: string;
  vatCode: string;
  website: string;
  companyAddress: string;
  companyCity: string;
  companyZip: string;
  companyCountry: string;
  companyRegion: string;
  companyProvince: string;
}

export interface ContactFields {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  mobilePhone: string;
  email: string;
  country: string;
  role: string;
}

interface FormStore {
  companyFormData: CompanyFields;
  contactFormData: ContactFields;
  companyFormErrors: Partial<CompanyFields>;
  contactFormErrors: Partial<ContactFields>;
  setCompanyFormData: (newData: Partial<CompanyFields>) => void;
  setContactFormData: (newData: Partial<ContactFields>) => void;
  setCompanyFormErrors: (newErrors: Partial<CompanyFields>) => void;
  setContactFormErrors: (newErrors: Partial<ContactFields>) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  companyFormData: {
    searchCompanyName: "",
    searchVatCode: "",
    companyName: "",
    vatCode: "",
    website: "",
    companyAddress: "",
    companyCity: "",
    companyZip: "",
    companyCountry: "",
    companyRegion: "",
    companyProvince: "",
  },
  contactFormData: {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    mobilePhone: "",
    email: "",
    country: "",
    role: "",
  },
  companyFormErrors: {},
  contactFormErrors: {},
  setCompanyFormData: (newData) =>
    set((state) => ({
      companyFormData: { ...state.companyFormData, ...newData },
    })),
  setContactFormData: (newData) =>
    set((state) => ({
      contactFormData: { ...state.contactFormData, ...newData },
    })),
  setCompanyFormErrors: (newErrors) =>
    set((state) => ({
      companyFormErrors: { ...state.companyFormErrors, ...newErrors },
    })),
  setContactFormErrors: (newErrors) =>
    set((state) => ({
      contactFormErrors: { ...state.contactFormErrors, ...newErrors },
    })),
}));

type TErrorSource = {
  path: string;
  message: string;
};

type TErrorDetails = {
  statusCode: number;
};

export type TErrorResponse = {
  success: boolean;
  message: string;
  errorSources: TErrorSource[];
  err: TErrorDetails;
  stack: string;
};

export type TError = {
  status: number;
  data: TErrorResponse;
};

type TUser = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  image: string | null;
};

type TBillingDetails = {
  name: string;
  companyName: string;
  street: string;
  country: string;
  states: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  _id: string;
};

export type TOrderData = {
  _id: string;
  id: string;
  user: TUser;
  totalAmount: number;
  status: string;
  paymentStatus: string;
  transactionId: string;
  billingDetails: TBillingDetails;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TCategory = {
  _id: string;
  name: string;
  banner: string;
  isDeleted: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
};

export type TProductsImage = {
  key: string;
  url: string;
  _id: string;
};

export type TProduct = {
  _id: string;
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  category: TCategory;
  images: TProductsImage[];
  stock: number;
  sales: number;
  size: string[]; // Assuming size is an array of strings
  discount: number;
  color: string[]; // Assuming color is an array of hex color strings
  avgRating: number;
  brand: string;
  isDeleted: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  averageRating: number;
  reviews: any[]; // Assuming reviews can be of any type; define more specifically if needed
};

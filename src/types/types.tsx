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

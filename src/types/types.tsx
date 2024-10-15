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

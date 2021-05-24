export type RequestLoading = boolean;
export type RequestError = boolean;
export type RequestSuccess = boolean;
export type RequestState = {
  loading: RequestLoading;
  error: RequestError;
  success: RequestSuccess;
};

export type RequestPathname = string;
export type RequestBody = object | null;

export type ApiBaseUrl = string;

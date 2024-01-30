import { toast } from "react-hot-toast";
import { getAuthFromLocalStorage } from "./localstorage-service";

export const errorHandler = (error) => {
  console.error(error);
  toast.error("Something Went Wrong, Try Later.");
};

export const DEFAULT_HEADERS = () => {
  const auth = getAuthFromLocalStorage();
  return { headers: { authorization: auth } };
};

export const delayResult = (callback,timer) => {
  setTimeout(() => {
    callback();
  }, timer);
};

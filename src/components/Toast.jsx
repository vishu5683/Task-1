import React from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Toast = () => {
  return <Toaster position="top-right" reverseOrder={false} />;
};

export const notifySuccess = (message) => {
  toast.success(message);
};

export const notifyError = (message) => {
  toast.error(message);
};

export default Toast;
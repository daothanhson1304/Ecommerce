import { isRejectedWithValue } from '@reduxjs/toolkit';

const rtkQueryErrorLogger = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // toast.error(formatErrorMessage(action.payload.data));
    console.error({ error: action.payload.data });
  }

  return next(action);
};
export default rtkQueryErrorLogger;

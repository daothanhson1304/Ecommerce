import classNames from 'classnames';
import { forwardRef } from 'react';

const TextInput = forwardRef(function MyInput(
  { className, label, labelClassName = '', ...props },
  ref
) {
  return (
    <label className={labelClassName}>
      {label}
      <input className={classNames('mt-3', className)} {...props} ref={ref} />
    </label>
  );
});

export default TextInput;

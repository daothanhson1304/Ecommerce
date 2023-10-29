import classNames from 'classnames';
import { forwardRef } from 'react';

const TextInput = forwardRef(function MyInput(
  { className, label, ...props },
  ref
) {
  return (
    <label>
      {label}
      <input className={classNames('mt-3', className)} {...props} ref={ref} />
    </label>
  );
});

export default TextInput;

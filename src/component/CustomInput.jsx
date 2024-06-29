/* eslint-disable react/prop-types */
import { useController } from "react-hook-form";

export const CustomInput = ({
  name,
  label,
  control,
  placeholder,
  type,
  rules,
  options,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div>
      <label htmlFor={name} className="text-black text-sm">
        {label}
      </label>

      {type === "select" ? (
        <select
          id={name}
          placeholder={placeholder}
          {...field}
          className={`border rounded-md  my-1 h-[43px] w-full !text-sm
           outline-none focus:outline-none px-4 ${
             error ? "border-red-500" : "border-black"
           }`}
        >
          {options?.map((option) => (
            <option key={option?.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...field}
          className={`border rounded-md  my-1 h-[43px] w-full !text-sm
           outline-none focus:outline-none px-4 ${
             error ? "border-red-500" : "border-black"
           }`}
        />
      )}

      {error && <p className="text-red-500 text-xs">{error.message}</p>}
    </div>
  );
};

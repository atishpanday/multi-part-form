import { UseFormRegister } from "react-hook-form";

import { FieldErrors } from "react-hook-form";

import { FieldValues } from "react-hook-form";

export interface InitialInformationProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  onNext: () => void;
  onPrevious: () => void;
  onSave: () => void;
}

export default function InitialInformation({
  register,
  errors,
  onNext,
  onPrevious,
  onSave,
}: InitialInformationProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl font-bold">Initial Information</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500">{errors.name.message as string}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message as string}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone">Phone</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          {...register("phone", { required: "Phone is required" })}
        />
        {errors.phone && (
          <p className="text-red-500">{errors.phone.message as string}</p>
        )}
      </div>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          type="button"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          type="button"
          onClick={onSave}
        >
          Save
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          type="button"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

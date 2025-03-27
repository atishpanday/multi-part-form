import { UseFormRegister } from "react-hook-form";
import { FieldErrors } from "react-hook-form";
import { FieldValues } from "react-hook-form";

export interface FinalInformationProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  onNext: () => void;
  onPrevious: () => void;
  onSave: () => void;
}

export default function FinalInformation({
  register,
  errors,
  onNext,
  onPrevious,
  onSave,
}: FinalInformationProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl font-bold">Final Information</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="company">Company</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          {...register("company")}
        />
        {errors.company && <p>{errors.company.message as string}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="jobTitle">Job Title</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          {...register("jobTitle")}
        />
        {errors.jobTitle && <p>{errors.jobTitle.message as string}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="department">Department</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          {...register("department")}
        />
        {errors.department && <p>{errors.department.message as string}</p>}
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

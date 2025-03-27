import { UseFormRegister } from "react-hook-form";
import { FieldErrors } from "react-hook-form";
import { FieldValues } from "react-hook-form";

export interface AdditionalInformationProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  onNext: () => void;
  onPrevious: () => void;
  onSave: () => void;
}

export default function AdditionalInformation({
  register,
  errors,
  onNext,
  onPrevious,
  onSave,
}: AdditionalInformationProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl font-bold">Additional Information</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="address">Address</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          {...register("address")}
        />
        {errors.address && <p>{errors.address.message as string}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="city">City</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          {...register("city")}
        />
        {errors.city && <p>{errors.city.message as string}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="state">State</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          {...register("state")}
        />
        {errors.state && <p>{errors.state.message as string}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="zip">ZIP Code</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          {...register("zip")}
        />
        {errors.zip && <p>{errors.zip.message as string}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="country">Country</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          {...register("country")}
        />
        {errors.country && <p>{errors.country.message as string}</p>}
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

import { FieldValues } from "react-hook-form";

export interface ReviewProps {
  formData: FieldValues;
  onPrevious: () => void;
}

export default function Review({ formData, onPrevious }: ReviewProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-2xl font-bold">Review Your Information</h1>

      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <p className="font-medium">Name:</p>
          <p>{formData.name}</p>
          <p className="font-medium">Email:</p>
          <p>{formData.email}</p>
          <p className="font-medium">Phone:</p>
          <p>{formData.phone}</p>
        </div>

        <h2 className="text-xl font-semibold mb-2">Address Information</h2>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <p className="font-medium">Address:</p>
          <p>{formData.address}</p>
          <p className="font-medium">City:</p>
          <p>{formData.city}</p>
          <p className="font-medium">State:</p>
          <p>{formData.state}</p>
          <p className="font-medium">ZIP Code:</p>
          <p>{formData.zip}</p>
          <p className="font-medium">Country:</p>
          <p>{formData.country}</p>
        </div>

        <h2 className="text-xl font-semibold mb-2">Professional Information</h2>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <p className="font-medium">Company:</p>
          <p>{formData.company}</p>
          <p className="font-medium">Job Title:</p>
          <p>{formData.jobTitle}</p>
          <p className="font-medium">Department:</p>
          <p>{formData.department}</p>
        </div>
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
          className="bg-green-500 text-white p-2 rounded-md cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

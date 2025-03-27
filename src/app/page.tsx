"use client";

import { useState } from "react";
import InitialInformation from "./_components/initial-information";
import AdditionalInformation from "./_components/additional-information";
import FinalInformation from "./_components/final-information";
import Review from "./_components/review";
import { FieldValues, useForm } from "react-hook-form";
import { onSubmit } from "./actions";

const getInitialFormData = () => {
  if (typeof window !== "undefined") {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      return JSON.parse(savedData);
    }
  }
  return {
    //step 0
    name: "",
    email: "",
    phone: "",

    //step 1
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",

    //step 2
    company: "",
    jobTitle: "",
    notes: "",
    additionalInformation: "",
  };
};

export default function Home() {
  const [step, setStep] = useState(0);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<FieldValues>({
    defaultValues: getInitialFormData(),
  });

  const saveToLocalStorage = (data: Partial<FieldValues>) => {
    localStorage.setItem("formData", JSON.stringify(data));
  };

  const handleNext = () => {
    // Wrap the next step logic in handleSubmit to ensure validation
    handleSubmit((data) => {
      setStep(step + 1);
      saveToLocalStorage(data);
    })();
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
      saveToLocalStorage(getValues());
    }
  };

  return (
    <div className="w-1/2 h-screen mx-auto my-4 p-4 shadow-md rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && (
          <InitialInformation
            register={register}
            errors={errors}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onSave={() => saveToLocalStorage(getValues())}
          />
        )}
        {step === 1 && (
          <AdditionalInformation
            register={register}
            errors={errors}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onSave={() => saveToLocalStorage(getValues())}
          />
        )}
        {step === 2 && (
          <FinalInformation
            register={register}
            errors={errors}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onSave={() => saveToLocalStorage(getValues())}
          />
        )}
        {step === 3 && (
          <Review formData={getValues()} onPrevious={handlePrevious} />
        )}
      </form>
    </div>
  );
}

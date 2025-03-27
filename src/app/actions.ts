"use server";

import { FieldValues } from "react-hook-form";

export async function onSubmit(data: FieldValues) {
  console.log(data);
}

import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
  };

  return NextResponse.json(data);
}

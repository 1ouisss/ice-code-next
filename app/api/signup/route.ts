import { NextResponse } from "next/server";

// POST method handler
export async function POST(req: Request) {
  try {
    const formData = await req.json(); // Parse incoming JSON data

    // Process formData (e.g., save to database)

    return NextResponse.json(
      { message: "Sign-up successful" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

// GET method handler (for unsupported methods)
export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}

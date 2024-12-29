import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const {
      userId,
      medications,
      allergies,
      height,
      weight,
      age,
      emergencyContacts,
    } = await req.json();

    if (!userId || !emergencyContacts || emergencyContacts.length < 2) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    user.questionnaire = {
      medications,
      allergies,
      height,
      weight,
      age,
      emergencyContacts,
    };
    await user.save();

    return NextResponse.json(
      { success: true, message: "Questionnaire saved" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

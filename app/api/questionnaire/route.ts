import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";

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
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 },
      );
    }

    const user = await User.findById(userId);
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
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

    return new Response(
      JSON.stringify({ success: true, message: "Questionnaire saved" }),
      { status: 200 },
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { userId, medications, allergies, height, weight, age, emergencyContacts } = await req.json();

    const user = await User.findById(userId);

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, error: 'User not found' }),
        { status: 404 }
      );
    }

    user.medications = medications;
    user.allergies = allergies;
    user.height = height;
    user.weight = weight;
    user.age = age;
    user.emergencyContacts = emergencyContacts;

    await user.save();

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

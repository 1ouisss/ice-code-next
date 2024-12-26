import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  try {
    await dbConnect();

    const { email, password } = await req.json();

    // Validate fields
    if (!email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Check questionnaire completion
    if (!user.hasCompletedQuestionnaire) {
      return NextResponse.json({ error: 'Please complete the questionnaire first', redirect: '/questionnaire' }, { status: 403 });
    }

    // Successful sign-in
    return NextResponse.json({ message: 'Sign In successful!', redirect: '/ma-fiche' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

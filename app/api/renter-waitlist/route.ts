import { NextRequest, NextResponse } from 'next/server';

// Mock database
let waitlist: string[] = [];

function isValidEmail(email: string) {
  return typeof email === 'string' && /\S+@\S+\.\S+/.test(email);
}

export async function GET(req: NextRequest) {
  return NextResponse.json(waitlist);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = body.email?.trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    if (waitlist.includes(email.toLowerCase())) {
      return NextResponse.json({ message: 'Email already registered' }, { status: 200 });
    }

    waitlist.push(email.toLowerCase());

    return NextResponse.json({ message: 'Successfully added to waitlist' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

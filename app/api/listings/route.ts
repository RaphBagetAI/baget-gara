import { NextRequest, NextResponse } from 'next/server';

// Mock database for demo purposes
interface Listing {
  id: string;
  ownerName: string;
  zipCode: string;
  dimensions: string;
  monthlyPrice: number;
  createdAt: string;
}

let listings: Listing[] = [];

// Generate a simple UUID (for demo, replace with better UUID in prod)
function generateId() {
  return Math.random().toString(36).substring(2, 10);
}

export async function GET(req: NextRequest) {
  return NextResponse.json(listings);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { ownerName, zipCode, dimensions, monthlyPrice } = body;

    // Validate input
    if (!ownerName || !zipCode || !dimensions || !monthlyPrice) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (typeof monthlyPrice !== 'number' || monthlyPrice < 1) {
      return NextResponse.json({ error: 'Invalid monthlyPrice' }, { status: 400 });
    }

    const newListing: Listing = {
      id: generateId(),
      ownerName: ownerName.trim(),
      zipCode: zipCode.trim(),
      dimensions: dimensions.trim(),
      monthlyPrice,
      createdAt: new Date().toISOString(),
    };
    listings.push(newListing);

    return NextResponse.json(newListing, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

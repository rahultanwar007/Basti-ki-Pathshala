import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Volunteer from "@/models/Volunteer";

// POST - Register a new volunteer
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, contactNo, address } = body;

    // Validate required fields
    if (!name || !email || !contactNo || !address) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate formats
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(contactNo)) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // THEN check for duplicates
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return NextResponse.json(
        { error: "Volunteer with this email already exists" },
        { status: 409 }
      );
    }

    // Create new volunteer
    const volunteer = new Volunteer({
      name,
      email,
      contactNo,
      address,
    });

    await volunteer.save();

    return NextResponse.json(
      { message: "Volunteer registered successfully", volunteer },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering volunteer:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET - Fetch all volunteers
export async function GET() {
  try {
    await connectDB();

    const volunteers = await Volunteer.find({}).sort({ createdAt: -1 });

    return NextResponse.json(volunteers);
  } catch (error) {
    console.error("Error fetching volunteers:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

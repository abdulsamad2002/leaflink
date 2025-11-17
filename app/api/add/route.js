import { NextResponse } from "next/server";
import User from "@/models/User";
import connector from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.email || !body.data) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields: email or data" },
        { status: 400 }
      );
    }

    const { email, data } = body;

    if (!data.siteName || !data.url) {
      return NextResponse.json(
        {
          ok: false,
          error: "Missing required fields in data: siteName or url",
        },
        { status: 400 }
      );
    }
    try {
      new URL(data.url);
    } catch {
      return NextResponse.json(
        { ok: false, error: "Invalid URL format" },
        { status: 400 }
      );
    }

    await connector();

    const result = await User.updateOne(
      { email },
      {
        $push: {
          links: {
            name: data.siteName,
            url: data.url,
          },
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { ok: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Link added successfully",
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const username = url.searchParams.get("username");

    if (!username) {
      return NextResponse.json(
        { success: false, error: "Username parameter is required" },
        { status: 400 }
      );
    }

    await connector();

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }
    const links = user.links || [];

    return NextResponse.json({
      success: true,
      links,
      username: user.username,
    });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

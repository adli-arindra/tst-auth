import { NextRequest, NextResponse } from "next/server";
require('dotenv').config()

export async function GET() {
    return NextResponse.json({
        "message": "The API is successfully called"
    })
}
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        "msg": "ini API nya make GET"
    })
}
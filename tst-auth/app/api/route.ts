
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        "msg": "ini API nya make GET"
    })
}

export async function POST(req: NextRequest){
    return NextResponse.json({
        "msg": "ini API nya make POST",
        "req": req.headers
    })
}
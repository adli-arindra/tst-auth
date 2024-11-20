import { NextRequest, NextResponse } from "next/server";
require('dotenv').config()

export async function GET() {
    return NextResponse.json({
        "msg": "ini API nya make GET"
    })
}

export async function POST(req: NextRequest){
    // const valid: boolean = (process.env.AUTH_KEY === req.headers.get("auth"));
    console.log(process.env.AUTH_KEY)
    const valid: boolean = (req.headers.get("auth") === "akucintaTST");
    const responseStatus: number = valid ? 200 : 401;
    const message: string = valid ? "API Berhasil dipanggil!" : "Autentikasi gagal (auth : akucintaTST)";


    return NextResponse.json({error: message }, { status: responseStatus });
}
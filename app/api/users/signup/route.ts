import clientPromise from "@/libs/mongodb";
import { createUserAndGenerateToken, findUserByEmail, getDbAndReqBody } from "@/libs/utils/api-routes";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
        const user = await findUserByEmail(db, reqBody.email);

        if(user){
            return NextResponse.json({
                warningMessage: "User already exists!"
            });
        }

        const tokens = await createUserAndGenerateToken(db, reqBody);

        return NextResponse.json(tokens);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
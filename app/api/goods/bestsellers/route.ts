import clientPromise from "@/libs/mongodb";
import { getDbAndReqBody, getNewAndBestsellerGoods } from "@/libs/utils/api-routes";
import { NextResponse } from "next/server";

export async function GET() {
    const { db } = await getDbAndReqBody(clientPromise, null);

    return NextResponse.json(await getNewAndBestsellerGoods(db, 'isBestseller'));
}
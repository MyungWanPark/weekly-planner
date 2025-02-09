import { getAllWeeklyPlan } from "@/service/weeklyPlan";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
    return getAllWeeklyPlan().then((data) => NextResponse.json(data));
}

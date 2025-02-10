import { getAllWeeklyPlan, getWeeklyPlanById } from "@/service/weeklyPlan";
import { NextRequest, NextResponse } from "next/server";

type Context = {
    params: {
        id: string;
    };
};

export async function GET(request: NextRequest, context: Context) {
    const { id } = await context.params;
    return getWeeklyPlanById(id).then((data) => NextResponse.json(data));
}

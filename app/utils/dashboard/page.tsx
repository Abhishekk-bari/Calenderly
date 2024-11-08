import { auth } from "@/app/utils/auth"
import { redirect } from "next/navigation";
import { requireUser } from "../hook";

export default async function DashboardPage() {
    const session = await requireUser();

    return(
        <div>
        <h1>Hello from Dashboard</h1></div>
    );
}
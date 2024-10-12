import { auth } from "@/app/utils/auth"
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await auth();

    if(!session?.user) {
        return redirect("/");
    }

    return(
        <div>
        <h1>Hello from Dashboard</h1></div>
    );
}
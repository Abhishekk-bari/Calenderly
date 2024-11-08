// ./app/actions/authActions.ts
"use server"; // This must be placed at the top of the file to ensure it's treated as a server action

import { signIn } from '../utils/auth';

export async function handleSignIn(formData: FormData) {
    try {
        await signIn("github"); // Make sure signIn is async and does not break the flow
    } catch (error) {
        console.error("Error during sign-in:", error); // Handle errors gracefully
        throw new Error("Sign-in failed");
    }
}

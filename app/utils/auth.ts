import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import prisma from "./db"
import { PrismaAdapter } from "@auth/prisma-adapter"


// import { MongoDBAdapter } from "@/auth/mongodb-adapter"



export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: MongoDBAdapter(client),
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, Google],
})
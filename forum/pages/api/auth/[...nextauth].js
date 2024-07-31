import { connectDB } from "@/utils/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth  from "next-auth";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    providers : [
        GithubProvider({
            clientId : "Ov23lis3W6kH93cTPKBW",
            clientSecret : "50fa73029971847cb031e1d0b2d8696c1926b3cb"
        }),
    ],
    secret : 'qwer1234'
};

export default NextAuth(authOptions);
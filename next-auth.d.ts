import NextAuth, { type DefaultSession } from "next-auth";
import { boolean } from "zod";

export type ExtendedUser = DefaultSession["user"] & {
  role: "ADMIN" | "USER";
  isTwoFactorEnabled: Boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

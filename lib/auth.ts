import {betterAuth} from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle";
import {db} from "@/db/drizzle";
import {schema} from "@/db/schema";
import {nextCookies} from "better-auth/next-js";
import {VerificationEmail} from "@/components/emails/verification-email";
import {Resend} from "resend";
import PasswordResetEmail from "@/components/emails/reset-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({user, url}) => {
      await resend.emails.send({
        from: '✨RichNote <richnote@bn000.shop>',
        to: [user.email],
        subject: '✨RichNote - Verify your email address',
        react: VerificationEmail({userName: user.name, verificationUrl: url}),
      });
    },
    sendOnSignUp: true,
  },
  emailAndPassword: {
    requireEmailVerification: true,
    enabled: true,
    sendResetPassword: async ({user, url}) => {
      await resend.emails.send({
        from: '✨RichNote <richnote@bn000.shop>',
        to: [user.email],
        subject: "✨RichNote - Reset your password",
        react: PasswordResetEmail({userName: user.name, resetUrl: url, requestTime: new Date().toLocaleString()}),
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema
  }),
  plugins: [nextCookies()]
});
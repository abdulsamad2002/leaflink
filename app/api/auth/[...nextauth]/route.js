import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/User";
import connector from "@/lib/mongodb";

await connector();

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "google") {
        const currentUser = await User.findOne({ email: user.email });
        console.log(user);
        if (!currentUser) {
          const newUser = new User({
            email: user.email,
            username: user.email.split("@")[0],
            name: user.name,
            image: user.image,
          });
          await newUser.save();
        }
        return true;
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      console.log();
      session.user.name = dbUser.name;
      return session;
    },
  },
});

export { handler as GET, handler as POST };

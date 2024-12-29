import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Configure NextAuth options
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace this with your real database call
        const user = { id: "1", name: "John Doe", email: "john@example.com" };

        if (
          credentials?.email === user.email &&
          credentials?.password === "password123"
        ) {
          return user; // Authentication successful
        }
        return null; // Authentication failed
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set in your .env file
};

// Export GET and POST methods for the API route
export async function GET(req: Request) {
  return NextAuth(authOptions)(req);
}

export async function POST(req: Request) {
  return NextAuth(authOptions)(req);
}

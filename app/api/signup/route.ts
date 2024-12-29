export async function POST(req: Request) {
    try {
      const formData = await req.json(); // Using req.json() to parse the body
      // Process formData and handle database insertion here
  
      return new Response(JSON.stringify({ message: "Sign-up successful" }), { status: 200 });
    } catch (error) {
      console.error(error); // Log the error for debugging
      return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
  }
  
  export async function GET() {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), { status: 405 });
  }
  
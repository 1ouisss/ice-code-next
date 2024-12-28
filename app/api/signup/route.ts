// pages/api/signUp.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const formData = req.body;
      // Process formData and handle database insertion here

      res.status(200).json({ message: "Sign-up successful" });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

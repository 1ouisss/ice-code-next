import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

const cached: {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
} = (
  global as {
    mongoose: {
      conn: mongoose.Connection | null;
      promise: Promise<mongoose.Connection> | null;
    };
  }
).mongoose || { conn: null, promise: null };

async function dbConnect(): Promise<mongoose.Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongoose) => mongoose.connection);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;

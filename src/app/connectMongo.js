import mongoose from 'mongoose';

const connectMongo = async () => {
  if (mongoose.connections[0].readyState) return;  // Skip if already connected
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export default connectMongo;

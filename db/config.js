import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://rajeshkumar:Techno@5821#@cluster0.yxxjj5z.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
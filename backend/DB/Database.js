import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = 'mongodb+srv://deepan:deepan@cluster.gacrs4m.mongodb.net/tracker';

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}

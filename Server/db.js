import mongoose from 'mongoose';

export const dbConnect = () => {
  mongoose.connect('mongodb+srv://agamarora456:FWnmm2iGHMYUoUFU@cluster0.pajsr.mongodb.net/')
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch((error) => {
      console.error("Error while connecting to the database", error);
    });
};

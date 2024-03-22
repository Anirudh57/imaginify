import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureURL: string;
    width?: number;  // Optional property
    height?: number;  // Optional property
    config?: object;  // Optional property
    transformationUrl?: string;  // Optional property
    aspectRatio?: string;  // Optional property
    color?: string;  // Optional property
    prompt?: string;  // Optional property
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    } // Assuming author reference is converted to a string ID
    createdAt?: Date;
    updatedAt?: Date;
  }
  

const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    secureURL: { type: String, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: String },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Image = models?.Image || model('image', ImageSchema);

export default Image;
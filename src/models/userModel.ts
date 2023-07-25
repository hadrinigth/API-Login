import { Schema, Model, model, connection} from "mongoose";
import { mongoConnect } from "../database/mongoDb";
mongoConnect();


type Usertype = {
    name: string,
    email: string,
    password: string
}

const userSchema = new Schema<Usertype>(
    {
    name: { type: String },
    email: { type: String },
    password: { type: String }
},
    { collection: 'users', }
);
const modelName: string = 'User';
export default connection && connection.models[modelName]
    ? (connection.models[modelName] as Model<Usertype>)
    : model<Usertype>(modelName, userSchema);
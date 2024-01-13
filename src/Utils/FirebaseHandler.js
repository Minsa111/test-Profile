import { db } from "./FirebaseConfig";
import {
    addDoc,
    collection,
} from "firebase/firestore";

    export const addMessage = async (
        name,
        message
    ) => {
    try {
        const messageCollection = collection(db, "message");

        const messageData = {
            name: name,
            message: message,
        };
    
        const docRef = await addDoc(messageCollection, messageData);
        console.log("Product added with ID:", docRef.id);
        messageData.id = docRef.id;
        return messageData;
    } catch (error) {
        console.error("Error adding product: ", error);
        return null;
    }
};
import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65206e7656862fcdd021");

export const account = new Account(client);

// database 
export const database = new Databases(client);

export default client;
export { ID } from 'appwrite';
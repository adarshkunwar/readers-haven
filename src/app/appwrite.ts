import { Client, Account } from "appwrite";

export const client = new Client();
client.setProject("672391e500137f4204e2");

export const account = new Account(client);
export { ID } from "appwrite";

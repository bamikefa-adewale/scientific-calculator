import { Account, Client, Databases, ID } from "appwrite";

const client = new Client()
  .setEndpoint(`https://cloud.appwrite.io/v1`)
  .setProject("67297c53000cebce0a4e"); // Replace with your project ID
const account = new Account(client);
const databases = new Databases(client);

export { client, databases, ID, account };

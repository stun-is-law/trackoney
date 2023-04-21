import { Client } from "pg";

import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  transactionTypes?: any;
  message?: string;
};

export default async function getAllTypes(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Only GET method is allowed" });
    res.end();
    return;
  }

  const dbClient = new Client({
    user: "postgres",
    host: "127.0.0.1",
    database: "trackoney",
    password: "1234",
    port: 5432,
  });
  
  console.log("=> Connecting to database...");
  
  dbClient
    .connect()
    .then(console.log("<= Connection succeded"))
    .catch((err: any) => console.log("<= Connection failed: " + err));
  
  const transactionTypes = await dbClient.query(`SELECT * FROM "transactionTypes"`)
    .then((res: any) => res.rows);

  res.status(200).json(transactionTypes);
}

import postgres from "postgres";

export async function GET(request: Request) {
  try {
    console.log("=> Connecting to database...");
    const sql = postgres("postgres://postgres:1234@127.0.0.1:5432/trackoney");
    console.log("<= Connected.");

    console.log("=> Fetching data...");
    const rawTypes = await sql`
      SELECT * FROM "transactionTypes"
    `;
    console.log("<= Fetched.");

    const types = rawTypes.map((row) => row.type);

    console.log("<= Returning data...");

    return new Response(JSON.stringify(types));
  } catch (err) {
    console.log("<= Connection failed: " + err);
    return new Response("Connection failed: " + err);
  }
}

import postgres from "postgres";

export async function GET(request: Request) {
  try {
    console.log("=> Connecting to database...");
    const sql = postgres("postgres://postgres:1234@127.0.0.1:5432/trackoney");
    console.log("<= Connected.");

    console.log("=> Fetching data...");
    const rawTransactions = await sql`
      SELECT tra.date, cat.name as "category" 
      FROM transactions tra
      INNER JOIN categories cat ON tra.category = cat.id
      ORDER BY date DESC 
    `;
    console.log("<= Fetched.");

    const transactions = rawTransactions.map((row) => row);

    console.log("<= Returning data...");

    return new Response(JSON.stringify(transactions));
  } catch (err) {
    console.log("<= Connection failed: " + err);
    return new Response("Connection failed: " + err);
  }
}

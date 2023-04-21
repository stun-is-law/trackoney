import postgres from "postgres";

export async function GET(request: Request) {
  try {
    console.log("=> Connecting to database...");
    const sql = postgres("postgres://postgres:1234@127.0.0.1:5432/trackoney");
    console.log("<= Connected.");

    console.log("=> Fetching data...");
    const categories = await sql`
      SELECT * FROM categories
    `.then((rows) => rows.map((row) => ({
        id: row.id,
        name: row.name
    })));
    console.log("<= Fetched.");

    return new Response(JSON.stringify(categories));
  } catch (err) {
    console.log("<= Connection failed: " + err);
    return new Response("Connection failed: " + err);
  }
}

import { getEntry } from "astro:content";

export async function GET({ params }) {
  const slug = params.day;

  const currentDate = new Date();

  const dayEntry = await getEntry("days", slug);

  if (!dayEntry) {
    return new Response(
      JSON.stringify({
        status: 404,
        text: "Not Found",
      }),
      { status: 404 },
    );
  }

  const dayNumber = Number(slug);
  if (currentDate.getDate() >= dayNumber) {
    return new Response(
      JSON.stringify({
        status: 200,
        text: dayEntry.body,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } else {
    return new Response(
      JSON.stringify({
        status: 401,
        text: "Unauthorized",
      }),
      { status: 401, headers: { "Content-Type": "application/json" } },
    );
  }
}

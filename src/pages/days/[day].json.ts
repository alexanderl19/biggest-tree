import type { APIRoute } from "astro";
import { getEntry } from "astro:content";

export const GET: APIRoute = async ({ params }) => {
  const day = params.day;

  const currentDate = new Date();

  const dayEntry = await getEntry("days", day);

  if (!dayEntry) {
    return new Response(
      JSON.stringify({
        status: 404,
        text: "Not Found",
      }),
      { status: 404 },
    );
  }

  const dayNumber = Number(day);
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
};

import type { APIRoute } from 'astro';
import { getEntry, getCollection } from "astro:content";

export async function getStaticPaths() {
  const days = await getCollection("blog");
  return days.map((day) => ({
    params: { day: day.slug },
  }));
}


export const GET: APIRoute = async ({ params }) => {
  const slug = params.day;
  
console.log(params)

const day = await getEntry("blog", slug);
console.log(day)
  return new Response(
    JSON.stringify({
      text: day?.body
    })
  )
}

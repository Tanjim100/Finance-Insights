import { supabase } from "../lib/supabase";



export async function getPublishedPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select(`
      *,
      categories (
        id,
        name,
        slug
      ),
      post_tags (
        tags (
          id,
          name,
          slug
        )
      )
    `)
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error) throw error;
  return data;
}

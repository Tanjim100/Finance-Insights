import { supabase } from "../lib/supabase";


export async function getPublishedResources() {
    const { data, error } = await supabase
      .from("resources")
      .select(
        `
        *,
        categories (
          id,
          name,
          slug
        ),
        resource_tags (
          tags (
            id,
            name,
            slug
          )
        )
      `
      )
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  }

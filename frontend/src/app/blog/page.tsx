import { redirect } from "next/navigation";

/**
 * Blog Listing Route Redirect.
 *
 * Redirects visitor traffic from standalone /blog URL to the root landing page where the
 * interactive categorized BlogSection is positioned, maintaining a cohesive single-page flow.
 */
export default function BlogListingPage() {
  redirect("/");
}

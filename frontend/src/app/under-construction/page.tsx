import { redirect } from "next/navigation";

/**
 * Staging / Under Construction Route Redirect.
 *
 * Directs visitors inquiring about in-progress preview builds to the primary interactive staging
 * sandbox ('skycast-weather') with live simulated components.
 */
export default function UnderConstructionIndexPage() {
  redirect("/preview/skycast-weather");
}

import { redirect } from "next/navigation";

/**
 * Project Live Preview Root Route Redirect.
 *
 * Automatically forwards direct visitors to the featured interactive project preview
 * ('skycast-weather') showcasing live browser simulation and telemetry.
 */
export default function PreviewIndexPage() {
  redirect("/preview/skycast-weather");
}

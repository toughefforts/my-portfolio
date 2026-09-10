import type { ContactFormData, APIResponse } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/**
 * Submits the contact inquiry form data to either the configured FastAPI backend
 * or the Next.js internal edge API proxy endpoint.
 *
 * @param data Name, email, and message fields submitted by the user.
 * @returns Standardized APIResponse with status and user-facing message.
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<APIResponse> {
  const endpoint = process.env.NEXT_PUBLIC_API_URL 
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact` 
    : "/api/contact";


  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);

    if (response.status === 422) {
      return {
        success: false,
        message:
          errorData?.detail?.[0]?.msg ||
          "Please check your input and try again.",
      };
    }

    return {
      success: false,
      message:
        errorData?.detail || "Something went wrong. Please try again later.",
    };
  }

  return response.json();
}

export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    const data = await response.json();
    return data.status === "healthy";
  } catch {
    return false;
  }
}

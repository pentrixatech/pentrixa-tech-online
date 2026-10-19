
const RECIPIENT_EMAIL = "pentrixatech@gmail.com";

export async function submitProjectInquiry(formData) {
  try {
    const response = await fetch("/api/send-inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Unable to send your inquiry right now."
      );
    }

    return {
      success: true,
      message: result.message ||
        "Your inquiry has been received. A co-founder will contact you shortly."
    };
  } catch (error) {
    return {
      success: false,
      fallbackMailto: generateFallbackMailto(formData),
      error: error.message ||
        "Unable to submit online. Please use the direct email link below."
    };
  }
}

function generateFallbackMailto(data) {
  const subject = encodeURIComponent(
    `Project Inquiry from ${data.name} [${data.service}]`
  );

  const body = encodeURIComponent(
`PENTRIXA TECH - PROJECT INQUIRY

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "N/A"}
Company: ${data.company || "N/A"}
Service: ${data.service}
Budget: ${data.budget}

Project Details:
${data.message}
`
  );

  return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
}

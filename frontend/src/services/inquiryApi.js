/**
 * Pentrixa Tech - Client Inquiry Service
 * Delivers clean, structured inquiries directly to pentrixatech@gmail.com
 */

const RECIPIENT_EMAIL = "pentrixatech@gmail.com";

export async function submitProjectInquiry(formData) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "9e595bb2-4a3e-4f25-914c-0f0cc9a3c2f6";

  // Clean, structured key-value payload
  // Web3Forms formats every custom key cleanly into your notification email.
  const payload = {
    access_key: accessKey,
    subject: `[PENTRIXA TECH] Inquiry: ${formData.service} — ${formData.name}`,
    from_name: "Pentrixa Tech Web Portal",
    
    // Core Client Info
    "Client Name": formData.name,
    "Official Email": formData.email,
    "Phone / WhatsApp": formData.phone || "Not provided",
    "Company / Venture": formData.company || "Not specified",
    
    // Project Specifications
    "Service Requested": formData.service,
    "Estimated Budget": formData.budget,
    "Project Requirements": formData.message,

    // Metadata & Quick Actions
    "Submitted On": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " (IST)",
    "WhatsApp Quick Chat": formData.phone 
      ? `https://wa.me/${formData.phone.replace(/[^0-9]/g, "")}` 
      : "No phone provided",

    replyto: formData.email
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.success) {
      return { 
        success: true, 
        message: "Your inquiry has been received. A co-founder will contact you shortly." 
      };
    } else {
      throw new Error(result.message || "Email service rejected the transmission.");
    }
  } catch (error) {
    return {
      success: false,
      fallbackMailto: generateFallbackMailto(formData),
      error: error.message || "Failed to submit online. Please use the direct email link below."
    };
  }
}

function generateFallbackMailto(data) {
  const subject = encodeURIComponent(`Project Inquiry from ${data.name} [${data.service}]`);
  const body = encodeURIComponent(
`PENTRIXA TECH - PROJECT INQUIRY

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Company: ${data.company || 'N/A'}
Service: ${data.service}
Budget: ${data.budget}

Project Details:
${data.message}
`
  );
  return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
}
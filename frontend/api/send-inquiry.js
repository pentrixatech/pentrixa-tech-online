
import nodemailer from "nodemailer";

const allowedServices = [
  "Web Development",
  "Custom Software",
  "Mobile App",
  "AI & Machine Learning",
  "Data Analytics & BI",
  "Business Automation",
  "Other"
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const { name, email, phone, company, service, budget, message } = req.body || {};

  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof service !== "string" || !allowedServices.includes(service) ||
    typeof message !== "string" || !message.trim()
  ) {
    return res.status(400).json({ success: false, message: "Please provide valid required fields." });
  }

  if (
    name.length > 150 || email.length > 254 ||
    (phone && (typeof phone !== "string" || phone.length > 40)) ||
    (company && (typeof company !== "string" || company.length > 200)) ||
    (budget && (typeof budget !== "string" || budget.length > 100)) ||
    message.length > 5000
  ) {
    return res.status(400).json({ success: false, message: "Some fields are too long." });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, INQUIRY_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !INQUIRY_TO_EMAIL) {
    return res.status(500).json({ success: false, message: "Email service is not configured yet." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    });

    await transporter.sendMail({
      from: `"Pentrixa Tech Website" <${SMTP_USER}>`,
      to: INQUIRY_TO_EMAIL,
      replyTo: email,
      subject: `[PENTRIXA TECH] Inquiry: ${service} - ${name.trim()}`,
      text: [
        "New project inquiry from the Pentrixa Tech website",
        "",
        `Name: ${name.trim()}`,
        `Email: ${email}`,
        `Phone / WhatsApp: ${phone || "Not provided"}`,
        `Company: ${company || "Not specified"}`,
        `Service: ${service}`,
        `Budget: ${budget || "Not specified"}`,
        "",
        "Project requirements:",
        message.trim(),
        "",
        `Submitted at: ${new Date().toISOString()}`
      ].join("\n")
    });

    return res.status(200).json({
      success: true,
      message: "Your inquiry has been received. A co-founder will contact you shortly."
    });
  } catch (error) {
    console.error("Inquiry email failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "We couldn't send your inquiry right now. Please try again or contact us directly."
    });
  }
}

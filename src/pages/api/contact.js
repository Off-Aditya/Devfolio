export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ error: "Method not allowed" });
    }

    const payload = req.body || {};
    const name = String(payload.name || "").trim();
    const email = String(payload.email || "").trim();
    const subject = String(payload.subject || "").trim();
    const message = String(payload.message || "").trim();

    // Validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
    }

    if (name.length > 120 || subject.length > 200 || message.length > 5000) {
        return res.status(400).json({ error: "Input exceeds allowed length" });
    }

    try {
        console.log("Contact form submission:", {
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString(),
        });

        return res.status(200).json({
            success: true,
            message: "Message received successfully",
        });
    } catch (error) {
        console.error("Error processing contact form:", error);
        return res.status(500).json({ error: "Failed to process request" });
    }
}

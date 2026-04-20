const RESEND_API_URL = 'https://api.resend.com/emails';

const FORM_CONFIG = {
  contact: {
    to: 'michael@apps1llc.com',
    apiKey: 're_PNgE3rWA_GoKe8V7qfKzrVbZC9geD8Gti',
    requirePhone: true,
    subjectPrefix: 'Apps 1 Contact Form'
  },
  investor: {
    to: 'michael@privacykeeper.pro',
    apiKey: 're_AF4YABDA_DnRrmkzsAgFXYkwQ6xEuyZqC',
    requirePhone: false,
    subjectPrefix: 'Apps 1 Investor Inquiry'
  }
};

function normalizeBody(body) {
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body;
}

function clean(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = normalizeBody(req.body);
  const formType = clean(body.formType);
  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const message = clean(body.message);

  const config = FORM_CONFIG[formType];
  if (!config) {
    return res.status(400).json({ error: 'Invalid form type' });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  if (config.requirePhone && !phone) {
    return res.status(400).json({ error: 'Phone is required for contact form' });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || 'Not provided');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

  const emailPayload = {
    from: 'Apps 1 LLC <onboarding@resend.dev>',
    to: [config.to],
    reply_to: email,
    subject: `${config.subjectPrefix}: ${name}`,
    html: `
      <h2>${config.subjectPrefix}</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${formType === 'contact' ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
      <p><strong>Message:</strong><br/>${safeMessage}</p>
    `,
    text:
      `Form: ${formType}\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `${formType === 'contact' ? `Phone: ${phone || 'Not provided'}\n` : ''}` +
      `Message:\n${message}`
  };

  try {
    const resendResponse = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error('Resend API error:', errorBody);
      return res.status(502).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send failure:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

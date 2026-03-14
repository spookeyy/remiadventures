import { Resend } from 'resend';

type RequestBody = {
  type: 'booking' | 'quote';
  tourTitle: string;
  price: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    date: string;
    guests: string;
  };
  details?: {
    paymentType?: string;
    specialRequests?: string;
    additionalInfo?: string;
  };
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const buildHtml = (payload: RequestBody) => {
  const { type, tourTitle, price, customer, details } = payload;
  const headline = type === 'booking' ? 'New Booking Request' : 'New Quote Request';
  const extraRows = [
    details?.paymentType ? ['Payment Option', details.paymentType] : null,
    details?.specialRequests ? ['Special Requests', details.specialRequests] : null,
    details?.additionalInfo ? ['Additional Information', details.additionalInfo] : null,
  ].filter(Boolean) as [string, string][];

  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1f2937;">
      <h2 style="margin: 0 0 12px;">${headline}</h2>
      <p style="margin: 0 0 16px;">A customer submitted a ${type} request via the Remi Adventures website.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600;">Tour</td>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(tourTitle)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600;">Base Price</td>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(price)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600;">Name</td>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(customer.name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600;">Email</td>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(customer.email)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600;">Phone</td>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(customer.phone)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600;">Preferred Date</td>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(customer.date)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600;">Guests</td>
          <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(customer.guests)}</td>
        </tr>
        ${extraRows
          .map(
            ([label, value]) => `
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600;">${escapeHtml(label)}</td>
              <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(value)}</td>
            </tr>
          `,
          )
          .join('')}
      </table>
    </div>
  `;
};

const buildText = (payload: RequestBody) => {
  const { type, tourTitle, price, customer, details } = payload;
  const headline = type === 'booking' ? 'NEW BOOKING REQUEST' : 'NEW QUOTE REQUEST';
  const extras = [
    details?.paymentType ? `Payment Option: ${details.paymentType}` : null,
    details?.specialRequests ? `Special Requests: ${details.specialRequests}` : null,
    details?.additionalInfo ? `Additional Information: ${details.additionalInfo}` : null,
  ].filter(Boolean);

  return [
    headline,
    '',
    `Tour: ${tourTitle}`,
    `Base Price: ${price}`,
    '',
    `Name: ${customer.name}`,
    `Email: ${customer.email}`,
    `Phone: ${customer.phone}`,
    `Preferred Date: ${customer.date}`,
    `Guests: ${customer.guests}`,
    '',
    ...extras,
  ]
    .filter(Boolean)
    .join('\n');
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Missing RESEND_API_KEY' });
    return;
  }

  const fromAddress = process.env.RESEND_FROM_EMAIL || 'Remi Adventures <onboarding@resend.dev>';
  const toAddress = process.env.RESEND_TO_EMAIL || 'reservation.remiadventures@gmail.com';

  const payload: RequestBody =
    typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

  if (!payload?.tourTitle || !payload?.price || !payload?.customer?.email) {
    res.status(400).json({ error: 'Invalid payload' });
    return;
  }

  const resend = new Resend(apiKey);
  const subject =
    payload.type === 'booking'
      ? `Booking Request: ${payload.tourTitle}`
      : `Quote Request: ${payload.tourTitle}`;

  try {
    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      reply_to: payload.customer.email,
      subject,
      html: buildHtml(payload),
      text: buildText(payload),
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
}

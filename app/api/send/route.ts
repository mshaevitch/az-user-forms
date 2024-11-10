import { EmailTemplate } from '@/app/email/template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    if (!process.env.RESEND_RECIPIENT) {
        return Response.json(
            { error: 'RESEND_RECIPIENT environment variable is not set' }, 
            { status: 500 }
        );
    }
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.RESEND_RECIPIENT],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

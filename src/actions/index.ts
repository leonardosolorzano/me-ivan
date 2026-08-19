import { defineAction, ActionError } from 'astro:actions';
import { z } from 'zod';

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().trim().min(2, 'Escribe tu nombre'),
      email: z.email('Escribe un email válido'),
      service: z.string().min(1, 'Selecciona un servicio'),
      message: z.string().trim().min(10, 'Cuéntanos un poco más (mínimo 10 caracteres)'),
      website: z.string().optional(),
    }),
    handler: async (input) => {
      if (input.website) {
        throw new ActionError({ code: 'BAD_REQUEST', message: 'Mensaje descartado' });
      }

      const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

      if (!webhookUrl) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message:
            'El formulario aún no está conectado. Define la variable CONTACT_WEBHOOK_URL con la URL de un servicio de email (Formspree, Resend, Make, etc.) para recibir los mensajes.',
        });
      }

      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: input.name,
            email: input.email,
            service: input.service,
            message: input.message,
          }),
        });

        if (!response.ok) {
          throw new Error(`Webhook responded with ${response.status}`);
        }

        return { ok: true };
      } catch (error) {
        console.error('[contact] failed to send message:', error);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'No pudimos enviar tu mensaje. Inténtalo de nuevo en unos minutos.',
        });
      }
    },
  }),
};

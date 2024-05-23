'use client';

import { useForm, useFormState } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Loader2 } from 'lucide-react';
import { sendMail } from '@/lib/services';
import { useToast } from './ui/use-toast';
import { useTranslations } from 'next-intl';

const ContactFormSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Your name is required' })
      .min(2, { message: 'Your name must be at least 2 characters' })
      .max(50, { message: 'Your name must be at most 50 characters' }),
    email: z
      .string()
      .min(1, { message: 'You email is required' })
      .email({ message: 'Please enter a valid email address' }),
    message: z
      .string()
      .min(1, { message: 'Your message is required' })
      .max(500, { message: 'Your message must be at most 500 characters' }),
  })
  .required();

export default function Contact() {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const t = useTranslations('Contact');

  const { toast } = useToast();

  const messageValue = form.watch('message');
  const messageLength = 500;
  const charactersLeft = messageLength - messageValue.length;

  async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    await sendMail(values);
    toast({
      title: 'Message sent',
      description: 'Thank you for reaching out. I will get back to you soon.',
    });
    form.reset();
  }

  return (
    <section className="mx-4 mt-16 min-h-[calc(100vh-64px)] max-w-[340px] md:max-w-[460px]">
      <h2 className="mb-4 scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl">
        {t('h2')}
      </h2>
      <p className="mb-12 text-center text-muted-foreground">{t('p1')}</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t('Item1.label')} <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder={t('Item1.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t('Item2.label')} <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t('Item2.placeholder')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t('Item3.label')} <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    maxLength={500}
                    placeholder={t('Item3.placeholder')}
                    className="h-[200px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-end">
                  {charactersLeft}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton />
        </form>
      </Form>
    </section>
  );
}

function SubmitButton() {
  const { isSubmitting } = useFormState();
  const t = useTranslations('Contact');

  return (
    <Button className="bg-active" type="submit" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 size-6 animate-spin" />
          {t('button1')}
        </>
      ) : (
        t('button1')
      )}
    </Button>
  );
}

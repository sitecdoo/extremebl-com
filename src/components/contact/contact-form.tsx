"use client";

import React from "react";
import { ContactPayload, getContactSchema } from "./contact.schemas";
import Typography from "../custom-ui/typography";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { sendEmailAction } from "./contact.actions";
import { toast } from "@/utils/toast";
import { useChallenge } from "@/lib/hooks/use-challenge";
import AltchaWidget from "../custom-ui/altcha-widget";

const ContactForm = () => {
  const { isVerifying, getSolution } = useChallenge();

  const formSchema = getContactSchema();

  const form = useForm<ContactPayload>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const errors = form.formState.errors;

  const handleSubmit = async (data: ContactPayload) => {
    const altchaPayload = await getSolution();

    if (!altchaPayload) {
      toast.error({ title: "Captcha verification failed" });
      return;
    }

    const result = await sendEmailAction(data, altchaPayload);

    if (result?.success) {
      form.reset();
      toast.success({ title: "Email sent successfully" });
      return;
    }

    toast.error({ title: "Something went wrong" });
  };

  const { isSubmitting } = form.formState;

  return (
    <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-12 lg:px-12 xl:gap-20 xl:px-20 2xl:px-36">
      <Typography variant="h2" tag="h2" fontWeight="bold" className="w-fit">
        Napiši nam poruku
      </Typography>
      <Form {...form}>
        <form
          className="w-full max-w-3xl space-y-6 lg:space-y-4"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    error={errors.name}
                    placeholder="Ime i prezime*"
                    {...field}
                  />
                </FormControl>

                {errors.name ? <FormMessage /> : <FormDescription />}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    error={errors.email}
                    placeholder="E-mail*"
                    {...field}
                  />
                </FormControl>

                {errors.email ? <FormMessage /> : <FormDescription />}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    disabled={isSubmitting}
                    error={errors.message}
                    placeholder="Poruka*"
                    {...field}
                  />
                </FormControl>

                {errors.message ? <FormMessage /> : <FormDescription />}
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end">
            <AltchaWidget isVerifying={isVerifying}>
              <Button
                variant="blue"
                type="submit"
                className="lg:mt-4"
                disabled={isSubmitting || isVerifying}
              >
                <Typography fontWeight="bold" tag="span">
                  Pošalji upit
                </Typography>
              </Button>
            </AltchaWidget>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;

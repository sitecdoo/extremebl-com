"use client";

import { useEffect } from "react";
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
import { useSearchParams } from "next/navigation";
import { Dictionary } from "@/utils/dictionary";

const ContactForm = ({ dict }: { dict: Dictionary["contact"] }) => {
  const { isVerifying, getSolution } = useChallenge();

  const subject = useSearchParams().get("subject");

  const formSchema = getContactSchema();

  const form = useForm<ContactPayload>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      subject: subject ?? undefined,
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (subject) {
      const formElement = document.getElementById("form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [subject]);

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
    <div
      className="flex w-full scroll-mt-20 flex-col items-center gap-6 lg:scroll-mt-40 lg:flex-row lg:items-start lg:gap-12 lg:px-12 xl:gap-20 xl:px-20 2xl:px-36"
      id="form"
    >
      <Typography variant="h2" tag="h2" fontWeight="bold" className="w-fit">
        {dict.formTitle}
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
                    variant="form"
                    inputSize="lg"
                    error={errors.name}
                    placeholder={dict.name}
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
                    variant="form"
                    inputSize="lg"
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="tel"
                    disabled={isSubmitting}
                    variant="form"
                    inputSize="lg"
                    error={errors.phone}
                    placeholder={dict.phoneNumber}
                    {...field}
                  />
                </FormControl>

                {errors.phone ? <FormMessage /> : <FormDescription />}
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
                    placeholder={dict.message}
                    style={{ resize: "none" }}
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
                  {dict.send}
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

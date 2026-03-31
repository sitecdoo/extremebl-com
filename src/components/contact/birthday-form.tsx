"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, CalendarDays } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ScrollArea } from "../ui/scroll-area";
import { BirthdayPayload, getBirthdaySchema } from "./birthday.schemas";
import Typography from "../custom-ui/typography";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
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
import { sendBirthdayEmailAction } from "./birthday.actions";
import { toast } from "@/utils/toast";
import { useChallenge } from "@/lib/hooks/use-challenge";
import AltchaWidget from "../custom-ui/altcha-widget";
import { Dictionary } from "@/utils/dictionary";

type BirthdayFormProps = {
  dict: Dictionary["birthdayForm"];
  selectedPackage: "1" | "2" | "3";
  onSuccess?: () => void;
};

const BirthdayForm = ({
  dict,
  selectedPackage,
  onSuccess,
}: BirthdayFormProps) => {
  const { isVerifying, getSolution } = useChallenge();
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const formSchema = getBirthdaySchema(dict.errors);

  const form = useForm<BirthdayPayload>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      package: selectedPackage,
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      licensePlate: "",
      childrenAge: "",
    },
  });

  useEffect(() => {
    form.setValue("package", selectedPackage);
  }, [selectedPackage, form]);

  useEffect(() => {
    const timer = setTimeout(() => {
      nameInputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const errors = form.formState.errors;
  const _now = new Date();
  const today = `${_now.getFullYear()}-${String(_now.getMonth() + 1).padStart(2, "0")}-${String(_now.getDate()).padStart(2, "0")}`;

  const handleSubmit = async (data: BirthdayPayload) => {
    try {
      const altchaPayload = await getSolution();

      if (!altchaPayload) {
        toast.error({ title: dict.errorTitle });
        return;
      }

      const result = await sendBirthdayEmailAction(data, altchaPayload);

      if (result?.success) {
        form.reset();
        toast.success({
          title: dict.successTitle,
        });
        onSuccess?.();
        return;
      }

      toast.error({ title: dict.errorTitle });
    } catch {
      toast.error({ title: dict.errorTitle });
    }
  };

  const { isSubmitting } = form.formState;

  const watchedPackage = form.watch("package");
  const packageDurationMinutes = watchedPackage === "1" ? 120 : 150;

  useEffect(() => {
    const currentTime = form.getValues("time");
    if (!currentTime) return;

    const startStr = currentTime.split(" - ")[0];
    const [startHour, startMin] = startStr.split(":").map(Number);
    const startTotal = startHour * 60 + startMin;
    const endTotal = startTotal + packageDurationMinutes;

    if (endTotal > 22 * 60) {
      form.resetField("time");
      return;
    }

    const endHour = Math.floor(endTotal / 60);
    const endMins = endTotal % 60;
    const endStr = `${String(endHour).padStart(2, "0")}:${String(endMins).padStart(2, "0")}`;
    form.setValue("time", `${startStr} - ${endStr}`);
  }, [watchedPackage, packageDurationMinutes, form]);

  const packages = [
    { value: "1", label: dict.packageOne },
    { value: "2", label: dict.packageTwo },
    { value: "3", label: dict.packageThree },
  ];

  return (
    <Form {...form}>
      <form
        className="space-y-5 px-1 lg:space-y-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="package"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-col gap-3 py-2">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.value}
                      className="flex cursor-pointer items-center gap-3"
                    >
                      <input
                        type="radio"
                        value={pkg.value}
                        checked={field.value === pkg.value}
                        onChange={field.onChange}
                        disabled={isSubmitting}
                        className="size-5 accent-[#517B83]"
                      />
                      <Typography variant="body-sm">{pkg.label}</Typography>
                    </label>
                  ))}
                </div>
              </FormControl>
              {errors.package ? <FormMessage /> : <FormDescription />}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  ref={(e) => {
                    field.ref(e);
                    nameInputRef.current = e;
                  }}
                  disabled={isSubmitting}
                  variant="form"
                  inputSize="lg"
                  error={errors.name}
                  placeholder={dict.name}
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
                  placeholder={dict.email}
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
                  placeholder={dict.phone}
                  {...field}
                />
              </FormControl>
              {errors.phone ? <FormMessage /> : <FormDescription />}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    type="date"
                    disabled={isSubmitting}
                    variant="form"
                    inputSize="lg"
                    error={errors.date}
                    min={today}
                    className={cn(
                      "cursor-pointer pr-12 lg:pr-14 [&::-webkit-calendar-picker-indicator]:hidden",
                      !field.value
                        ? "[&::-webkit-datetime-edit]:opacity-0"
                        : "",
                    )}
                    onClick={(e) => {
                      if (!isSubmitting) e.currentTarget.showPicker?.();
                    }}
                    {...field}
                  />
                  {!field.value && (
                    <span className="pointer-events-none absolute inset-y-0 left-1 right-12 flex items-center font-open-sans text-base text-neutrals-500 lg:left-6 lg:text-xl lg:leading-8">
                      {dict.date}
                    </span>
                  )}
                  <CalendarDays
                    className={cn(
                      "pointer-events-none absolute right-3 top-1/2 size-6 -translate-y-1/2 lg:right-6",
                      field.value ? "text-foreground" : "text-neutrals-400",
                    )}
                  />
                </div>
              </FormControl>
              {errors.date ? <FormMessage /> : <FormDescription />}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <DropdownMenu
                  onOpenChange={(open) => {
                    if (!open) field.onBlur();
                  }}
                >
                  <DropdownMenuTrigger asChild disabled={isSubmitting}>
                    <button
                      type="button"
                      disabled={isSubmitting}
                      className={cn(
                        "flex h-16 w-full items-center border-b-2 border-neutrals-100 bg-transparent px-1 font-open-sans text-base outline-none disabled:cursor-not-allowed disabled:opacity-50 lg:h-[4.375rem] lg:px-6 lg:text-xl lg:leading-8",
                        errors.time ? "border-red-500" : "",
                        !field.value ? "text-neutrals-500" : "text-foreground",
                      )}
                    >
                      <span className="flex-1 text-left">
                        {field.value || dict.time}
                      </span>
                      <ChevronDown
                        className={cn(
                          "size-6 shrink-0",
                          field.value ? "text-foreground" : "text-neutrals-500",
                        )}
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[var(--radix-dropdown-menu-trigger-width)] rounded-xl border border-neutrals-100 bg-white p-2 shadow-lg"
                    align="start"
                    sideOffset={4}
                  >
                    <ScrollArea className="h-56">
                      {Array.from({ length: 28 }, (_, i) => {
                        const startHour = Math.floor(i / 2) + 9;
                        const startMins = i % 2 === 0 ? 0 : 30;
                        const startTotal = startHour * 60 + startMins;
                        const endTotal = startTotal + packageDurationMinutes;
                        if (endTotal > 22 * 60) return null;
                        const endHour = Math.floor(endTotal / 60);
                        const endMins = endTotal % 60;
                        const startStr = `${String(startHour).padStart(2, "0")}:${String(startMins).padStart(2, "0")}`;
                        const endStr = `${String(endHour).padStart(2, "0")}:${String(endMins).padStart(2, "0")}`;
                        const value = `${startStr} - ${endStr}`;
                        return (
                          <DropdownMenuItem
                            key={startStr}
                            onSelect={() => field.onChange(value)}
                            className={cn(
                              "cursor-pointer rounded-lg px-4 py-2.5 font-open-sans text-base text-foreground focus:bg-neutrals-50 focus:text-foreground lg:text-lg",
                              field.value === value &&
                                "bg-neutrals-100 font-medium",
                            )}
                          >
                            {value}
                          </DropdownMenuItem>
                        );
                      })}
                    </ScrollArea>
                  </DropdownMenuContent>
                </DropdownMenu>
              </FormControl>
              {errors.time ? <FormMessage /> : <FormDescription />}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="licensePlate"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  variant="form"
                  inputSize="lg"
                  error={errors.licensePlate}
                  placeholder={dict.licensePlate}
                  {...field}
                />
              </FormControl>
              <Typography
                variant="caption"
                className="px-1 pt-1 text-neutrals-400 lg:px-6"
              >
                {dict.licensePlateNote}
              </Typography>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="childrenAge"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  variant="form"
                  inputSize="lg"
                  error={errors.childrenAge}
                  placeholder={dict.childrenAge}
                  {...field}
                />
              </FormControl>
              {errors.childrenAge && <FormMessage />}
              <Typography
                variant="caption"
                className="px-1 pt-1 text-neutrals-400 lg:px-6"
              >
                {dict.childrenAgeNote}
              </Typography>
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end pb-2">
          <AltchaWidget isVerifying={isVerifying}>
            <Button
              variant="blue"
              type="submit"
              className="lg:mt-4"
              disabled={isSubmitting || isVerifying}
            >
              <Typography fontWeight="bold" tag="span">
                {dict.submit}
              </Typography>
            </Button>
          </AltchaWidget>
        </div>
      </form>
    </Form>
  );
};

export default BirthdayForm;

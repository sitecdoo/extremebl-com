import Typography from "@/components/custom-ui/typography";
import { CircleCheck, CircleX } from "lucide-react";
import { toast as shadcnToast } from "sonner";

export type ToastProps = { title: string };

export const toast = {
  error: ({ title }: ToastProps) => {
    return shadcnToast.error(
      <div className="t-body flex items-center justify-center gap-3 text-white">
        <CircleX className="size-7" />
        <Typography>{title}</Typography>
      </div>,
    );
  },
  success: ({ title }: ToastProps) => {
    return shadcnToast.success(
      <div className="t-body flex items-center justify-center gap-3 text-white">
        <CircleCheck className="size-7" />
        <Typography>{title}</Typography>
      </div>,
    );
  },
};

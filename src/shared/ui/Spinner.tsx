import { cn } from "@/shared/lib/utils";
import styles from "./styles.module.css";
export function Spinner() {
  return (
    <div
      className={cn(
        "rounded-full border-solid border-2 animate-spin w-full h-full",
        styles.spinner
      )}
    ></div>
  );
}

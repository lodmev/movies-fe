import { cn } from "@/shared/lib/utils";
import styles from "./styles.module.css";
type Props = {};
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

import { cn } from "@/shared/lib/utils";
import { Spinner } from "./Spinner";
import styles from "./styles.module.css";

type Props = {
  isOpen: boolean;
};
export function ModalSpinner({ isOpen }: Props) {
  return (
    <div
      className={cn("align-center", styles.overlay, {
        [styles["showed"]]: isOpen,
      })}
    >
      <div className="text-muted-foreground w-1/2 sm:w-1/6 m-auto ">
        <Spinner />
      </div>
    </div>
  );
}

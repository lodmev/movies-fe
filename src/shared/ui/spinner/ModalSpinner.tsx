import styles from "./styles.module.css";
import { Spinner } from "./Spinner";
import { cn } from "@/shared/lib/utils";

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
      <div className="text-red-500 w-1/2 sm:w-1/5 m-auto ">
        <Spinner />
      </div>
    </div>
  );
}

import Image from "next/image";
import { ReactNode } from "react";
import { AspectRatio } from "@/shared/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Movie } from "../model";

type WithActions = {
  actions?: ReactNode;
};

type Props = Omit<Movie, "id"> & WithActions;

export function MovieCard({ name, description, posterUrl, actions }: Props) {
  return (
    <Card className="min-w-7">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={posterUrl}
            alt={`${name} poster`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="rounded-md"
          />
        </AspectRatio>
        <div className="flex justify-end mt-2 mr-2">
          <div className="flex space-x-4">{actions}</div>
        </div>
      </CardContent>
    </Card>
  );
}

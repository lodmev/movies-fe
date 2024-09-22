"use client";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { ModalSpinner } from "@/shared/ui/ModalSpinner";
import { Textarea } from "@/shared/ui/textarea";
import { useAddMovie } from "../api";
import { formHandler } from "../lib";

export function AddMovieForm() {
  const { mutate: addMovie, isPending } = useAddMovie();

  return (
    <>
      <ModalSpinner isOpen={isPending} />
      <form onSubmit={formHandler(addMovie)} className="p-2">
        <Card className="w-full max-w-sm m-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Add movie</CardTitle>
            <CardDescription>Fill all fields below.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Movie name</Label>
              <Input
                id="name"
                type="string"
                placeholder="The Matrix"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="desc">Description</Label>
              <Textarea id="desc" placeholder="Description..." required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="posterUrl">Poster</Label>
              <Input
                id="posterUrl"
                type="string"
                placeholder="Poster url"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Add movie
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
}

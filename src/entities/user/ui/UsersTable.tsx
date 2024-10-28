"use client";
import { User } from "@/entities";
import { ModalSpinner } from "@/shared/ui/ModalSpinner";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/shared/ui/table";

type Props = {
  users?: User[];
  isPending: boolean;
  caption: string;
};

export function UsersTable({ users, isPending, caption }: Props) {
  return (
    <>
      <ModalSpinner isOpen={isPending} />
      <Table className="max-w-4xl m-auto">
        <TableCaption>{caption}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead>Registration Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {new Date(user.registeredAt).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

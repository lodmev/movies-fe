"use client";
import { useQuery } from "@tanstack/react-query";
import { userApi } from "@/entities";
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

export function UsersList() {
  const { data: users, isPending } = useQuery(userApi.userQueries.allUsers());
  return (
    <>
      <ModalSpinner isOpen={isPending} />
      <Table className="max-w-4xl m-auto">
        <TableCaption>A list of all users in system.</TableCaption>
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

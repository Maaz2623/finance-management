"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { PlusIcon } from "lucide-react";
import React from "react";
import { columns, Payment } from "./columns";
import { DataTable } from "@/components/data-table";

const AccountsPage = () => {
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "a@example.com",
    },
    // ...
  ];

  const newAccount = useNewAccount();

  return (
    <div className="max-w-screen-2xl w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-none">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>
          <Button onClick={newAccount.onOpen} size={`sm`}>
            <PlusIcon className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable onDelete={() => {}} disabled={false} filterKey="email" columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;

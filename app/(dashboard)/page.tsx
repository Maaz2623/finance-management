"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const { isOpen, onClose, onOpen } = useNewAccount();

  return (
    <div>
      <Button onClick={onOpen}>Add an Account</Button>
    </div>
  );
};

export default DashboardPage;

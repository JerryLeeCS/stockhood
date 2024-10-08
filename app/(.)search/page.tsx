"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import Search from "../search/page";

const ModalContainer = () => {
  const router = useRouter();
  return (
    <Sheet
      open
      onOpenChange={() => {
        router.back();
      }}
    >
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Search Stock</SheetTitle>
          <SheetDescription>
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <div className="py-2 px-4">
          <Search />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ModalContainer;

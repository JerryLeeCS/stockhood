"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import NoStockFoundDisplay from "@/components/Stock/NoStockFoundDisplay";

const StockSearch = () => {
  return (
    <div className="absolute w-full h-full bg-white top-0 left-0">
      <div className="container mx-auto pt-12 px-4 max-w-lg">
        <div className="flex gap-2">
          <Input type="search" placeholder="Search Stock" className="mb-8" />
          <Button>Search</Button>
        </div>
        <NoStockFoundDisplay />
      </div>
    </div>
  );
};

export default StockSearch;

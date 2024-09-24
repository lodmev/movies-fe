"use client";
import { useEffect } from "react";
import { toast } from "./use-toast";

export const useErrorToast = (error: Error | undefined | null) => {
  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  }, [error]);
};

import { signInWithOauth } from "@/api/auth";
import type { UseMutationCallbacks } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useSignInWithOauth(callbacks?: UseMutationCallbacks) {
  return useMutation({
    mutationFn: signInWithOauth,
    onError: (error) => {
      if (callbacks?.onError) callbacks?.onError(error);
    },
  });
}

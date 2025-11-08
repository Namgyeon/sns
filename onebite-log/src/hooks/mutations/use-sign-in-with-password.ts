import { signInWithPassword } from "@/api/auth";
import type { UseMutationCallbacks } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useSignInWithPassword(callbacks?: UseMutationCallbacks) {
  return useMutation({
    mutationFn: signInWithPassword,
    onError: (error) => {
      console.error(error);

      if (callbacks?.onError) {
        callbacks.onError(error);
      }
    },
  });
}

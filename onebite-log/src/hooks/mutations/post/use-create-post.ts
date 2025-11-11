import { createPost, createPostWithImages } from "@/api/post";
import type { UseMutationCallbacks } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useCreatePost(callbacks?: UseMutationCallbacks) {
  return useMutation({
    mutationFn: createPostWithImages,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}

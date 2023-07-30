import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import customFetchUrl from "./Utils";
import { toast } from "react-toastify";

export const useFetchsTask = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const { data } = await customFetchUrl.get("/");
      return data;
    },
  });
  return { isLoading, data, error };
};

export const useCreatTask = () => {
  const querClients = useQueryClient();
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (taskTitle) => customFetchUrl.post("/", { title: taskTitle }),
    onSuccess: () => {
      querClients.invalidateQueries({
        queryKey: ["repoData"],
      });
      toast.success("Task Added");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { createTask, isLoading };
};

export const useEditTask = () => {
  const queryClients = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetchUrl.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClients.invalidateQueries({ queryKey: ["repoData"] });
    },
  });

  return { editTask };
};

export const useDeleteTask = () => {
  const queryClients = useQueryClient();

  const { mutate: DelTask, isLoading: DeleteTaskLoding } = useMutation({
    mutationFn: (taskId) => {
      return customFetchUrl.delete(`/${taskId}`);
    },
    onSuccess: () => {
      queryClients.invalidateQueries({ queryKey: ["repoData"] });
    },
  });
  return { DelTask, DeleteTaskLoding };
};

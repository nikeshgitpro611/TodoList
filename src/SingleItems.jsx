// import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import {useEditTask, useDeleteTask} from './ReactQueryCustomHook'
// import customFetchUrl from "./Utils";
import { toast } from "react-toastify";

const SingleItems = ({ item, removeItems }) => {
  // const [checked, setIsChecked] = useState(item.complited);
  // const queryClients = useQueryClient();
  // const result = useMutation();
  // console.log("resultSingleLines : ", result);

  // this function will use for Edit Only
  // const { mutate: editTask } = useMutation({
  //   mutationFn: ({ taskId, isDone }) => {
  //     return customFetchUrl.patch(`/${taskId}`, { isDone });
  //   },
  //   onSuccess: () => {
  //     queryClients.invalidateQueries({ queryKey: ["repoData"] });
  //   },
  // });

  // this function will use for Delet Only
  // const { mutate: DelTask, isLoading } = useMutation({
  //   mutationFn: (taskId) => {
  //     return customFetchUrl.delete(`/${taskId}`);
  //   },
  //   onSuccess: () => {
  //     queryClients.invalidateQueries({ queryKey: ["repoData"] });
  //   },
  // });
  const {editTask} = useEditTask();
  const {DelTask, DeleteTaskLoding} = useDeleteTask();
  
  return (
    <section className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          // textDecoration: checked && "line-through",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled={DeleteTaskLoding}
        onClick={() => {
          DelTask(item.id);
          toast.success("Task Is deleted");
        }}
      >
        Delete
      </button>
    </section>
  );
};

export default SingleItems;

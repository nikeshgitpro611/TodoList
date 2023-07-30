// import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
// import { toast } from "react-toastify";
// import customFetchUrl from "./Utils";
import { useCreatTask } from "./ReactQueryCustomHook";

const Form = () => {
  const [newItem, setNewitem] = useState("");
  // =========For Techal to again and agin refress problrm when our new task will assign============
  // const querClients = useQueryClient();

  // const { mutate: createTask, isLoading } = useMutation({
  //   mutationFn: (taskTitle) => customFetchUrl.post("/", { title: taskTitle }),
  //   onSuccess: () => {
  //     querClients.invalidateQueries({
  //       queryKey: ["repoData"]
  //     });
  //     toast.success('Task Added');
  //     setNewitem('')
  //   },
  //   onError: (error) => {
  //     toast.error(error.response.data.msg);
  //   },
  // });
  const { createTask, isLoading } = useCreatTask();
  const handelSubmit = (e) => {
    e.preventDefault();
    // if (!newItem) {
    //   toast.error('Please provide input Value')
    //   return};
    //add item to the list here using props method and reset input field after adding it
    // addItemsFromInput(newItem);
    createTask(newItem, {
      onSuccess: () => {
        setNewitem("");
      },
    });
  };

  return (
    <section>
      <form onSubmit={handelSubmit}>
        <h4>Grocery List</h4>
        <div className="form-control">
          <input
            className="form-input"
            type="text"
            value={newItem}
            onChange={(e) => setNewitem(e.target.value)}
            placeholder="Enter Text Here ..."
          />
          <button className="btn" disabled={isLoading}>
            Add items
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

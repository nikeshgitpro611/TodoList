import React from "react";
import SingleItems from "./SingleItems";
// import customFetchUrl from "./Utils";
import {useFetchsTask} from './ReactQueryCustomHook'

const Items = () => {
  // const { isLoading, data, error, isError } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: async () => {
  //     const { data } = await customFetchUrl.get("/");
  //     return data;
  //   },
  // });
  const {isLoading, data, error} = useFetchsTask()
  if (isLoading) {
    return <p style={{ marginTop: "1rem", color: "red" }}>Loading...</p>;
  }

  // if (isError) {
  //   return <p style={{ marginTop: "1rem", color: "red" }}>There is Something Wrong..</p>;
  // }
  if (error) {
    console.log('error : ', error.message);
    return <p style={{ marginTop: "1rem", color: "red" }}>{error.response.data}</p>;
  }

  // console.log(data);
  return (
    <section className="items">
      {data.taskList.map((item) => {
        console.log("item", item);
        return (
          <SingleItems key={item.id} item={item}  />
        );
      })}
    </section>
  );
};

export default Items;

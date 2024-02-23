// import { useEffect, useState } from "react";
import useSWR from "swr";

const URL = "http://ponyapi.net/v1/character/all";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  // const [ponies, setPonies] = useState([]);
  const { data: ponies, error, isLoading } = useSWR(URL, fetcher);

  // useEffect(() => {
  //   async function getPonies() {
  //     const response = await fetch(URL);

  //     const data = await response.json();

  //     console.log(data);
  //   }

  //   getPonies();
  // }, []);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ul>
        {ponies.data.map((pony) => (
          <li key={pony.id}>{pony.name}</li>
        ))}
      </ul>
    </div>
  );
}

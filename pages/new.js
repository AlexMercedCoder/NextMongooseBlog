import {useRouter} from "next/router";
import { useState } from "react";

export default function New(props) {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("/api/blog", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="body"
        value={form.body}
        onChange={handleChange}
      />
      <input type="submit" value="Create Blog" />
    </form>
  );
}

export async function getStaticProps(ctx){
    return {
        props: {
            fsdfsdf: ":sdfsdfsdf"
        }
    }
}
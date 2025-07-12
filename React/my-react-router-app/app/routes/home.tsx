import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import MyButton from "~/components/MyButton";
import type Person from "~/types/person";
import Profile from "~/components/Person";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const person :Person = {
    name: "Gontse",
    imageUrl: 'https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageSize: 90,
  }
  return (
    <div>
      <h1>Welcome to Entelect</h1>
      <MyButton />
      <Profile person={person}/>

    </div>

  );
  }





  

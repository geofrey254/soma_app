import Hero from "@/components/Hero";
import Jumbotron from "@/components/Jumbotron";
import Categories from "@/components/Categories";
import Lessons from "@/components/Lessons";

export default function Home() {
  return (
    <main className="flex flex-col row-start-2 items-center sm:items-start">
      <Hero />
      <Jumbotron />
      <Categories />
      <Lessons />
    </main>
  );
}

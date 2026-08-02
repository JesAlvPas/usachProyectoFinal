import Hero from "./components/Hero";
import Colecciones from "./components/Colecciones";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <div>
      <Hero />
      <Colecciones />
      <Featured />
    </div>
  );
}
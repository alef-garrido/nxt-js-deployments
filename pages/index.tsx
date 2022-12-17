import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <header>
        <div>
          Ir a <Link href="/about">About</Link>
        </div>
      </header>

      <h1 className="title"> 
        Start Here 
      </h1>

      <p className={"description"}>
        This is a summary section, where we describe why you should give any fuc*s about us.

        Like, because we are cool, and stuff.
        Seriously, we are. Sooo cool. OMG, like so cool.
        Like, you woulnt belive how cool, the coolest mother tucking thing you aint ever seen. Like, really interesting, out of the ordinary, never done before, showstoping, not fuc*s given, but at the same time all the fuc*s in the world have been puted into out cool stuff. Like... yass mama. XD I love it.
      </p>
    </MainLayout>
  );
}

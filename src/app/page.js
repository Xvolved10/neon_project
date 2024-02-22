import Image from "next/image";
import  Message  from "@/components/message";
import Navbar from "@/components/navbar";
import Hero_section from "@/components/hero_section";
import Hero_section2 from "@/components/hero_section2";
import Hero_section3 from "@/components/hero_section3";


export default function Home() {
  return (
    <main>
        <Message />
        <Navbar />
        <Hero_section />
        <Hero_section2 />
        <Hero_section3 />
    </main>
  );
}

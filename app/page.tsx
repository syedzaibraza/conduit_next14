import Content from "@/components/Content";
import MainBanner from "@/components/MainBanner";

export default function Home() {
  return (
    <>
      <MainBanner />
      <main className="flex min-h-screen flex-col items-center justify-between pr-6 pl-6 sm:p-20">
        <Content />
      </main>
    </>
  );
}

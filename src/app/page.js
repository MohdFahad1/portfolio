import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-5 ">
      <div className="md:w-[600px] w-[400px] border-2">
        <Header />
      </div>
    </div>
  );
}

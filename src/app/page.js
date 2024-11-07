import { Telco } from "./components/Telco";

export const metadata = {
  title: "MyCharges | Home",
};


export default function Home() {
  return (
    <main className="w-full h-full md:min-h-[100vh] flex flex-col gap-3 items-center justify-center px-3 py-3 md:py-0">
      <header className="flex flex-col items-center justify-center text-center">
        <h1 className="text-xl md:text-2xl font-bold">My charges</h1>
        <p className="text-xs md:text-lg">Calculate your mobile money transfer charges intsantly!</p>
      </header>
      <Telco />
    </main>
  )
}

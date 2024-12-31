import Footer from "@/components/custom/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-7">
      {/* Search Form */}
      <h1>Search form</h1>

      <h3 className="text-2xl sm:text-4xl font-bold text-gray-500 pt-16 pb-16 text-center uppercase tracking-wide">
        There is always a spot available
      </h3>

      <section className="hidden lg:block pt-16 pb-32">
        <div className="grid grid-cols-3 place-items-center">
          <div className="flex flex-col items-center">
            <div className="flex flex-col bg-primary-600 text-white relative justify-center items-center rounded-full w-12 h-12">
              <p className="text-2xl font-bold after:content-[''] after:absolute after:-left-2 after:-top-2 after:w-16 after:h-16 after:-z-[1] after:rounded-full after:bg-dark-700">
                1
              </p>
            </div>
            <p className="pt-2 text-gray-500 text-lg tracking-wide">
              Enter your destination
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col bg-primary-600 text-white relative justify-center items-center rounded-full w-12 h-12">
              <p className="text-2xl font-bold after:content-[''] after:absolute after:-left-2 after:-top-2 after:w-16 after:h-16 after:-z-[1] after:rounded-full after:bg-dark-700">
                2
              </p>
            </div>
            <p className="pt-2 text-gray-500 text-lg tracking-wide">
              Pick date and time
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col bg-primary-600 text-white relative justify-center items-center rounded-full w-12 h-12">
              <p className="text-2xl font-bold after:absolute after:-left-2 after:-top-2 after:w-16 after:h-16 after:-z-[1] after:rounded-full after:bg-dark-700">
                3
              </p>
            </div>
            <p className="pt-2 text-gray-500 text-lg tracking-wide">
              Pick a spot
            </p>
          </div>
        </div>
      </section>

      <h2 className="text-lg sm:text-xl text-center pb-32 text-gray-500">
        No more running around looking for a parking spot.
      </h2>

      <section>
        <div className="pt-16 w-full absolute left-0 sm:bg-map bg-cover bg-no-repeat bg-center bg-dark-900 bg-opacity-25 bg-blend-overlay">
          <div className="grid grid-cols-1 sm:grid-cols-2 container pb-16 place-items-center sm:place-items-start">
            <div className="flex flex-col text-gray-300 py-5 sm:text-gray-700 text-center sm:text-left rounded-lg px-10 mx-10 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg justify-center items-center overflow-hidden">
              <p className="text-3xl sm:text-4xl font-bold">Fully responsive</p>
              <p className="text-md sm:text-lg pt-2 tracking-tight">
                It feels just like a mobile app.
              </p>
            </div>

            <div className="pt-8 sm:pt-0">
              <Image
                src={"/gateless-parking-mobile.png"}
                alt="mobile-view"
                width={1000}
                height={1000}
                className="w-[320px] h-[600px]"
              />
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </main>
  );
}

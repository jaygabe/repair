export default function Home() {
  return (
    <main
      className="
        flex
        flex-col
        px-3
        mb-6
      "
    >
      <h1
        className="
          py-5
          text-center

          xxs:text-5xl
        "
      >
        Connecticut
        <p
          className="
            xxs:text-4xl
          "
        >
          Vacuum Repair
        </p>
      </h1>
      <div
        className="bg-cover bg-center bg-no-repeat h-52 rounded-xl"
        style={{ backgroundImage: `url('/repair-2.jpg')` }}
      ></div>
      <h2
        className="
          p-3
          my-5
          text-center

          xxs:text-3xl
        "
      >
        We Come to You!
      </h2>
      <a className="mx-auto" href="tel:+18603722407">
        <button
          className="
            bg-black
            text-white
            px-5
            py-3
            shadow-gray-700
            shadow-xl
            font-semibold

            xxs:text-xl
          "
          type="button"
        >
          Call Us
        </button>
      </a>
      <div
        className="
          my-8
        "
      >
        <h2 className="xxs:text-3xl mb-3">We fix:</h2>
        <ul className="list-disc ml-10 ">
          <li className="p-1">Clogs</li>
          <li className="p-1">Belts</li>
          <li className="p-1">Rollers</li>
          <li className="p-1">Filters</li>
          <li className="p-1">
            Electrical Issues (Cords, shorts-circuits, etc)
          </li>
          <li className="p-1">Motors and transmissions</li>
        </ul>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat h-52 rounded-xl"
        style={{ backgroundImage: `url('/repair-1.jpg')` }}
      ></div>
      <div>
        <h2
          className="
            p-3
            my-5
            text-center 
            xxs:text-3xl
          "
        >
          How does it work?
        </h2>
        <div className="border border-black my-5 p-3 rounded-xl">
          <h3 className="font-semibold">Step 1: Schedule Diagnosis</h3>
          <p>We come out to you and diagnose your vacuum cleaner.</p>
        </div>
        <div className="border border-black my-5 p-3 rounded-xl">
          <h3 className="font-semibold">Step 2: We Order Parts</h3>
          <p>
            If you're vacuum cleaner needs parts, we'll order those for you. If
            not, we'll likely fix your vacuum cleaner on the spot.
          </p>
        </div>
        <div className="border border-black my-5 p-3 rounded-xl">
          <h3 className="font-semibold">
            Step 3: We Repair your Vacuum Cleaner
          </h3>
          <p>
            When the parts come in, we come back and fix your vacuum cleaner.
          </p>
        </div>
      </div>
      <a className="mx-auto" href="tel:+18603722407">
        <button
          className="
            bg-black
            text-white
            px-5
            py-3
            shadow-gray-700
            shadow-xl
            font-semibold

            xxs:text-xl
          "
          type="button"
        >
          Schedule Repair
        </button>
      </a>
    </main>
  );
}

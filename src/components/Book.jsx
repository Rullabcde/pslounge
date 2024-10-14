function Book() {
  return (
    <section className="bg-second">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base font-semibold leading-7 text-text">Book</h2>
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Book Your Dream Retreat Now.
          </h1>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-gray-600 sm:text-xl">
            Experience the ultimate in relaxation and luxury at PSLounge, where
            every detail is designed with your comfort in mind.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              className="block rounded-lg border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="https://wa.me/6281225121872?text=Permisi,%20kak%20saya%20ingin%20booking.">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;

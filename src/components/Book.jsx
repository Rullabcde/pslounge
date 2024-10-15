import React, { useState } from "react";

function Book() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [packageOption, setPackageOption] = useState("");

  const handleBookClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const waMessage =
      `*Booking Request - PSLounge* 🌟\n\n` +
      `*Nama:* ${name}\n` +
      `*Tanggal:* ${date}\n` +
      `*Alamat:* ${address}\n` +
      `*Pilihan Paket:* ${packageOption}\n\n` +
      `Thank you for choosing PSLounge! 🙏\n`;

    const waUrl = `https://wa.me/6281225121872?text=${encodeURIComponent(
      waMessage
    )}`;
    window.open(waUrl, "_blank");
    setShowForm(false); // Close modal after submission
  };

  const closeModal = () => {
    setShowForm(false);
  };

  return (
    <section
      id="book"
      className=" bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {/* Background with noise pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise-pattern opacity-20"></div>

      {/* Glowing accent circles */}
      <div className="absolute top-1/4 left-1/4 bg-gradient-radial from-blue-700 via-transparent to-transparent w-72 h-72 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 bg-gradient-radial from-purple-700 via-transparent to-transparent w-72 h-72 rounded-full blur-2xl opacity-30"></div>

      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center bg-white bg-opacity-90 rounded-lg p-8 shadow-xl ">
          <h2 className="text-base font-semibold leading-7 text-gray-800">
            Book
          </h2>
          <h1 className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Book Your Dream Retreat Now.
          </h1>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-gray-700 sm:text-xl">
            Experience the ultimate in relaxation and luxury at PSLounge, where
            every detail is designed with your comfort in mind.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              className="block rounded-lg border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition-all duration-300"
              onClick={handleBookClick}>
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal (Custom Alert) */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-800">
              Booking Form
            </h2>
            <form onSubmit={handleFormSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nama:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tanggal:
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Alamat:
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pilih Paket:
                </label>
                <select
                  value={packageOption}
                  onChange={(e) => setPackageOption(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                  required>
                  <option value="">-- Pilih Paket --</option>
                  <option value="Paket 1">Paket Harian</option>
                  <option value="Paket 2">Paket Mingguan</option>
                  <option value="Paket 3">Paket Event</option>
                  <option value="Paket 4">Paket E-sport</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Book;

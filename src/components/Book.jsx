import React, { useState } from "react";

function Book() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
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
      `*Pilihan Paket:* ${packageOption}\n\n` +
      `Thank you for choosing PSLounge! 🙏\n`;

    const waUrl = `https://wa.me/6281225121872?text=${encodeURIComponent(
      waMessage
    )}`;
    window.open(waUrl, "_blank");
    setShowForm(false);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  return (
    <section id="book">
      <div className="max-w-6xl p-4 pt-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl p-8 mx-auto text-center bg-white rounded-lg shadow-xl bg-opacity-90 ">
          <h2 className="text-base font-semibold leading-7 text-gray-800">
            Book
          </h2>
          <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text sm:text-5xl">
            Book Your Dream Retreat Now.
          </h1>
          <p className="max-w-xl mx-auto mt-4 leading-8 text-gray-700 sm:text-xl">
            Experience the ultimate in relaxation and luxury at PSLounge, where
            every detail is designed with your comfort in mind.
          </p>
          <div className="flex justify-center mt-8">
            <button
              className="block px-12 py-3 text-sm font-medium text-white transition-all duration-300 bg-blue-600 border border-blue-600 rounded-lg hover:bg-transparent hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              onClick={handleBookClick}>
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg">
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
                  className="w-full p-2 text-sm border border-gray-300 rounded-lg"
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
                  className="w-full p-2 text-sm border border-gray-300 rounded-lg"
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
                  className="w-full p-2 text-sm border border-gray-300 rounded-lg"
                  required>
                  <option value="">-- Pilih Paket --</option>
                  <option value="Paket Harian">Paket Harian</option>
                  <option value="Paket Mingguan">Paket Mingguan</option>
                  <option value="Paket Event">Paket Event</option>
                  <option value="Paket E-sport">Paket E-sport</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
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

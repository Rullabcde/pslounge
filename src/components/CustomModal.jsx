import React, { useState } from "react";

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    package: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the selected package details
    const selectedPackage = packages.find((pkg) => pkg.id === formData.package);
    const packageDetails = selectedPackage
      ? `${selectedPackage.name} (${selectedPackage.price})`
      : "No package selected";

    // Create message text
    const message = `
Hello, I would like to book a session:
      
Name: ${formData.name}
Address: ${formData.address}
Package: ${packageDetails}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    const whatsappNumber = "6281225121872";

    // Open WhatsApp with the message
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );

    // Close modal after redirection
    onClose();
  };

  const packages = [
    {
      id: "standard",
      name: "Paket Full Day",
      description:
        "Rent a PlayStation with your favorite games for a full day.",
      price: "$5",
    },
    {
      id: "premium",
      name: "Paket Weekly",
      description: "Weekly PlayStation rental available.",
      price: "$25",
    },
    {
      id: "deluxe",
      name: "Paket Event",
      description: "Rent a PS console with accessories for events or parties.",
      price: "$30",
    },
    {
      id: "exclusive",
      name: "Paket E-Sport",
      description:
        "Complete gaming setup rental for local e-sports competitions.",
      price: "$35",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl p-6 mx-4 bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute text-gray-400 top-4 right-4 hover:text-redterang focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal header */}
        <div className="mb-6 text-center">
          <h2 className="text-base font-semibold leading-7 text-redterang">
            Book Now
          </h2>
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Customize Your Experience
          </h2>
          <p className="max-w-md mx-auto mt-2 text-sm text-gray-500">
            Fill in your details and choose your preferred package for the
            ultimate relaxation experience.
          </p>
        </div>

        {/* Booking form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal details */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-redterang focus:border-redterang"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-redterang focus:border-redterang"
                placeholder="Enter your complete address"
              />
            </div>
          </div>

          {/* Package selection */}
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              Select a Package
            </h3>
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
              {packages.map((pkg) => (
                <div key={pkg.id}>
                  <input
                    type="radio"
                    id={pkg.id}
                    name="package"
                    value={pkg.id}
                    checked={formData.package === pkg.id}
                    onChange={handleChange}
                    className="sr-only"
                    required
                  />
                  <label
                    htmlFor={pkg.id}
                    className={`block p-4 border rounded-lg cursor-pointer hover:border-redterang ${
                      formData.package === pkg.id
                        ? "border-redterang bg-red-50"
                        : "border-gray-200"
                    }`}>
                    <div className="flex items-start">
                      <div className="ml-1">
                        <p className="font-medium text-gray-900">
                          {pkg.name}{" "}
                          <span className="ml-1 text-redterang">
                            {pkg.price}
                          </span>
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {pkg.description}
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-8 py-3 text-sm font-medium text-white border rounded-full bg-redterang border-redterang hover:bg-red-700 focus:ring-3 focus:outline-hidden focus:ring-red-200">
              Book via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;

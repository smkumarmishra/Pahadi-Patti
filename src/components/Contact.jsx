import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Construct WhatsApp message from form data
    const message = `Hello! I would like to place an order.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nAddress: ${form.address}\nPincode: ${form.pincode}`;

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/7541981247?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappLink, "_blank");

    // Show success message
    setSent(true);
    setTimeout(() => setSent(false), 3500);

    // Reset form
    setForm({
      name: "",
      phone: "",
      email: "",
      address: "",
      pincode: "",
    });
  }

  return (
    <section id="contact" className="container-max py-12">
      <h2 className="text-2xl font-semibold text-heading">Contact Us</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface p-6 rounded-3xl border border-secondary/10 shadow-sm">
          <h3 className="font-semibold text-secondary">Get in touch</h3>
          <p className="mt-2 text-sm text-secondary">Phone: +91-754198-1247</p>
          <p className="mt-1 text-sm text-secondary">
            WhatsApp: +91-754198-1247
          </p>
          <p className="mt-1 text-sm text-secondary">
            Email: hello@pahadipatti.com
          </p>
          <p className="mt-1 text-sm text-secondary">
            Address: Aurangabad.Bihar,824102
          </p>
          <div className="mt-4 bg-background p-4 rounded-3xl border border-secondary/10">
            {/* Map placeholder (Google Maps embed can be added here) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31682.0308062363!2d84.35698869801854!3d24.756243806965387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cfc35b57ffe31%3A0xffea2031cb937478!2sAurangabad%2C%20Bihar%20824101!5e0!3m2!1sen!2sin!4v1782189139071!5m2!1sen!2sin"
              width="470"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aurangabad, Bihar map"
            ></iframe>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-surface p-6 rounded-3xl border border-secondary/10 shadow-sm"
          aria-label="Contact form"
        >
          <label className="block">
            <span className="text-sm font-medium text-heading">Name</span>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full border border-secondary/20 rounded-xl px-3 py-2 bg-background text-heading"
            />
          </label>
          <label className="block mt-3">
            <span className="text-sm font-medium text-heading">Phone</span>
            <input
              required
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full border border-secondary/20 rounded-xl px-3 py-2 bg-background text-heading"
            />
          </label>
          <label className="block mt-3">
            <span className="text-sm font-medium text-heading">Email</span>
            <input
              required
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full border border-secondary/20 rounded-xl px-3 py-2 bg-background text-heading"
            />
          </label>
          <label className="block mt-3">
            <span className="text-sm font-medium text-heading">Address</span>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="mt-1 w-full border border-secondary/20 rounded-xl px-3 py-2 bg-background text-heading"
            />
          </label>
          <label className="block mt-3">
            <span className="text-sm font-medium text-heading">Pincode</span>
            <input
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              className="mt-1 w-full border border-secondary/20 rounded-xl px-3 py-2 bg-background text-heading"
            />
          </label>

          <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="bg-primary text-background px-4 py-2 rounded-full hover:bg-secondary transition"
            >
              Send Message
            </button>
            {sent && (
              <span className="text-secondary">
                Message received. We will contact you shortly.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

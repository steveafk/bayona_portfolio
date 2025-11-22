"use client";
import { useState } from "react";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-transparent text-gray-200 px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-center text-gray-400 mb-10">
          Feel free to reach out for opportunities, collaborations, or questions.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:bayona.sk1@gmail.com"
                className="text-gray-300 hover:text-white transition"
              >
                bayona.sk1@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Bakhaw, Mandurriao, Iloilo City, Philippines <br />5000</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Socials</h3>
              <div className="flex gap-4 text-3xl">
                <a
                  href="https://github.com/steveafk"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://facebook.com/steve.kurt.bayona.2024"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://instagram.com/tebcdef"
                  className="hover:text-white transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-gray-200 outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-gray-200 outline-none"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-gray-200 outline-none"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-gray-200 h-32 outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS FEEDBACK */}
            {status === "success" && (
              <p className="text-green-400 text-center">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center">
                Please fill in all fields.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

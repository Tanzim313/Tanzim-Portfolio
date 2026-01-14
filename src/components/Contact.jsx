export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-teal-500 to-emerald-500
                     bg-clip-text text-transparent">Contact Me</h2>
      <p className="text-center mb-4">Email: patwaryrizbi313@gmail.com | Phone: 01872164554 </p>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-300"/>
        <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-300"/>
        <textarea placeholder="Your Message" className="p-3 rounded border border-gray-300"></textarea>
        <button type="submit" className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3 rounded font-bold hover:bg-purple-600 transition">Send Message</button>
      </form>
    </section>
  );
}

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_scmw52f', 'template_dlswg77', form.current, '9cWZjaOA7dRmJH9f2')
      .then((result) => {
          console.log(result.text);
           Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent ✅',
          icon: 'success',
          confirmButtonColor: '#22c55e'
        });
      }, (error) => {
          console.log(error.text);
            Swal.fire({
          title: 'Error!',
          text: 'Failed to send message ❌',
          icon: 'error',
          confirmButtonColor: '#ef4444'
        });
      });

    e.target.reset();
  };

  return (
    <div className="min-h-screen pt-24 px-4 bg-gray-300 text-gray-800 ">
      <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Hire Me</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-4 ">
          {/* Your Email (Readonly) */}
          <div>
            <label className="block font-semibold mb-1">To</label>
            <input
              type="email"
              name="to_email"
              value="omdharun6@gmail.com"
              readOnly
              className="w-full border border-gray-300 px-4 py-2 rounded bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block font-semibold mb-1">Your Message</label>
            <textarea
              name="message"
              required
              placeholder="Type your message..."
              className="w-full border border-gray-300 px-4 py-2 rounded resize-none h-32"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

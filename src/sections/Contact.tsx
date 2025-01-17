import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_ipueefp',
        'template_1u4o12p',
        {
          from_name: form.name,
          to_name: 'Felipe Camus',
          from_email: form.email,
          to_email: 'felipe.camus.d@gmail.com',
          message: form.message,
        },
        'Np0D22PDL4Hqf9iBe',
      );
      setForm({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.log(error);
      alert('Something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-screen-2xl mx-auto c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/portfolio/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just
            want to say hi, I'll try my best to get back to you!
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                placeholder="Enter your name"
                required
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                placeholder="Enter your email"
                required
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="field-input"
                placeholder="Enter your message"
                rows={5}
                required
              />
            </label>
            <button type="submit" className="field-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/portfolio/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

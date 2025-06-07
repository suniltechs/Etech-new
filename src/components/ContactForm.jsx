import { useState } from 'react';
import contactService from '../services/contactService';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const { name, email, subject, message } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await contactService.submitContactForm(formData);
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-custom-gradient" id="contact">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
      <h2 className="text-2xl font-bold text-center text-textDarkColor mb-8">
        Contact Us
      </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-textDarkColor mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primaryColor focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-textDarkColor mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primaryColor focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className="block text-textDarkColor mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={onChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primaryColor focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-textDarkColor mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={onChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primaryColor focus:border-transparent"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 bg-primaryColor text-white font-semibold rounded-lg hover:bg-primaryColor/90 transition duration-300"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      </div>
    </section>
  );
};

export default ContactForm;
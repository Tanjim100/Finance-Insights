import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const expertise = [
    {
      icon: "📊",
      title: "Financial Analysis",
      description:
        "Deep insights into market trends, investment strategies, and financial planning",
    },
    {
      icon: "📈",
      title: "Accounting Expertise",
      description:
        "Comprehensive guidance on accounting principles, standards, and best practices",
    },
    {
      icon: "💼",
      title: "Tax & Compliance",
      description:
        "Up-to-date information on tax regulations, compliance requirements, and optimization strategies",
    },
    {
      icon: "🎓",
      title: "Educational Resources",
      description:
        "Curated learning materials for both professionals and students in finance",
    },
  ];

  const stats = [
    { number: "500+", label: "Articles Published" },
    { number: "50K+", label: "Monthly Readers" },
    { number: "100+", label: "Resources Shared" },
    { number: "5+", label: "Years Experience" },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>About & Contact | FINANCE INSIGHTS</title>
        <meta
          name="description"
          content="Learn about Finance Insights and get in touch with us for collaboration, questions, or feedback"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-[#01101C] text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Finance Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your trusted companion in navigating the complex world of finance,
              accounting, and market trends. Empowering professionals and
              students with expert insights and practical knowledge.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b border-[#E6E8EA]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#01101C] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-[#55636F]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Story Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl border border-[#E6E8EA] p-8 shadow-xs">
                <h2 className="text-2xl md:text-3xl font-bold text-[#01101C] mb-6">
                  My Mission
                </h2>
                <p className="text-[#55636F] leading-relaxed mb-4">
                  To demystify finance and accounting for everyone—from aspiring
                  students to seasoned professionals. I believe that financial
                  literacy is a cornerstone of personal and professional
                  success.
                </p>
                <p className="text-[#55636F] leading-relaxed">
                  Through in-depth articles, practical guides, and curated
                  resources, I aim to make complex financial concepts accessible
                  and actionable for all.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#E6E8EA] p-8 shadow-xs">
                <h2 className="text-2xl md:text-3xl font-bold text-[#01101C] mb-6">
                  My Story
                </h2>
                <p className="text-[#55636F] leading-relaxed mb-4">
                  With over 5 years of experience in finance and accounting,
                  I've worked with diverse organizations, from startups to
                  multinational corporations, helping them navigate financial
                  challenges and opportunities.
                </p>
                <p className="text-[#55636F] leading-relaxed">
                  Finance Insights was born from my passion for sharing
                  knowledge and helping others succeed in their financial
                  journey. Every article I write is crafted with care, accuracy,
                  and a commitment to excellence.
                </p>
              </div>
            </div>

            {/* Expertise Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#01101C] text-center mb-12">
                Areas of Expertise
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertise.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-[#E6E8EA] p-6 shadow-xs hover:shadow-md transition-shadow"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-[#01101C] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#55636F] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#01101C] mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-[#55636F] max-w-2xl mx-auto">
                Have questions, feedback, or collaboration ideas? I'd love to
                hear from you. Drop me a message and I'll get back to you as
                soon as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl border border-[#E6E8EA] p-8 shadow-xs">
                <h3 className="text-2xl font-bold text-[#01101C] mb-6">
                  Send a Message
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#01101C] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E6E8EA] focus:outline-none focus:ring-2 focus:ring-[#01101C] text-[#01101C]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#01101C] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E6E8EA] focus:outline-none focus:ring-2 focus:ring-[#01101C] text-[#01101C]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-[#01101C] mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E6E8EA] focus:outline-none focus:ring-2 focus:ring-[#01101C] text-[#01101C]"
                      placeholder="How can I help you?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#01101C] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-[#E6E8EA] focus:outline-none focus:ring-2 focus:ring-[#01101C] text-[#01101C] resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#01101C] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#344553] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#E6E8EA] p-8 shadow-xs">
                  <h3 className="text-2xl font-bold text-[#01101C] mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#01101C] text-white p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#01101C] mb-1">
                          Email
                        </h4>
                        <p className="text-[#55636F]">
                          contact@financeinsights.com
                        </p>
                        <p className="text-[#55636F]">
                          hello@financeinsights.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#01101C] text-white p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#01101C] mb-1">
                          Location
                        </h4>
                        <p className="text-[#55636F]">New York, NY 10001</p>
                        <p className="text-[#55636F]">United States</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#01101C] text-white p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#01101C] mb-1">
                          Response Time
                        </h4>
                        <p className="text-[#55636F]">Within 24-48 hours</p>
                        <p className="text-[#55636F]">Monday - Friday</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-[#E6E8EA] p-8 shadow-xs">
                  <h3 className="text-xl font-bold text-[#01101C] mb-4">
                    Follow Me
                  </h3>
                  <p className="text-[#55636F] mb-6">
                    Stay connected and get the latest updates on finance and
                    accounting trends.
                  </p>
                  <div className="flex gap-3">
                    <Link
                      to="#"
                      className="p-3 bg-[#01101C] hover:bg-[#344553] text-white rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 19 17"
                        fill="none"
                      >
                        <path
                          d="M0.0442708 0.00012207L7.05483 9.37663L0 17.0001H1.58776L7.76425 10.3256L12.7547 17.0001H18.1579L10.7529 7.09621L17.3195 0.00012207H15.7317L10.0435 6.14719L5.44747 0.00012207H0.0442708ZM2.37919 1.17001H4.86143L15.8226 15.8301H13.3404L2.37919 1.17001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                    <Link
                      to="#"
                      className="p-3 bg-[#01101C] hover:bg-[#344553] text-white rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 19 17"
                        fill="none"
                      >
                        <path
                          d="M0.157715 1.97487C0.157715 1.40247 0.362201 0.930245 0.771157 0.558203C1.18011 0.186143 1.71177 0.00012207 2.36611 0.00012207C3.00877 0.00012207 3.52872 0.183276 3.926 0.549617C4.33496 0.927395 4.53944 1.41964 4.53944 2.02638C4.53944 2.57588 4.34081 3.03378 3.94353 3.40012C3.53457 3.7779 2.99708 3.96679 2.33105 3.96679H2.31353C1.67087 3.96679 1.15091 3.7779 0.75363 3.40012C0.356347 3.02234 0.157715 2.54725 0.157715 1.97487ZM0.385565 17.0001V5.52941H4.27654V17.0001H0.385565ZM6.43235 17.0001H10.3233V10.5951C10.3233 10.1944 10.3701 9.88529 10.4635 9.6678C10.6271 9.27857 10.8754 8.94944 11.2084 8.68042C11.5414 8.4114 11.9592 8.27689 12.4616 8.27689C13.7703 8.27689 14.4246 9.14119 14.4246 10.8698V17.0001H18.3156V10.4234C18.3156 8.72907 17.9066 7.44406 17.0887 6.5683C16.2708 5.69255 15.19 5.25467 13.8462 5.25467C12.3389 5.25467 11.1646 5.89002 10.3233 7.16073V7.19507H10.3058L10.3233 7.16073V5.52941H6.43235C6.45571 5.89574 6.4674 7.03479 6.4674 8.94659C6.4674 10.8584 6.45571 13.5429 6.43235 17.0001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                    <Link
                      to="#"
                      className="p-3 bg-[#01101C] hover:bg-[#344553] text-white rounded-full transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 13 17"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.4738 5.84387H7.9146V3.71887C7.9146 3.43708 8.07471 3.16683 8.35972 2.96757C8.64472 2.76831 9.03127 2.65637 9.43433 2.65637H10.9541V0.00012207H7.9146C6.70542 0.00012207 5.54577 0.335947 4.69075 0.933719C3.83573 1.53149 3.35539 2.34224 3.35539 3.18762V5.84387H0.315918V8.50012H3.35539V17.0001H7.9146V8.50012H10.9541L12.4738 5.84387Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[#01101C] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore More?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Dive into our extensive collection of articles and resources to
              enhance your financial knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blogs"
                className="inline-block px-8 py-3 bg-white text-[#01101C] font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Explore Blog Posts
              </Link>
              <Link
                to="/resources"
                className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#01101C] transition-colors"
              >
                View Resources
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

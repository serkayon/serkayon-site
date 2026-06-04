import { motion } from 'framer-motion'
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mqedpppg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

    if (response.ok) {
  setStatus("success")

  toast.success("Message sent successfully!", {
    position: "top-right",
    autoClose: 3000,
  })

  form.reset()
  setFormData({ name: "", company: "", email: "", message: "" })
} else {
        setStatus("error")
      }
    } catch (error) {
       toast.error("Something went wrong!", {
    position: "top-right",
    autoClose: 3000,
  })
      console.error("Form submission error:", error)
      setStatus("error")
    }
  }

  return (
    <>
      <style>{`
        /* ── CONTACT PAGE ── */
        .contact-page {
          min-height: 100vh;
          background:
            linear-gradient(rgba(180,190,205,.32) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180,190,205,.32) 1px, transparent 1px),
            #f5f6f8;
          background-size: 48px 48px;
          position: relative;
          overflow: hidden;
        }

        /* radial highlight top-center */
        .contact-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 80% 55% at 50% 0%,
            rgba(220,235,255,.55),
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
        }

        .contact-inner {
          position: relative;
          z-index: 1;
          padding: 80px 20px 80px;
          max-width: 640px;
          margin: 0 auto;
        }

        /* ── HEADING ── */
        .contact-heading {
          font-size: clamp(28px, 5vw, 56px);
          font-weight: 700;
          text-align: center;
          margin-bottom: 8px;
          color: #0f1923;
    
          letter-spacing: -0.5px;
        }

        .contact-sub {
          text-align: center;
          font-size: clamp(13px, 1.4vw, 15px);
          color: #6b7685;
          margin-bottom: 48px;
          line-height: 1.6;
        }

        /* ── FORM CARD ── */
        .contact-card {
          background: #ffffff;
          border: 1px solid rgba(15,25,35,.1);
          border-radius: 20px;
          padding: clamp(28px, 5vw, 48px) clamp(24px, 5vw, 48px);
          box-shadow:
            0 2px 12px rgba(15,25,35,.05),
            0 8px 40px rgba(15,25,35,.06);
        }

        /* ── FIELD GROUP ── */
        .field-group {
          margin-bottom: 24px;
        }

        .field-group label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #374555;
          margin-bottom: 8px;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        .field-group input,
        .field-group textarea {
          width: 100%;
          background: #f5f7fa;
          border: 1.5px solid rgba(15,25,35,.12);
          border-radius: 10px;
          padding: 13px 16px;
          font-size: 15px;
          color: #0f1923;
          outline: none;
          transition: border-color .2s, background .2s, box-shadow .2s;
          font-family: "Inter", system-ui, sans-serif;
          resize: none;
        }

        .field-group input::placeholder,
        .field-group textarea::placeholder {
          color: #aab2bc;
        }

        .field-group input:focus,
        .field-group textarea:focus {
          border-color: #e02020;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(224,32,32,.08);
        }

        /* two-col row for name + company on wider screens */
        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 520px) {
          .field-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        /* ── SUBMIT BUTTON ── */
        .submit-btn {
          width: 100%;
          padding: 15px 24px;
          border-radius: 10px;
          border: none;
      background: #FB2C36;

          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.4px;
          cursor: pointer;
          transition: background .2s, transform .15s, box-shadow .2s;
          position: relative;
          overflow: hidden;
          font-family: "Inter", system-ui, sans-serif;
          margin-top: 8px;
        }

        .submit-btn:hover:not(:disabled) {
          background: #d91f29;
          box-shadow: 0 6px 20px rgba(224,32,32,.3);
          transform: translateY(-1px);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-btn:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        /* shimmer on button */
        .submit-btn::after {
          content: "";
          position: absolute;
          top: 0; left: -120%; width: 55%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,.18), transparent);
          animation: btnShimmer 3.5s infinite;
        }
        @keyframes btnShimmer { 100% { left: 120%; } }

        /* ── STATUS MESSAGES ── */
        .status-msg {
          text-align: center;
          font-size: 14px;
          margin-top: 16px;
          padding: 12px 16px;
          border-radius: 8px;
          font-weight: 500;
        }
        .status-msg.success {
          background: rgba(22,163,74,.08);
          color: #15803d;
          border: 1px solid rgba(22,163,74,.2);
        }
        .status-msg.error {
          background: rgba(220,38,38,.07);
          color: #c0392b;
          border: 1px solid rgba(220,38,38,.2);
        }

        /* ── DECORATIVE SIDE LABEL ── */
        .contact-label {
          display: none;
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #b0bac5;
          font-family: 'Courier New', monospace;
          white-space: nowrap;
        }
        @media (min-width: 1100px) {
          .contact-label { display: block; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 480px) {
          .contact-card {
            border-radius: 14px;
          }
          .contact-inner {
            padding: 60px 14px 60px;
          }
        }
      `}</style>

      <div id="contact" className="contact-page">
        <div className="contact-inner">

          {/* Heading */}
          <motion.h1
            className="contact-heading"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Operator
          </motion.h1>

          <motion.p
            className="contact-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Send us a message and we'll get back to you shortly.
          </motion.p>

          {/* Card */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <form onSubmit={handleSubmit}>

              {/* Name + Company row */}
              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Message */}
              <div className="field-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us how we can help…"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending'
                  ? 'Sending…'
                  : status === 'success'
                  ? 'Message Sent ✓'
                  : 'Submit'}
              </button>

              {/* Status */}
              {status === 'success' && (
                <motion.p
                  className="status-msg success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Your message has been sent. We'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  className="status-msg error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  There was an error sending your message. Please try again.
                </motion.p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Contact
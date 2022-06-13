import React from "react"

import ContactImg from "../../assets/images/contact-img.png"

const ContactForm = () => {
  return (
    <div className="contact-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>צור קשר</h2>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <img src={ContactImg} alt="image" />
          </div>

          <div className="col-lg-6 col-md-12">
            <form name="Contact Form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Contact Form" />
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="Your phone number"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <form name="Contact Form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="Contact Form" />
          <div>
            <label>Your Email:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" />
          </div>
          <button type="submit">Send</button>
        </form> */}
      </div>
    </div>
  )
}

export default ContactForm

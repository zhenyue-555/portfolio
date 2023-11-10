import React from "react";
// import "./Contact.css";


export const Contact =()=> {
    return (
      <section id="Contact" className="contact--section">
        <div className="text-h2">
          <h2>Contact Me</h2>
        </div>
        <form className="contact--form--container" action="https://formspree.io/mdorjzyb" method="POST">
          <div className="contact--container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-input"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-input"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-input"
                name="email"
                id="email"
                data-rule="email"
                data-msg="Please enter a valid email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact--input text-input"
                name="phone-number"
                id="phone-number"
                data-rule="minlen:10"
                data-msg="Please enter at least 10 numbers"
                required
              />
            </label>
          </div>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-input"
              id="message"
              name="message"
              rows="8"
              placeholder="Type your message..."
              required
            >
            </textarea>
            </label>
          <div>
            <button className="btn btn-primary contact--form--btn">Submit</button>
          </div>
        </form>
      </section>
    );
  }
import React from "react"
import { useState, useEffect } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
function Mailchimp() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("Subscribe to recieve")
  const ChangeHandel = event => {
    setEmail(event.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
    setMessage("thank you for your subscription")

    setEmail("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="mail"
            value={email}
            onChange={ChangeHandel}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Mailchimp

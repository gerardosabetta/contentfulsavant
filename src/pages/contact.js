import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import {
  CTALink,
  Container,
  Heading,
  Kicker,
  Link,
  Subhead,
  SuperHeading,
} from "../components/ui"

// this one is all hardcoded
export default function Contact(props) {
  React.useEffect(() => {
    const form = document.querySelector("form")

    function submitHandler(e) {
      e.preventDefault()
      // form data sent to Netlify server
      const formData = new FormData(form)

      // user-facing message containers (hidden initially)
      const errorDisplay = document.querySelector("#error")
      const successDisplay = document.querySelector("#success")

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(handleErrors)
        .then(() => {
          // displays success message to user
          successDisplay.style.display = "block"
        })
        .catch((error) => {
          // displays error message to user
          errorDisplay.style.display = "block"
          console.log(error)
        })
    }
    // Error Handler
    function handleErrors(response) {
      // throws an error if HTTP response failed
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response
    }
    // only adds an event listener if there is a form present on the page
    if (form) form.addEventListener("submit", submitHandler)
  }, [])

  return (
    <Layout>
      <Container>
        <Heading>Let's chat</Heading>

        <br />
        <Subhead>
          HAVE QUESTIONS? FILL OUT THE INQUIRY FORM AND WE WILL GET BACK TO YOU
          WITHIN 24 HOURS.
        </Subhead>
        <br />

        <form
          name="contact"
          autoComplete="off"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <label>
              Your Name:{" "}
              <input
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  boxSizing: "border-box",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                type="text"
                name="name"
              />
            </label>
            <label>
              Your Email:{" "}
              <input
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  boxSizing: "border-box",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                type="email"
                name="email"
              />
            </label>
            <label>
              Subject:{" "}
              <input
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  boxSizing: "border-box",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                type="text"
                name="subject"
              />
            </label>
            <label>
              Message:{" "}
              <textarea
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  boxSizing: "border-box",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                name="message"
              ></textarea>
            </label>
            <button
              style={{
                width: "200px",
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "14px 20px",
                margin: "8px 0",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              id="submit-button"
              type="submit"
            >
              Send
            </button>
          </div>
          <span
            id="success"
            style={{
              display: "none",
            }}
          >
            Thanks! We'll be in touch soon.
          </span>
          <span
            style={{
              display: "none",
            }}
            id="error"
          >
            Whoops... Something went wrong.
          </span>

          <p
            style={{
              display: "none",
            }}
          >
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
        </form>
      </Container>
    </Layout>
  )
}
export const Head = (props) => {
  return <SEOHead title="Contact" />
}

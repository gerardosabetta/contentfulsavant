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
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        document.getElementById("success").style.display = "block"
      })
      .catch(() => {
        document.getElementById("error").style.display = "block"
      })
  }

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
          method="POST"
          autoComplete="off"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
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
              <input name="bot-field" />
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

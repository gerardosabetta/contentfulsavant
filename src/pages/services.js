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
export default function Services(props) {
  return (
    <Layout>
      <Container>
        <Heading>Prepare your business for the digital future</Heading>

        <br />
        <Subhead>
          All your technical needs in one place. We can help you build, host,
          and maintain your website.
        </Subhead>
        <br />
        <p>
          We offer a variety of services to help you grow your business. We can
          help you build a website, host your website, and maintain your
          website.
        </p>

        <p>
          On this day and age, it is important to have a website. A website is
          the first impression that many people have of your business. It is
          important to have a website that is easy to use, fast, and secure.
        </p>

        <p>
          As a business owner you have a lot of things to worry about. You don't
          need to worry about your website. We can help you with all of your
          website needs.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gridGap: "3rem",
          }}
        >
          <div>
            <h2>Web Development</h2>
            <p>
              We build websites that are fast, secure, and easy to use. We use
              modern tools and frameworks to build websites that are easy to
              maintain and scale.
            </p>
            <CTALink to="https://calendly.com/savantdevelopment">
              Learn more
            </CTALink>
          </div>

          <div>
            <h2>Web Design</h2>
            <p>
              We have a team of designers that can help you create a beautiful
              website that will help you stand out from the competition.
            </p>
            <CTALink to="https://calendly.com/savantdevelopment">
              Learn more
            </CTALink>
          </div>

          <div>
            <h2>Web Hosting</h2>
            <p>
              We offer a variety of hosting options to fit your needs. We can
              host your website on our servers or we can help you migrate your
              website to a new host.
            </p>
            <CTALink to="https://calendly.com/savantdevelopment">
              Learn more
            </CTALink>
          </div>

          <div>
            <h2>Web Maintenance</h2>
            <p>
              We can take existing websites and help you maintain them. We can
              update your website, fix bugs, and help you keep your website
              running.
            </p>
            <CTALink to="https://calendly.com/savantdevelopment">
              Learn more
            </CTALink>
          </div>

          <div>
            <h2>Web Security</h2>
            <p>
              We can help you secure your website and keep it safe from hackers.
            </p>
            <CTALink to="https://calendly.com/savantdevelopment">
              Learn more
            </CTALink>
          </div>

          <div>
            <h2>Content Management Systems (CMS)</h2>

            <p>
              Integrate a CMS into your website to make it easy to update your
              website.
            </p>
            <CTALink to="https://calendly.com/savantdevelopment">
              Learn more
            </CTALink>
          </div>

          <div>
            <h2>Search Engine Optimization (SEO)</h2>
            <p>
              Get your site to the top of search engines like Google, Bing, and
              Yahoo.
            </p>
            <CTALink to="https://calendly.com/savantdevelopment">
              Learn more
            </CTALink>
          </div>
          <div>
            <h2>Web Analytics</h2>
            <p>
              We can help you track your website traffic and help you understand
              your customers.
            </p>
            <CTALink to="https://calendly.com/savantdevelopment">
              Learn more
            </CTALink>
          </div>

          <div>
            <h2>Web Performance</h2>
            <p>
              We can help you make your website faster and more responsive. We
              can help you optimize your website to load faster and work better
              on mobile devices.
            </p>
            <CTALink to="https://calendly.com/savantdevelopment">
              Learn more
            </CTALink>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export const Head = (props) => {
  return <SEOHead title="Services" />
}

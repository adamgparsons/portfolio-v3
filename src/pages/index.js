import React from "react"
import Hero from "../components/Hero"
import CaseStudyCollection from "../components/CaseStudyCollection"
import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Hero />
    <CaseStudyCollection />
  </Layout>
)

export default IndexPage

import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import MainTitle from '../components/index/main-title'
import LocalitiesSection from '../components/index/localities-section';
import OurWorkSection from '../components/index/our-work';
import PortfolioSection from '../components/index/portfolio-section';
import OurProcessSection from '../components/index/our-process';
import OurPartnersSection from '../components/index/our-partners';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <MainTitle />
    <LocalitiesSection />
    <OurWorkSection />
    <PortfolioSection />
    <OurProcessSection />
    <OurPartnersSection />
  </Layout>
)

export default IndexPage

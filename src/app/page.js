import AboutMe from '@/components/sections/About'
import Hero from '@/components/sections/HeroSection'
import PortfolioEnhanced from '@/components/sections/Portfolio'
import SkillsSection from '@/components/sections/Skills'
import PortfolioStats from '@/components/sections/StatsSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <PortfolioStats/>
      <PortfolioEnhanced/>
      <SkillsSection/>
      <AboutMe/>
    </div>
  )
}

export default page
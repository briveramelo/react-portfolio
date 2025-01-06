import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { SkillsSection } from '../components/SkillsSection'
import { CaseStudiesSection } from '../components/CaseStudiesSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { RecentWorkSection } from '../components/RecentWorkSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <SkillsSection />
            <CaseStudiesSection />
            <TestimonialsSection />
            <RecentWorkSection />
            <ContactSection />
            <Footer />
        </>
    )
}

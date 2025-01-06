import React from 'react'
import { Container, Typography } from '@mui/material'
import { TestimonialCard } from './TestimonialCard'

const testimonialsData = [
    {
        quote: `Brandon is hard-working, motivated, and passionate about the projects he works on... I give him my highest recommendation.`,
        name: 'Joshua Levenson',
        title: 'Web Developer',
        company: 'Charter School',
        photo: '/assets/josh-levenson_PDN6BbxO6gDEQqXWuuPSL.jpeg',
    },
    {
        quote: `He has a knack of approaching problems correctly and developing elegant solutions in a short amount of time... a pleasure working with him.`,
        name: 'Abhinandan Sain',
        title: 'Senior Software Engineering Manager',
        company: 'Collins Aerospace',
        photo: '/assets/andy_dJeUHV2Ht2KJjHQoDyuOR.jpeg',
    },
    // Add more testimonials as needed
]

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 bg-gray-900 text-gray-200">
            <Container maxWidth="lg" className="space-y-10">
                <div className="text-center space-y-4">
                    <Typography variant="h3" className="font-bold text-4xl">
                        <a
                            href="https://www.linkedin.com/in/briveramelo/details/recommendations/?detailScreenTabIndex=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline"
                        >
                            Testimonials
                        </a>
                    </Typography>
                    <Typography variant="body1">
                        I care about the quality of my work and the teams I support, but you
                        should hear it from them.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonialsData.map((t) => (
                        <TestimonialCard key={t.name} data={t} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

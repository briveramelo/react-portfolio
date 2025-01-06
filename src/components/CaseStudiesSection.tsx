import React from 'react'
import { Container, Typography } from '@mui/material'
import { CaseStudyCard } from './CaseStudyCard'

const caseStudies = [
    {
        title: 'Tilt Tracker',
        category: 'HealthTech',
        description:
            'Tilt Tracker is like Fitbit for power wheelchairs; it’s an IoT sensor for people with spinal cord injury...',
        image: '/assets/josh-tilt-2_CyadjYOz_TgISB_IAUC-6.jpg',
        link: '#',
        linkText: 'View case study',
        color: 'bg-red-600',
        textColor: 'text-white',
    },
    {
        title: 'ABCmouse',
        category: 'EdTech',
        description:
            'ABCmouse is the #1 learning app for children ages 2–8, loved by kids and parents across the world.',
        image: '/assets/abcmouse_Un_l1N89US7TJ0JTWyXsD.jpg',
        link: '#',
        linkText: 'View case study',
        color: 'bg-blue-700',
        textColor: 'text-white',
    },
    {
        title: 'Design for America',
        category: 'Design',
        description:
            'DFA is a national network of student-led teams using human-centered design to tackle big challenges like childhood obesity.',
        image: '/assets/FruitBuddiKid_QFffZvqphT887REdEelFV.jpg',
        link: '#',
        linkText: 'View case study',
        color: 'bg-green-600',
        textColor: 'text-white',
    },
]

export function CaseStudiesSection() {
    return (
        <section id="casestudies" className="py-20 bg-gray-100">
            <Container maxWidth="lg" className="flex flex-col space-y-8">
                <div className="mx-auto text-center max-w-xl space-y-4">
                    <Typography
                        variant="h3"
                        className="font-bold text-4xl text-gray-800"
                    >
                        Case Studies
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                        These projects highlight my technical expertise, innovation, and
                        empathy.
                    </Typography>
                </div>

                <div className="flex flex-col space-y-8">
                    {caseStudies.map((cs) => (
                        <CaseStudyCard key={cs.title} data={cs} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

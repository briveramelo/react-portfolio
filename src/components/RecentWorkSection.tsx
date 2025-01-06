import React from 'react'
import { Container, Typography } from '@mui/material'
import { ProjectCard } from './ProjectCard'

const projects = [
    {
        title: 'The Pocket Optimist',
        description:
            'Your internal monologue determines much of your success. Bring a therapy transcript or a journal entry and try an experimental AI demo.',
        image: '/assets/pessimistic-night_7xE-YHJLFyuFgT_pzuSoK.jpg',
        link: '#',
    },
    {
        title: 'SmartChart',
        description:
            'For small clinics, insurance reimbursement piles on admin work. See how SmartChart’s AI can do the heavy lifting.',
        image: '/assets/DigitalHealth4x3_zuW_r0SW4ZGVQQHYVeG8Z.jpg',
        link: '#',
    },
]

export function RecentWorkSection() {
    return (
        <section id="projects" className="bg-gray-100 py-20">
            <Container maxWidth="lg" className="space-y-8">
                <div className="text-center space-y-4 max-w-xl mx-auto">
                    <Typography variant="h3" className="text-4xl font-bold text-gray-800">
                        Recent Work
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                        Innovative technology and a love of learning go hand-in-hand.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p) => (
                        <ProjectCard key={p.title} project={p} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

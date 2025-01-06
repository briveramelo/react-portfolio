import React from 'react'
import { Container, Typography } from '@mui/material'

export function ContactSection() {
    return (
        <section
            id="contact"
            className="bg-black text-white py-20 text-center flex flex-col items-center"
        >
            <Container maxWidth="sm" className="space-y-6">
                <Typography variant="h3" className="font-bold text-4xl">
                    Your Move
                </Typography>
                <Typography variant="body1" className="leading-relaxed">
                    No smoke bombs here - just sharp solutions.
                    <br />
                    <br />
                    <a
                        href="mailto:hi@brm.ninja?subject=Introduction"
                        className="text-green-400 underline"
                    >
                        hi@brm.ninja
                    </a>
                </Typography>
            </Container>
        </section>
    )
}

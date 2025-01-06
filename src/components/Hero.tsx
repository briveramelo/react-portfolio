import React from 'react'
import { Container, Typography, Button } from '@mui/material'

export function Hero() {
    return (
        <section className="bg-black text-white py-20" id="hero">
            <Container
                maxWidth="lg"
                className="flex flex-col items-start md:flex-row md:items-center md:justify-between"
            >
                <div className="space-y-6">
                    <Typography variant="h2" component="h1" className="text-5xl font-bold">
                        Brandon
                        <br />
                        Rivera-Melo
                    </Typography>

                    <Typography variant="body1" className="max-w-xl text-xl">
                        Healing through playful design <i>and science</i>
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        className="rounded-full shadow-lg text-white"
                        href="#contact"
                    >
                        Let’s get started
                    </Button>
                </div>

                <div className="hidden md:block mt-8 md:mt-0 md:ml-8">
                    <img
                        src="../assets/people/brandon.jpg"
                        alt="Picture of Brandon"
                        className="w-64 h-64 object-cover rounded-full border-2 border-white"
                    />
                </div>
            </Container>
        </section>
    )
}

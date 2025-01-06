import React from 'react'
import { Container, Typography } from '@mui/material'
import { BeatingHeart } from './BeatingHeart'
import { SteamingCoffee } from './SteamingCoffee'

export function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-400 py-8">
            <Container
                maxWidth="lg"
                className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4"
            >
                <div className="text-center md:text-left">
                    <Typography variant="body2" className="mb-2">
                        Made with
                    </Typography>
                    <BeatingHeart />
                    <Typography variant="body2" className="inline ml-2">
                        and
                    </Typography>
                    <SteamingCoffee />
                </div>
                <Typography variant="body2" className="text-center md:text-right">
                    © {new Date().getFullYear()} Brandon Rivera-Melo
                </Typography>
            </Container>
        </footer>
    )
}

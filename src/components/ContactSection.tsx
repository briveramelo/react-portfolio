import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export function ContactSection() {
    return (
        <Box
            component="section"
            id="contact"
            sx={{
                backgroundColor: 'background.dark',
                color: 'text.secondary',
                py: 10,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                }}
            >
                {/* Section Title */}
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        color: 'text.primary',
                    }}
                >
                    Your Move
                </Typography>

                {/* Description and Email */}
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.125rem',
                        lineHeight: 1.75,
                        color: 'text.secondary',
                    }}
                >
                    No smoke bombs here - just sharp solutions.
                    <br />
                    <br />
                    <a
                        href="mailto:hi@brm.ninja?subject=Introduction"
                        style={{
                            color: '#43a047', // Custom green color for the link
                            textDecoration: 'underline',
                        }}
                    >
                        hi@brm.ninja
                    </a>
                </Typography>
            </Container>
        </Box>
    );
}

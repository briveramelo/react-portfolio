import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'

interface Project {
    title: string
    description: string
    image: string
    link: string
}

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="flex flex-col md:flex-row bg-white shadow">
            <CardMedia
                component="img"
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 object-cover"
            />
            <CardContent className="md:w-1/2 p-6 flex flex-col space-y-4">
                <Typography variant="h5" className="font-bold text-gray-900">
                    {project.title}
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                    {project.description}
                </Typography>
                <Button variant="contained" color="primary" href={project.link}>
                    Learn more
                </Button>
            </CardContent>
        </Card>
    )
}

import React from 'react'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

interface CaseStudy {
    title: string
    category: string
    description: string
    image: string
    link: string
    linkText: string
    color: string
    textColor: string
}

export function CaseStudyCard({ data }: { data: CaseStudy }) {
    return (
        <Card className="md:flex bg-white shadow">
            <CardMedia
                component="img"
                src={data.image}
                alt={data.title}
                className="w-full md:w-1/2 object-cover"
            />
            <CardContent className="md:w-1/2 p-6 flex flex-col space-y-4">
                <div
                    className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${data.color} ${data.textColor}`}
                >
                    {data.category}
                </div>
                <Typography variant="h5" className="font-bold text-gray-900">
                    {data.title}
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                    {data.description}
                </Typography>
                <Button
                    href={data.link}
                    variant="contained"
                    className={`${data.color} ${data.textColor} w-fit`}
                >
                    {data.linkText}
                </Button>
            </CardContent>
        </Card>
    )
}

import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

interface Testimonial {
    quote: string
    name: string
    title: string
    company: string
    photo: string
}

export function TestimonialCard({ data }: { data: Testimonial }) {
    return (
        <Card className="relative p-4 bg-gray-800 text-white shadow-xl">
            <CardContent className="space-y-4">
                <Typography variant="body1" className="italic">
                    {data.quote}
                </Typography>
                <div className="flex items-center space-x-4">
                    <img
                        src={data.photo}
                        alt={data.name}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="space-y-1">
                        <Typography variant="subtitle1" className="font-bold text-white">
                            {data.name}
                        </Typography>
                        <Typography variant="body2" className="text-gray-300">
                            {data.title}
                        </Typography>
                        <Typography variant="body2" className="text-gray-500">
                            {data.company}
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

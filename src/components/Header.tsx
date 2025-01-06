import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import { LinkedIn } from '@mui/icons-material'

export function Header() {
    return (
        <AppBar position="static" className="bg-gray-900">
            <Toolbar className="flex justify-between">
                <div className="flex items-center space-x-4">
                    <Button color="inherit" href="/" className="hover:opacity-80">
                        Home
                    </Button>
                    <Button color="inherit" href="#casestudies" className="hover:opacity-80">
                        Case Studies
                    </Button>
                    <Button color="inherit" href="#testimonials" className="hover:opacity-80">
                        Testimonials
                    </Button>
                    <Button color="inherit" href="#projects" className="hover:opacity-80">
                        Projects
                    </Button>
                    <Button color="inherit" href="#contact" className="hover:opacity-80">
                        Contact
                    </Button>
                </div>

                <div>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/briveramelo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedIn className="text-white hover:opacity-80" />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

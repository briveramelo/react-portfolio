import React, { useState, useContext } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Box,
    MenuItem,
    Menu,
} from "@mui/material";
import {Image, LinkedIn} from "@mui/icons-material";
import { ThemeContext } from "../ThemeContext";
import { themeNames, themeImages } from "../theme";

export function Header() {
    const navigationLinks = [
        { href: "/#brandon", label: "Home" },
        { href: "#casestudies", label: "Case Studies" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#recent", label: "Recent" },
        { href: "#contact", label: "Contact" },
    ];
    const { mode, setMode } = useContext(ThemeContext);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl!);

    const handleThemeChange = (newTheme: string) => {
        setMode(newTheme as (typeof themeNames)[number]);
        setAnchorEl(null); // Close the menu after theme selection
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "background.header",
                color: "text.primary",
            }}
        >
            <Box
                sx={{
                    maxWidth: "calc(100% - 400px)", // 200px margins on each side
                    minWidth: "600px", // Minimum width of 600px
                    margin: "0 auto", // Centering horizontally
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* Navigation Links */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                        {navigationLinks.map((link) => (
                            <Button
                                key={link.href}
                                color="inherit"
                                href={link.href}
                                sx={{
                                    textTransform: "none",
                                    fontWeight: "bold",
                                    "&:hover": { opacity: 0.8 },
                                }}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </Box>

                    {/* LinkedIn Icon */}
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/briveramelo"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: "text.primary",
                            "&:hover": { opacity: 0.8 },
                        }}
                    >
                        <LinkedIn />
                    </IconButton>

                    {/* Theme Menu */}
                    {themeImages.map((theme) => (
                        <Button
                            key={theme.name}
                        onClick={() => handleThemeChange(theme.name)}
                        >
                            <img
                                height={"20px"}
                                src={theme.src}
                            />
                        </Button>
                    ))}
                </Toolbar>
            </Box>
        </AppBar>
    );
}

import React from 'react';
import { AppBar, Toolbar, Box, Typography, Link } from '@mui/material';

import { Styles } from "./style";

function Navbar() {
    return (
        <Styles>
            <AppBar sx={{ background: 'none', boxShadow: 'none' }}>
                <Toolbar sx={{ flexGrow: 1, textAlign: 'right' }}>
                    <Box variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
                        <Link className="nav-link" href="https://example.com" rel="noopener noreferrer">
                            Home
                        </Link>
                        <Link className="nav-link" href="https://example.com" rel="noopener noreferrer">
                            People
                        </Link>
                        <Link className="nav-link" href="https://example.com" rel="noopener noreferrer">
                            profile
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Styles>
    );
}

export default Navbar;
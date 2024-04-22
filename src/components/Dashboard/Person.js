import React from 'react';
import { AppBar, Toolbar, Box, Typography, Link } from '@mui/material';

import { Styles } from "./style";

function Person(props) {
    const { index, photo_url, name, basic_info } = props;
    console.log(index);
    return (
        <Styles>
            <Box className="card-wrapper">
                <img
                    src={photo_url}
                    alt="Anna"
                    width="100%"
                    height="301px"
                />
                <Box sx={{
                    backgroundImage: 'linear-gradient(to right, #423f9c, #862359)',
                    padding: '1.1rem',
                    marginTop: '-0.3rem'
                }}
                >
                    <Box>
                        <Typography
                            sx={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: '2rem'
                            }}
                        >
                            {name}
                        </Typography>
                        <Typography
                            sx={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: '1rem'
                            }}
                        >
                            {basic_info}
                        </Typography>
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </Box>
        </Styles >
    );
}

export default Person;
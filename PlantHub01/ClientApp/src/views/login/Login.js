﻿import * as React from 'react';
import { useState } from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [user, setUser] = useState("");

    // Allows navigation to another page
    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();

        const requestOptions = {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "Username": user })
        }

        try {
            var res = await fetch("https://localhost:7062/login", requestOptions)

            if (res.status !== 204) {
                console.log("Something went wrong. Status code: " + res.status)
            }

            if (res.status === 204) {
                localStorage.setItem("username", user);
                // Navigates to profile page after successful login
                navigate("/profile");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <Box
                component="form"
                onSubmit={handleLogin}
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(event) => setUser(event.target.value)} />
                <Stack direction="row" spacing={2}>
                    <Button type="submit" variant="contained">Login</Button>
                </Stack>
            </Box>
        </div>
    )
}
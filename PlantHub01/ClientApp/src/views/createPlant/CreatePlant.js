﻿import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export const CreatePlant = () => {

	// Allows navigation to another page
	const navigate = useNavigate();

	// State variable to store the image file
	const [image, setImage] = React.useState(null);

	async function handleSubmit(event) {
		event.preventDefault();

		// Get data from form
		
		const formData = new FormData(event.currentTarget);
		formData.append("UserId", localStorage.getItem("userId"));
		formData.append("Image", image);
		

		axios.post("https://localhost:7062/api/Plants", formData)
		.then((response) => console.log(response))
		

		/* Create requestOptions with data that from formData
		try {

			if (res.status !== 201) {
				console.log("Something went wrong. Status code: " + res.status)
			}

			if (res.status === 201) {
				const response = await res.json();
				console.log(response);
				// Navigates to plant page after successful creation of plant
				navigate(`/plant/${response.id}`);
			}
		} catch (error) {
			console.log(error);
		}*/
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Add a plant
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="name"
								label="Name"
								name="name"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="about"
								label="About"
								name="about"
								multiline
								rows={4}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="plantName"
								label="Plant Name"
								name="plantName"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="motherPlant"
								label="Mother Plant"
								name="motherPlant"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="plantFamily"
								label="Plant Family"
								name="plantFamily"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="price"
								label="Price"
								name="price"
							/>
						</Grid>
						<Grid>
							<input type="file" onChange={e => setImage(e.target.files[0])}></input>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Create Plant
					</Button>
				</Box>
			</Box>
		</Container>
	);
}

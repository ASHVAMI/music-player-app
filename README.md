# Music Player Web App

## Overview

A music player web application built using the MERN stack (MongoDB, Express, React, Node.js). This app allows users to sign up, sign in, select songs from a library, create playlists, play songs, and resume songs from where they left off.

## Features

- **User Authentication**: Sign up and sign in using email and password.
- **Songs Library**: View and select songs from a library.
- **Playlist Management**: Create playlists and add songs to them.
- **Music Player**: Play songs and resume playback from where you left off.

## Technologies

- **Frontend**: React, Redux, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **State Management**: Redux

## Installation

### Backend

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following content:

    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/musicplayerdb
    JWT_SECRET=your_jwt_secret_key
    JWT_EXPIRES_IN=30d
    NODE_ENV=development
    ```

4. Start the server:

    ```bash
    npm run dev
    ```

### Frontend

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

## Usage

1. **Sign Up / Sign In**: Use the authentication forms to create a new account or log in.
2. **Browse Songs**: View available songs in the library.
3. **Create Playlists**: Manage your playlists by creating new ones and adding songs.
4. **Play Music**: Use the music player to play songs and control playback.


Acknowledgments: 
This README.md should help users understand the purpose of the project, how to get it running, and how to contribute. Adjust any sections as needed to fit your specific project requirements and setup.
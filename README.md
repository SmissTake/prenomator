# Prenomator

## Description

A simple tool to add as many votes as you want to a first name notation poll, with a estimator function to know how many votes to add for a specific grade.

## Installation

1. Install dependencies
    ```bash
    npm install
    ```
2. Copy the `.env` to `.env.local` and fill the variables with your own credentials and the api url. You can also configure the default values for the votes.

## Usage

1. Run the following command to start the script

    ```bash
    npm run dev
    ```

2. Select the option you want to use in the menu.

    ```
    [1] Calculate number of vote for a targeted average
    [2] Add votes
    [0] CANCEL

    What do you want to do ? [1, 2, 0]:
    ```

3. Follow the instructions

## Issues

When launching the script, it will prompt the menu and then restart and prompt the menu again in the first menu input. This is a known issue and will be fixed in the next release. You can still use the script by entering the [0] option in the first prompt before the menu restarts.
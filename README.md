# Tea DB

## Development

### Local Development

In order to run this web app, you must do the following:

- Install docker desktop
- Create a `.env` file in the root directory
- Add `POSTGRES_USERNAME=postgres` to your .env file
- Add `POSTGRES_PASSWORD="some_password"` to your .env file (_note: generate a random password!_)
- Run `docker compose up`
- In a new tab/pane, run `docker compose run web rails db:create` to create the database
- Visit [localhost:3000](localhost:3000) to make sure you see the home page


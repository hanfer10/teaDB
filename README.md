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
- In the same tab the above command ran in, run `docker compose run web rails db:migrate` to apply any migrations
- Visit [localhost:3000](localhost:3000) to make sure you see the home page

### Database Migrations

In order to apply database migrations and keep your database in sync with changes Rails allows you to run a command that will sync your local database schema with what is defined in code. You will need to run this any time you think your database might not be in sync or you get an `ActiveRecord::PendingMigrationError` when viewing the web app. The following command will get your database schema in sync:

```
docker compose run web rails db:migrate
```


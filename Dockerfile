FROM ruby:3.1

WORKDIR /usr/src/app
EXPOSE 3000
# Add yarn repository
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# Add nodejs repository
RUN curl -sL https://deb.nodesource.com/setup_17.x | bash

# Install dependencies
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client yarn

COPY Gemfile Gemfile.lock package.json yarn.lock .
RUN bundle install && yarn install
COPY . .

CMD ["./bin/dev"]


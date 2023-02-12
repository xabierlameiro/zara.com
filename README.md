# Requirements

[Link](TODO.md)

# Install dependencies

yarn install

# How to use production build

1. yarn dev - To turn on the api (necessary for the production build port 3000)
2. yarn build - To generate the production build
3. yarn start - To run the production build (this will run on port 4000)

# Endpoint routes
## GET Podcasts
http://localhost:3000/api/podcasts

## GET Episodes
http://localhost:3000/api/episodes/1535809341

# Run tests

yarn test 

yarn test --coverage (to see coverage)

# Run tests in watch mode

yarn test:watch

# Command sequence to create this project:

1. npm init -y
2. touch README.md
3. touch TODO.md
4. gh repo create
5. yarn create next-app
6. yarn add -D eslint-config-prettier && touch .prettierrc.json
7. yarn add -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
8. touch jest.config.js && touch jest.setup.js && touch jest.mock.js
9. yarn add swr
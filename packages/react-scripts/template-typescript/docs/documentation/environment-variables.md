The environment variables are defined in a `.env`-file. The package used to read environment variables is [Dotenv](https://www.npmjs.com/package/dotenv) and is included in ReactPlate through `create-react-app`.
`

## Prerequisites

Make sure you have copied `.env.example` to `.env`.

## Usage

This example expects a variable called `REACT_APP_API_URL` in `.env`.

```typescript
require('dotenv').load()

console.log(process.env.REACT_APP_API_URL)
```

All variables added to `.env` are available after restarting the app.

> Note: You must create custom environment variables beginning with REACT*APP*. Any other variables except NODE_ENV will be ignored to avoid accidentally exposing a private key on the machine that could have the same name. Changing any environment variables will require you to restart the development server if it is running.

## References

<https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables>

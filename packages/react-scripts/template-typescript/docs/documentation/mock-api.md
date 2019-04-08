## Mock API

Run your own API locally with faked data. You will be able to work offine, develop things in parallel and implement UI for non-existing endpoints.

### Prerequisites

Update your `.env` with the values from `.env.example`.

```bash
REACT_APP_USE_MOCKUP_DATA=true
REACT_APP_USE_MOCKUP_URL='localhost:3001'
```

### Usage

1. Add the endpoints you want to mockup to `src/api/mockup/config.ts`.
2. Generate mockup data by running `npm run generate-mock-data`.
   - A new file will be created containing the data in `src/api/mockup/db.json`
   - The file will only exist on your computer, it is not checked in to Git.
3. Start the mock API with `npm run start-mockapi`.
4. The API will be accessible at `http://localhost:3001`, or on the URL provided in `.env`.

### Add new mock data

Update `src/api/mockup/mockDataSchema.js` with a new object for the endpoint.

You can find the documentation for using Faker and JSON Schema Faker in the [references](#references).

## References

- [No API? No Problem! Rapid Development via Mock APIs](https://medium.freecodecamp.org/rapid-development-via-mock-apis-e559087be066)
- [JSON Server](https://github.com/typicode/json-server)
- [JSON Schema Faker](http://json-schema-faker.js.org)
- [Faker.js](https://github.com/marak/Faker.js/)

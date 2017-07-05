<img src="https://rawgit.com/tklovett/graphql-ide/master/assets/logo.svg" alt="GraphQL IDE" align="center" width="440">

An extensive IDE for exploring GraphQL APIs. Based on [GraphiQL] wrapped in [Electron].

-----------

## Features

- Manage projects
- Import/export
- Store queries
- Query history
- Custom headers
- Environment variables for dynamic headers

## Installing

### MacOS

Unpack the latest app from the [releases][0] tab

### Window / Linux

Releases available soon, for now build the binary using

````
npm install
npm run package --all
````

## Upgrade from 0.x

Download the latest 0.2.x version, this will give you an option to export any project for 1.x.
After you've installed 1.x you can import the project there. You can always go back to 0.x, your project data is stored at
`/Users/[username]/Library/Application Support/graphql-ide`

## Contributing

Please file issues under GitHub, or submit a pull request if you'd like to directly contribute.

## Screenshots

### Execute Queries

![Execute queries]

### Custom Headers

![Custom headers]

### Environment Variables for Dynamic Headers

![Custom headers]

### Manage Projects

![Manage projects]


[0]: https://github.com/redound/graphql-ide/releases
[GraphiQL]: https://github.com/graphql/graphiql
[Electron]: https://electron.atom.io/
[Execute queries]: https://raw.githubusercontent.com/tklovett/graphql-ide/readme/assets/screenshot-1.png
[Custom headers]: https://raw.githubusercontent.com/tklovett/graphql-ide/readme/assets/screenshot-2.png
[Custom headers]: https://raw.githubusercontent.com/tklovett/graphql-ide/readme/assets/screenshot-3.png
[Manage projects]: https://raw.githubusercontent.com/tklovett/graphql-ide/readme/assets/screenshot-4.png

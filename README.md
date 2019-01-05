# Hacker News Reader

Progressive web app for reading top hacker news stories - [View Demo](https://hn-reader.netlify.com/)

### Features

-   Infinite loading for hacker news stories
-   Works offline
-   Built-in caching support
-   Mobile compatible

### Lighthouse scores

![Lighthouse metrics](https://i.imgur.com/M6w2G3K.png)

### Development setup

```
git clone git@github.com:metagrover/hackernews.git
cd hackernews
yarn
yarn start
```

Development server runs at `http://localhost:8000`.

### Build setup

```
yarn
yarn build
```

Build is generated at `dist` (which is deployable).

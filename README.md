BookcaseApp is an app for iOS that lets users get familiar with New York Times hardcover fiction bestsellers, Project Gutenberg books and Wolne Lektury Books. Each book has its brief descrpion and book plot summary, some of them can be bought throug available links (New York Times) or downloaded for free (Wolne Lektury). Moreover, each book can be added to user's list of favourites. Additionally, users can add events, such as marking the day when they started reading a new book, due to available calendar. Moreover, users have an opportunity to create their own accounts in order to create, modify, delete personal lists of books.

!! At this point, adding books to lists is not yet available. !!

## Instalacja:

1. [Instalacja narzędzi niezbędnych dla React Native](https://reactnative.dev/docs/set-up-your-environment)
2. Instalacja bibliotek

```bash
cd repo
yarn install && yarn cache clean
cd ios && pod install
```

## Czyszczenie bibliotek:

```bash
cd repo
rm -rf node_modules && rm -rf yarn.lock
yarn install && yarn cache clean
cd ios && rm -rf Pods && rm -rf Podfile.lock
pod install

```

## Uruchomienie wersji dev:

```bash
cd repo
yarn start --reset-cache
open Xcode and run application on chosen device
```

## Debug

Aplikacja wykorzystuje bibliotekę Reactotron do obserwacji API response, redux state oraz async storage.

1. [Reactotron - instalacja](https://docs.infinite.red/reactotron/)

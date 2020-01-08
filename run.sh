#!/usr/bin/bash

rm -rf node_modules/
yarn install --dev
yarn build
yarn start

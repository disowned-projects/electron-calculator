#! /usr/bin/env bash

rimraf "release-builds"
mkdir "release-builds"
electron-packager ./ --all --out=release-builds --overwrite=true --asar=true \
    --download=false
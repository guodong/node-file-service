# node-file-service
File service over http

[![view on npm](http://img.shields.io/npm/v/node-file-service.svg)](https://www.npmjs.org/package/node-file-service)

## Install

```sh
$ npm install -g node-file-service
```

## Usage

```sh
$ node-file-service
```

## Available Options:

`-p` Port to use (defaults to 8000)

`-d` Storage folder to use (defaults to './')

## API Reference

### Save file

```sh
$ curl -F "file=@/home/user/Desktop/test.jpg" \
    localhost:8000/test.jpg
```

### Get file

```sh
$ curl localhost:8000/test.jpg
```
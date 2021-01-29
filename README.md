# Disappearing params bug nextjs

## Launch
```shell
npm install && npm start
```

## Description
The bug appears if you specify in the Link component a href like `"/params?a=1"` to the page,
which props are received via getServerSideProps, and fetch of the corresponding json file with props fails.

## How to repoduce
1. Launch project
2. Open link on the main page that leads to `"/params?a=1"`
3. Page opens without any params in url. 
As we can see, next requests corresponding json file, and when it fails, next navigates to page directly 
without any params.
   

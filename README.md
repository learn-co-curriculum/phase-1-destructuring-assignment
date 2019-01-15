# Destructuring Assignment

## Learning Goals

- Use destructuring to assign data to variables

## Introduction

As developers, sometimes we receive information and we don't know exactly how
it's going to come in, how much is going to come in, or exactly what's going to
be contained within it, but there's going to be some part of it that's going to
be predictable, and _that's_ that part of it that we want to parse and deal
with. This is especially helpful in cases where we might get pieces of data that
are required, such as name and email address, but also optional pieces of data,
such as phone number or Instagram username. This is where JavaScript
`destructuring` comes in. `destructuring` allows us to extract data from arrays,
objects, maps, and sets into their own variable. 


## Use Destructuring to Assign Data to Variables

Another use case where this is particularly helpful is with HTTP response headers. A normal HTTP response header looks like this:
```
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```


## SWBAT 2

## Conclusion

## Resources
[Destructuring assignment]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
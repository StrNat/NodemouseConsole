# NodemouseConsole

## Overview
ラズパイマウスV2向けのコンソールアプリです。

This Application is for [Raspberry Pi Mouse V2](https://www.rt-shop.jp/index.php?main_page=product_info&cPath=1348_1&products_id=3419).

## Getting started

開発用PCにソースをcloneしてから、Webブラウザで`index.html`を参照してください。

If you get a source and browse a `index.html` , you can use .

```
git clone https://github.com/StrNat/NodemouseConsole.git
```

## Setting 

`js/setting.js`に接続先のラズパイマウスのIPアドレスを指定してください。

Please change your mouse's IP address on `js/setting.js`.

```js
var NODEMOUSE_IPADDR = "0.0.0.0";  //0.0.0.0 is default.
var SOCKET_IO_PORT = "8080";    //this number is default.
```

## Caustion

内部で利用しているsocket.ioはCDNで取得しています。オフライン時には利用できないため、インターネット環境がない場合は、提供元から取得し、`index.html`上の参照先を変更してください。

`socket.io` is getting by CDN, thus you cannot use in offline.
If you get a source code from [here](https://github.com/socketio/socket.io/releases) and change reference destination on `index.html`, you can use it.
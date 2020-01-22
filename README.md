# youdao-note-electron（有道云笔记Linux版）

Mac OS X 和 Linux 下更好用的有道云笔记客户端。使用Electron构建。<img src="assets/icon.png" alt="logo" height="64" align="right" />

## 下载已经打包好的应用
[有道云笔记-Electron Linux 64位版本](https://github.com/jamasBian/youdao-note-electron/releases/download/1.1.1/Youdao-Note-Electron-linux-x64.zip)

[有道云笔记-Electron MacOSX 版本](https://github.com/jamasBian/youdao-note-electron/releases/download/1.1.1/Youdao-Note-Electron-darwin-x64.zip)

## 如何使用：

```bash
# Clone this repository
git clone https://github.com/jamasBian/youdao-note-electron.git
# Go into the repository
cd youdao-note-electron
# Install dependencies and run the app
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install 
cp ./assets/icon.png ./node_modules/_electron@4.1.1@electron/dist/resources/
npm start
```

## 根据你的平台打包应用

``` shell
npm run build:osx
npm run build:linux
npm run build:win
```



## 解决图标的问题。
cp ./assets/icon.png ./node_modules/_electron@4.1.1@electron/dist/resources/
#### License [CC0 (Public Domain)](LICENSE.md)

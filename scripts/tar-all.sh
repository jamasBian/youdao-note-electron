#!/bin/bash

APP_NAME="Youdao-Note-Electron"
cd dist
echo 'Start compressing for Linux x64.'
tar zcf "$APP_NAME-linux-x64.tar.gz" "$APP_NAME-linux-x64"
echo 'Compressing for Linux x64 succeed.'

echo 'Start compressing for Linux ia32.'
tar zcf $APP_NAME-linux-ia32.tar.gz $APP_NAME-linux-ia32
echo 'Compressing for Linux ia32 succeed.'

echo 'Start compressing for MAC OSX.'
zip -r -q $APP_NAME-darwin-x64.zip $APP_NAME-darwin-x64
echo 'Compressing for MAC OSX succeed.'

echo 'Start compressing for Windows 64-bit.'
zip -r -q $APP_NAME-win32-x64.zip $APP_NAME-win32-x64
echo 'Compressing for Windows 64-bit succeed.'

echo 'Start compressing for Windows 32-bit.'
zip -r -q $APP_NAME-win32-ia32.zip $APP_NAME-win32-ia32
echo 'Compressing for Windows 32-bit succeed.'
cd ..

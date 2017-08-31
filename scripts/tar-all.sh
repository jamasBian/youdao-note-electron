#!/bin/bash


cd dist
mkdir ../releases/
echo 'Start compressing for Linux x64.'
tar zcf 'DingTalk-Electron-linux-x64.tar.gz' 'DingTalk-Electron-linux-x64'
mv DingTalk-Electron-linux-x64.tar.gz ../releases
echo 'Compressing for Linux x64 succeed.'

echo 'Start compressing for Linux ia32.'
tar zcf 'DingTalk-Electron-linux-ia32.tar.gz' 'DingTalk-Electron-linux-ia32'
mv DingTalk-Electron-linux-ia32.tar.gz ../releases
echo 'Compressing for Linux ia32 succeed.'

cd ..

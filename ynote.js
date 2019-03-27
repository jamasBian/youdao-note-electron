const shell = require('electron').shell;

const injectCSS = `div#layout-main{width:100%;flex:0 1 auto;height:100%}
div#layout-container{width:100%;height:100%}
div#body{height:100%}`;

function getParameterByName(url, name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

newWindow =function (e) {
  e.defaultPrevented = true;
  var url = getParameterByName(e.url, 'requrl');
  if (url.length > 1) {
    //shell.openExternal(url);
    if(url.indexOf("succ.html")>=0)
      webview.loadURL("https://note.youdao.com/web/")
    else
      webview.loadURL(url);
  } else {
    //shell.openExternal(e.url);
    if(e.url.indexOf("succ.html")>=0)
      webview.loadURL("https://note.youdao.com/web/")
    else
      webview.loadURL(e.url);
  }
};

checkUrl =function (e) {
  console.log(e.url)
  if(e.url.indexOf("succ.html")>=0)
    webview.loadURL("https://note.youdao.com/web/")
};

onload = function () {
  var webview = document.getElementById("webview");
  webview.addEventListener('dom-ready', function () {
    // overwrite css style. make it fullscreen.
    console.log(webview);
    const path = require('path');
    const imgPath = path.join(process.resourcesPath, '/icon.png')
    console.log(imgPath);
    webview.insertCSS(injectCSS);
    // inject js to trigger if there is new message in.
    // webview.executeJavaScript('injectJS.getBadge()');
    webview.addEventListener('new-window', newWindow);
    webview.addEventListener('did-navigate', checkUrl);
  });

  
};

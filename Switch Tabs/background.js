function getDomain(name){
switch (name) {
    case "Google":
      return "http://www.google.com/";
  case "Facebook":
	return "http://www.facebook.com/";
  case "Twitter":
	return "https://www.twitter.com";

	}

}

function openMyPage(message) {
var domain = getDomain(message.name);
  chrome.tabs.create({
     "url": chrome.extension.getURL(domain)
   });
}

chrome.runtime.onMessage.addListener(openMyPage);
searchWikipedia = query => {
  const searchPhrase = query.selectionText;
  const language = window.navigator.language.substring(0, 2);
  chrome.tabs.create({
    url: `https://${language}.wikipedia.org/wiki/${searchPhrase}`
  });
};

chrome.contextMenus.create({
  title: "Search Wikipedia",
  contexts: ["selection"],
  onclick: searchWikipedia
});

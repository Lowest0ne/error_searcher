function currentTab( tab ) {
  chrome.tabs.sendMessage(tab.id, {}, function( response )
  {
    alert(response);
  });
}


function onEvent() {
  chrome.tabs.getSelected(null, currentTab );
}



document.addEventListener('DOMContentLoaded', onEvent );



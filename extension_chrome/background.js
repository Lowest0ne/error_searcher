document.addEventListener('DOMContentLoaded',
  function(){ chrome.tabs.getSelected( null,
  function(tab){
    chrome.tabs.sendMessage( tab.id, {},
    function( response )
    {
      alert( response );
    });
  });
});



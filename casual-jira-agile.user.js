// ==UserScript==
// @name       Casual JIRA Agile
// @namespace  https://github.com/waysaku/casual-jira-agile
// @version    0.1
// @descriptionDesign Theme for JIRA Agile 
// @author     waysaku
// @include      https://jira.*
// @grant      none
// ==/UserScript==

(function(d) {
  var timerid = setInterval(function() {
    try {
      var issues = document.getElementsByClassName('ghx-issue');
      if(issues.length <= 0) {
          return;
      }
      for(var i = 0; i < issues.length; i++) {
        var grabber = issues[i].getElementsByClassName('ghx-grabber');
        var background = grabber[0].style['background'];
        issues[i].style.background = background;
      }
      
      var headings = document.getElementsByClassName('ghx-heading');
      for(var i = 0; i < headings.length; i++) {
      	headings[i].style.background = 'Linen';
  	    headings[i].style['font-size'] = '30px';
      }
      
      var columnHeaders = document.getElementsByClassName('ghx-column-headers');
      var columns = columnHeaders[0].getElementsByClassName('ghx-column');
      for(var i = 0; i < columns.length; i++) {
      	columns[i].style.background = '#24901b';
          columns[i].style['text-align'] = 'center';
          columns[i].getElementsByTagName('h2')[0].style.color = '#FFF';
      }
      
  		var issueFields = document.getElementsByClassName('ghx-issue-fields');
      for(var i = 0; i < issueFields.length; i++) {
      	issueFields[i].style['padding-right'] = '60px';
      }
      
  		var avatarImgs = document.getElementsByClassName('ghx-avatar-img');
      for(var i = 0; i < avatarImgs.length; i++) {
      	avatarImgs[i].style.height = '60px';
  	    avatarImgs[i].style.width= '60px';
      }
    } catch(e) {
      if(e.message != "Cannot read property 'style' of undefined") {
        throw e;
      }
    }
  }, 200);
}(document));

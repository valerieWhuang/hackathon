const codeToRun = (id) => `
  if ("${id}" === "doggify") {
    const images = document.querySelectorAll('img');

    for (const image of images) {
      image.src="https://nationaltoday.com/wp-content/uploads/2020/02/doggy-date-night.jpg";
    }
  } else if ("${id}" === "rainbowify") {
    const images = document.querySelectorAll('img');

    for (const image of images) {
      image.src="https://secure.img1-fg.wfcdn.com/im/19599335/resize-h800%5Ecompr-r85/4271/42718035/Rainbow+Wall+Decal.jpg";
    }
  } else if ("${id}" === "dark-mode") {
    // document.body.classList.add('dark-mode-font');
    const all = document.getElementsByTagName('*');
    for (let i=0, max=all.length; i < max; i++) {
      all[i].style.color = "white";
      all[i].style.backgroundColor = "#121212";
    }
  }
  else {
    // document.body.style.backgroundColor="${id}";
    const all = document.getElementsByTagName('*');
    for (let i=0, max=all.length; i < max; i++) {
      all[i].style.color = 'black';
      all[i].style.backgroundColor = "${id}";
    }
  }
  
`;

function click(e) {
	  chrome.tabs.executeScript(null,
        {code: codeToRun(e.target.id)},
    );
	  window.close();
	}
	
	document.addEventListener('DOMContentLoaded', function () {
	  var divs = document.querySelectorAll('div');
	  for (var i = 0; i < divs.length; i++) {
	    divs[i].addEventListener('click', click);
	  }
  });
  
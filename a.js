fetch("https://raw.githubusercontent.com/isa-gultekin/isa-gultekin/main/index.html").then(response=>response.text()).then(html=>document.body.innerHTML=html);

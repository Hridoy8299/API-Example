

const loadQuote = ()=> {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQoute(data))
}

const displayQoute = qoute => {
   const blocCode = document.getElementById('qoute');
   console.log(qoute);
   blocCode.innerText=qoute.quote;
}
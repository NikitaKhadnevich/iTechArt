//---SubTask---Г
//В функции demoGithubUser замените рекурсию на цикл, используя async/await.//

let result = document.getElementById('result')

class HttpError extends Error {
   constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
   }
}

async function loadJson(url) {
   let response = await fetch(url)
   if (response.status == 200) {
      const responses = await response.json()
      console.log(responses)
      return responses
   } else {
      throw new HttpError(response)      
   }
}

async function demoGithubUser() {
   let user; // Added accumulator
   while(true) { // Started main "infinity" - anyway call prompt (because true arg)
   const name = prompt('Login?',  '');
      try {
         user = await loadJson(`https://api.github.com/users/${name}`)
         break; // Its important! will have stoped cycle while we will recieve result from loadJson-callback
      } catch (err) {
         if (err instanceof HttpError && err.response.status == 404) {
            alert("We can’t find such user."); // Add error if 404
         } else { //Add error if otherwise
            throw err
         }
      }
   }
alert(`Full name: ${user.name}`);
return user // 'build user'
}

async function render() {
  let max = await demoGithubUser(); //await data-user from demoGIthubUSer 
  let DATAJSON = JSON.stringify(max); // Parse JSON
  result.innerHTML = `<pre>${DATAJSON}</pre>`; //Put json to html
}
render() //Run render
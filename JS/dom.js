const form = document.querySelector("form");


const fetchGitHubUserAndTemperature = async (username) => {
    try {
      //fetch name and location from github
      const githubRes = await fetch(`https://api.github.com/users/${username}`);
      const githubData = await githubRes.json();
      const name = githubData.name;
      const location = githubData.location;
      //fetching temperature from weather api
      const weatherRes = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=d17f02981bb5465b8ca23846241906&q=${location}`
      );
      const weatherData = await weatherRes.json();
      const tempInCelcius = weatherData.current.temp_c;

      //adding to ul in index.html file
      const ul =document.querySelector('ul');
      ul.innerHTML=`<li>Name: ${name}</li> \n<li>Location: ${location}</li>\n<li>Temperature: ${tempInCelcius}</li>`

    } catch (err) {
      console.log(err);
    }
  };

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("input").value;
  fetchGitHubUserAndTemperature(username);
});
const tasks =["learn html", "learn larabell", "learn php"];
const deleteTask = (indexToBeDeleted) => {
  tasks.splice(indexToBeDeletd)
};

const updateTask = (index,updatedTask) => {
  tasks(index)=updatedTask;
};

const addTask = (newTask) => {
  tasks.push(newTask)
};

const readTask = () => {
  tasks.forEach((task)=>{
    console.log(task);
  });
};

// readTask() => task list console
// updateTask(index, value) => a[0] => learn php
// deteTask(index)
// addTask(value)
addTask("learn java")
readTask();
deleteTask(3);

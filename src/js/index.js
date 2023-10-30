let users = [];

async function init() {
  await getUsers();
  initTable();
}

init();

async function getUsers() {
  let res = await fetch("https://randomuser.me/api/?results=20").then(function (
    response
  ) {
    return response.json();
  });
  res.results.forEach((element) => {
    users.push(element);
  });
  //   users.push(res);
}

async function initTable() {
  for (let index = 0; index < users.length; index++) {
    let obj = `<div class="border border-1">`;
    const element = users[index];
    if (element.gender == "male") {
      obj += `<i class="bi bi-gender-male" style="color: blue;"></i>`;
    } else {
      obj += `<i class="bi bi-gender-female" style="color: pink;"></i>`;
    }
    // obj += `<p>` + element.gender + `</p>`;
    obj +=
      `<div class="icon"><img src="` +
      element.picture.medium +
      `" style="border-radius:50%"/></div>`;
    obj += `<h4>` + element.name.first + " " + element.name.last + `</h4>`;
    obj +=
      `<a href="mailto:` +
      element.email +
      `" class="text-decoration-none text-black">` +
      element.email +
      `</a>`;
    obj +=
      `<p> Inscrit depuis ` +
      parseInt(
        (new Date().getTime() - new Date(element.registered.date).getTime()) /
          (1000 * 3600 * 24) // On divise par le nombre de millisecondes
      ) +
      ` jours </p>`;
    obj += `</div>`;
    document.querySelector("#portfolio").innerHTML += obj;
  }
}

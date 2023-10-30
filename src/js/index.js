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
    let obj = `<div class="col-lg-4 col-sm-6 border border-1">`;
    const element = users[index];
    if (element.gender == "male") {
      obj += `<i class="bi bi-gender-male"></i>`;
    } else {
      obj += `<i class="bi bi-gender-female"></i>`;
    }
    // obj += `<p>` + element.gender + `</p>`;
    obj +=
      `<div class="icon"><img src="` +
      element.picture.medium +
      `" style="border-radius:50%"/></div>`;
    obj += `<h4>` + element.name.first + " " + element.name.last + `</h4>`;
    obj += `<a href="mailto:` + element.email + `">` + element.email + `</a>`;
    obj += `</div>`;
    document.querySelector("body").innerHTML += obj;
  }
}

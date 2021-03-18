/* eslint-disable no-console */
import "./index.css";
import { deleteUsers, getUsers } from "./services/user.service";

getUsers().then((users) => {
  let body = "";
  users.forEach((user) => {
    body =
      body +
      `
    <tr>
    <td><a href = "#" data-id = "${user.id}" class = "deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>
    `;
  });
  global.document.getElementById("users").innerHTML = body;
  const deleteLinks = global.document.getElementsByClassName("deleteUser");
  Array.from(deleteLinks, (link) => {
    link.onclick = (event) => {
      const element = event.target;
      event.preventDefault();
      deleteUsers(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});

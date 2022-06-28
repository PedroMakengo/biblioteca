//Botão para adicionar
const btn = document.getElementById("btnSubmit");

// Inputs
let inputFirstName = document.getElementById("firstName");
let inputLastName = document.getElementById("lastName");
let inputGroup = document.getElementById("turma");

// tbody
let tbody = document.getElementById("tbody");

// Inicializando a minha array de objetos
const usersStudents = [
  { firstName: "Esperdião", lastName: "Bastos", group: "A2" },
];

// Listar usuários
function listarUsuarios() {
  for (let user of usersStudents) {
    tbody.innerHTML = `
        <tr>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.group}</td>
          <td>
            <a href="#">Ver |</a>
            <a href="#">Remover</a>
          </td>
        </tr>
    `;
  }
}
listarUsuarios();

// Adicionar usuários
function adicionarUsuario(event) {
  event.preventDefault();

  // Pegando valores adicionados pelo usuario
  let firstName = inputFirstName.value;
  let lastName = inputLastName.value;
  let group = inputGroup.value;

  // Adicionando os dados do input no objeto user
  let user = { firstName, lastName, group };

  // Verificando se existe um usuário com o mesmo nome
  const usersExist = usersStudents.find(
    ({ firstName }) => firstName === user.firstName
  );

  if (usersExist) {
    alert("Existe um usuário");
    return;
  }
  // Adicionar no meu array os usuários
  usersStudents.push(user);

  for (let user of usersStudents) {
    tbody.innerHTML += `${user.firstName}`;
  }

  console.log(usersStudents);

  // Fazendo um reset nos meus dados
  inputFirstName.value = "";
  inputLastName.value = "";
  inputGroup.value = "";
}

btn.addEventListener("click", adicionarUsuario);

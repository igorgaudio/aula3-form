const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  alert(
    `Nome: ${
      firstname + " " + lastname
    } E-mail: ${email} Mensagem:${message} Gênero:${gender}`
  );
});

console.log("Digite uma palavra");
let palavra = "";
process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();
  if (!palavra) {
    palavra = entrada_usuario;
    palavra = palavra.split("");
  }
  console.log(palavra);
});
for (let i = 0; i < palavra.length; i++) {
  for (let j = i + 1; j < palavra.length; j++) {}
}

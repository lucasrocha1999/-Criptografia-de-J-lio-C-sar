import "dotenv/config";
import fs from "fs";
import path from "path";
import cripto from "./utils/cripto";
import decipher from "./utils/decipher";
import { submit } from "./utils/submit";
import { generateData } from "./services/api";

(async function() {
  // Requisição do Desafio
  const value = await generateData.get();
  // Salvando o retorno da requisição no arquivo "answer.json"
  const saveData = JSON.stringify(value.data);
  fs.writeFileSync(path.resolve("answer.json"), saveData, "utf8", err => {
    console.log(err);
  });
  // Decifrando o texto, e armazenando no "answer.json"
  const deciphered = decipher(value.data.numero_casas, value.data.cifrado);
  // Atualizando o arquivo JSON
  let read = fs.readFileSync(path.resolve("answer.json"), "utf8");
  let json = JSON.parse(read);
  json.decifrado = deciphered;
  fs.writeFileSync(
    path.resolve("answer.json"),
    JSON.stringify(json),
    "utf8",
    err => {
      console.log(err);
    }
  );
  // gerar um resumo criptográfico do texto decifrado
  const crypted = cripto(deciphered);
  // Atualizando o arquivo JSON
  json.resumo_criptografico = crypted;
  fs.writeFileSync(
    path.resolve("answer.json"),
    JSON.stringify(json),
    "utf8",
    err => {
      console.log(err);
    }
  );
  // Enviando o desafio
  submit();
})();

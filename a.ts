// TS (type script) é um JS melhorado

interface DadosDeEnvioEmail {
  para: string;
  id: string;
  assunto: string;
  texto: string;
}

function enviarEmail ({ para, id, assunto, texto }: DadosDeEnvioEmail) {
  console.log (para, id, assunto, texto)
}

class EnviarEmailParaUsuario {
  send () {
    enviarEmail ({
      para: "hillary@gmail.com",
      id: "123",
      assunto: "oi",
      texto: "tudo bem?"
    })
  }
}

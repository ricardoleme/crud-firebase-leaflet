# CRUD Firebase com Leaflet 🌿🗺

Um projeto de exemplo para demonstrar um aplicativo CRUD (Create, Read, Update, Delete) usando Firebase e Leaflet.

## Visão Geral 📝

Este projeto é um exemplo de como criar um aplicativo de mapeamento simples que permite adicionar, visualizar, atualizar e excluir marcadores em um mapa Leaflet, com armazenamento de dados usando o Firebase Realtime Database.

## Recursos 🛠️

- Adicione marcadores com informações personalizadas.
- Visualize marcadores existentes no mapa.
- Atualize informações de marcadores existentes.
- Exclua marcadores do mapa.

## Configuração 🔧

- [ ] Inicialmente clone o projeto; 
- [ ] Acesse https://firebase.google.com e crie um novo projeto Web.
- [ ] Edite o arquivo `js/firebase.js` e cole nele as informações de conexão apresentadas pelo Firebase.
- [ ] Acesse Realtime Database e em regras, informe que apenas usuários autenticados terão direito de acesso (escrita e leitura) aos dados:
```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

## Uso 🚀

Para executar o aplicativo, abra o arquivo `index.html` em seu navegador. Você poderá adicionar, visualizar, atualizar e excluir marcadores no mapa.

## Contribuição 🤝

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas e enviar solicitações de pull para melhorar este projeto.

## Licença 📜

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---

Feito com ❤️ por [Prof. Ricardo Leme](https://github.com/ricardoleme)

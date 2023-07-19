- Geral
    - [x]  A porta utilizada pelo seu servidor deve ser a 5000 (isso facilita nossa avaliação 🙂).
    - [x]  Versionamento usando Git é obrigatório. Crie um **repositório** no seu perfil do GitHub.
    - [ ]  Faça commits a cada funcionalidade implementada.
    - [x]  Utilize dotenv.
    - [ ]  O deploy da API deve ser feito no Render e do banco no MongoDB Atlas.


-ENDPOINTS

- **POST** `/poll`
    - [X]  Deve receber pelo body da request, um parâmetro title, contendo o nome da enquete a ser cadastrada e expireAt, contendo a data e hora de expiração da enquete:
    
    ```jsx
    {
        title: "Qual a sua linguagem favorita?",
    		expireAt: "2022-02-28 01:00" 
    }
    ```
    
- [X]  **Title** não pode ser uma string vazia, retornar status 422.
- [X]  Se **expireAt** for vazio deve ser considerado 30 dias de enquete por padrão.
- [X]  Deve retornar a enquete criada em caso de sucesso com status 201.

- **GET** `/poll`
    - [x]  Retorna a lista de todas as enquetes:
     ```jsx
        [{
            _id: "54759eb3c090d83494e2d222",
        title: "Qual a sua linguagem favorita?",
            expireAt: "2022-02-28 01:00" 
        },]
```
	

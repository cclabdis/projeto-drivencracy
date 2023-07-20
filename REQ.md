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
    - [X]  Retorna a lista de todas as enquetes:
     ```jsx
        [{
            _id: "54759eb3c090d83494e2d222",
        title: "Qual a sua linguagem favorita?",
            expireAt: "2022-02-28 01:00" 
        },]```
	
- **POST** `/choice`
    - [X]  Deve receber pelo body da request, um parâmetro title, contendo o nome da opção a ser cadastrada e pollId.
        
        ```jsx
        {
            title: "JavaScript",
        	pollId: "54759eb3c090d83494e2d222",
        }
        ```
        
    - Validação:
        - [X]  Uma opção de voto não pode ser inserida sem uma enquete existente, retornar status 404.
        - [X]  **Title** não pode ser uma string vazia, retornar status 422.
        - [X]  **Title** não pode ser repetido, retornar status 409.
        - [X]  Se a enquete já estiver expirado deve retornar erro com status 403.
    - [X]  Deve retornar a opção de voto criada em caso de sucesso com status 201.

   
- **GET** `/poll/:id/choice`
    - [ ]  Retorna a lista de opções de voto de uma enquete:
    
    ```jsx
    [
    	{
    		_id: "54759eb3c090d83494e2d999",
    		title: "Javascript",
    		pollId: "54759eb3c090d83494e2d222" 
    	 },
    	{
    		_id: "54759eb3c090d83494e2d888",
    	  title: "Python",
    		pollId: "54759eb3c090d83494e2d222"
    	},
    	...
    ]
    ```
    
    - [X]  Validação: caso a enquete não exista deve retornar status 404.
- **POST** `/choice/:id/vote`
    - [X]  Não recebe nenhum dado do body da requisição. Deve registrar um voto na opção selecionada.
    - [X]  O voto deve armazenar a data e hora que foi criado no back-end.
    - Validações:
        - [X]  Verificar se é uma opção existente, se não existir retornar 404.
        - [X]  Não pode ser registrado se a enquete já estiver expirado, retornar erro 403.
    - [X]  Retorna status 201 em caso de sucesso.
- **GET** `/poll/:id/result`
    - [ ]  Retorna o resultado de uma enquete, ou seja, a opção de voto **mais votada** na enquete até o momento, seguindo o formato sugerido:
    
    ```jsx
    {
    	_id: "54759eb3c090d83494e2d222",
    	title: "Qual a sua linguagem de programação favorita?"
    	expireAt: "2022-02-14 01:00",
    	result : {
    		title: "Javascript",
    		votes: 487
    	}
    }
    ```
    
    - [ ]  Validação: caso a enquete não exista deve retornar status 404.
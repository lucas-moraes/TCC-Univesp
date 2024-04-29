<img src="https://user-images.githubusercontent.com/50468352/141820811-412e9364-7f5c-4889-826a-fcba23b92e23.png" width="350" />
<h3>Desenvolvimento de prova de conceita para TCC Olhos da justiça</h3>

**Polo: Formosa** </br>


| Integrantes do grupo:                 |
| :------------------------------------ |
|ALESSANDRO LOZANO, RA 2006019|
|ANDERSON DOS SANTOS, RA 2015130|
|CAMILA FANELLI, RA 2006636|
|CRISTIAM VASQUES, RA 2000904|
|DAVID MACHADO AMARAL, RA 2015907|
|FERNANDO HENRIQUE GARCIA, RA 2007613|
|LUCAS MORAES DA SILVA, RA 2005237|

</br>

<h4> 📚 Projeto de consulta de perfis via reconhecimento facial </h4>

<br/>

<h3>Estrutura do projeto</h3>
<p>A estrutura do projeto consiste em uma API (backend), ao qual tem a implementação de uma biblioteca de IA para reconhecimento facial em javaScript denominada FaceAPI, um banco de dados não relacional MongoDB e uma interface de usuário desenvolvida com JavaScript (usando a biblioteca base ReactJS).</p>


<h3>Backend (API)</h3>
<p>A API foi desenvolvida utilizando o padrão de projeto Clean Architecture, que tem como finalidade manter a organização do código de forma que seja de fácil entendimento, altamente testável e com alta escalabilidade para futuras novas melhorias e implementações, tendo como principal foco o desacoplamento de suas partes, para caso houver a necessidade da troca de bibliotecas, não ter grande demanda de atualização de outras partes do sistema. </p>

<p>A estrutura do projeto é organizada conforme imagem abaixo: </p>
<img src="https://private-user-images.githubusercontent.com/50468352/324297752-c26bdd3e-f55c-4e1a-8bf6-2b4925191d3b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQzNTUxMTksIm5iZiI6MTcxNDM1NDgxOSwicGF0aCI6Ii81MDQ2ODM1Mi8zMjQyOTc3NTItYzI2YmRkM2UtZjU1Yy00ZTFhLThiZjYtMmI0OTI1MTkxZDNiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDI5VDAxNDAxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVlMjA1MWUwNTllOGI0ODlhYjY2ZjU3NDMwNWJlNjgzMzg3Njc4MDI1Yzk4MDBlNjQ5NmE4NzBmZDRlM2Q4ZjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.fZatQutVkbDbqZxypT3YS8CXv1stgZb7XoOFwDdc7x4" />

<h3>Frontend (Interface para o usuário)</h3>
<p>A interface foi desenvolvida utilizando o padrão de projeto Atomic Design, esse padrão consiste em organizar os diversos componentes que compõem a interface de acordo a sua complexidade de forma molecular, partindo de átomos para os menos componentes, moléculas para componentes que são compostos por componentes átomos assim por diante. </p>

<p>Para melhor entendimento, podemos esboçar a estrutura do projeto com o diagrama abaixo: </p>
<img src="https://private-user-images.githubusercontent.com/50468352/324297748-b54ff89a-e347-4559-a761-cc1247befc16.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQzNTUxMTksIm5iZiI6MTcxNDM1NDgxOSwicGF0aCI6Ii81MDQ2ODM1Mi8zMjQyOTc3NDgtYjU0ZmY4OWEtZTM0Ny00NTU5LWE3NjEtY2MxMjQ3YmVmYzE2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDI5VDAxNDAxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdmYzhhY2IyOGJjM2FkMDMyZmE0NzkzZjA3ZjcwYzlkYmY5ZDVmNGY1ZDM5ZDJmZjRjYzgyM2VjZTQ5ODQzZDUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.9C0rKQeNHA0cNKvLEdf2mFDNwGvw0KySKRo2NW1HCM8" />

<h3>Funcionamento do Sistema </h3>
<p>O Sistema captura uma imagem via interface, do perfil em tempo real de uma pessoa que vai ser consultada no banco de dados, após a captura, a imagem é convertida em byte-code de dados e são enviados para a API de reconhecimento facial, que avalia a imagem a fim de encontrar um rosto nela, e caso encontre, consulte o banco de dados, e ao reconhecer uma imagem enviar dos dados da imagem correspondente. </p>
<img src="https://private-user-images.githubusercontent.com/50468352/324297980-b4cfe7fa-3f9f-4d4c-8ec3-400ef9ecddb6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQzNTUxMTksIm5iZiI6MTcxNDM1NDgxOSwicGF0aCI6Ii81MDQ2ODM1Mi8zMjQyOTc5ODAtYjRjZmU3ZmEtM2Y5Zi00ZDRjLThlYzMtNDAwZWY5ZWNkZGI2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDI5VDAxNDAxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcxMzY3NzMxNmIzODQ2YTJmZTJiZDliZjgwNDU4OTgxNTQ1ZDAxYWZhYWMwM2E0NGFlYTlkNjVkODU2MGQ0NGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Qk0JqvMXF-D8-tz_kHkIqN50cu9xeyrj0Va0LdzZ8v4" />

<img src="https://user-images.githubusercontent.com/50468352/141820811-412e9364-7f5c-4889-826a-fcba23b92e23.png" width="350" />
<h3>Desenvolvimento de prova de conceito para TCC Olhos da justiça</h3>

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
<p>A segurança pública é um tema de grande relevância no Brasil, especialmente em um contexto de crescente criminalidade e violência urbana. Diante dessa realidade desafiadora, surge a necessidade de soluções inovadoras e eficientes que auxiliem na prevenção e combate ao crime.
Neste trabalho, apresentamos a proposta de desenvolvimento de um sistema inovador denominado "Os Olhos da Justiça". A solução se baseia em uma plataforma tecnológica que utiliza inteligência artificial e reconhecimento facial para auxiliar na identificação de pessoas em tempo real, permitindo a verificação de pendências com a justiça de forma rápida e precisa.
</p>

<h4>Estrutura do projeto</h4>
<p>A estrutura do projeto consiste em uma API (backend), ao qual tem a implementação de uma biblioteca de IA para reconhecimento facial em javaScript denominada FaceAPI, um banco de dados não relacional MongoDB e uma interface de usuário desenvolvida com JavaScript (usando a biblioteca base ReactJS).</p>

---
<details>
<summary> 🟡 [ clique ] - Backend (API)</summary>
<p>A API foi desenvolvida utilizando o padrão de projeto Clean Architecture, que tem como finalidade manter a organização do código de forma que seja de fácil entendimento, altamente testável e com alta escalabilidade para futuras novas melhorias e implementações, tendo como principal foco o desacoplamento de suas partes, para caso houver a necessidade da troca de bibliotecas, não ter grande demanda de atualização de outras partes do sistema. </p>
<p>A estrutura do projeto é organizada conforme imagem abaixo: </p>
<img src="https://github.com/lucas-moraes/TCC-univesp/assets/50468352/8d2a3ca4-88c2-4613-a4e0-3e6cc3afaced" />

<h2>Cobertura de testes</h2>
![Captura de tela de 2024-05-20 11-55-42](https://github.com/lucas-moraes/TCC-univesp/assets/50468352/cde991be-28d6-401b-9a79-53f764caae8a)

</details>

---

<details>
<summary> 🟡 [ clique ] - Frontend (Interface para o usuário)</summary>
<p>A interface foi desenvolvida utilizando o padrão de projeto Atomic Design, esse padrão consiste em organizar os diversos componentes que compõem a interface de acordo a sua complexidade de forma molecular, partindo de átomos para os menos componentes, moléculas para componentes que são compostos por componentes átomos assim por diante. </p>
<p>Para melhor entendimento, podemos esboçar a estrutura do projeto com o diagrama abaixo: </p>
<img src="https://github.com/lucas-moraes/TCC-univesp/assets/50468352/cdf938f9-2170-4b66-9e39-e2c7048c0348" />
</details>

---

<details>
<summary> 🟡 [ clique ] - Funcionamento do Sistema </summary>
<p>O Sistema captura uma imagem via interface, do perfil em tempo real de uma pessoa que vai ser consultada no banco de dados, após a captura, a imagem é convertida em byte-code de dados e são enviados para a API de reconhecimento facial, que avalia a imagem a fim de encontrar um rosto nela, e caso encontre, consulte o banco de dados, e ao reconhecer uma imagem enviar dos dados da imagem correspondente. </p>
<img src="https://github.com/lucas-moraes/TCC-univesp/assets/50468352/6f47de28-d0b8-4e55-95fe-4ec0af2886c5" />


</details>

---

<details>
<summary> 🟡 [ clique ] - Banco de dados e sistema de gerenciamento facial </summary>
<p>Optamos por deixar os dados baseados em um banco de dados não relacional, o MongoDB, pois guardando os dados em objetos fica mais facil o gerenciamento das imagens por perfil, e como não há a necessidade de relaciomentos entre tabelas, e também pela disponibilização de um banco de dados gratuito para testes disponbilizado pela Mongo Atlas.</p>
<img src="https://github.com/lucas-moraes/TCC-univesp/assets/50468352/2fe671af-ce94-472d-9bd7-2efda8c2e60c" />
<img src="https://github.com/lucas-moraes/TCC-univesp/assets/50468352/94d72cbd-a942-4a7c-ae27-d6746a245921" />

</details>

---

<h4>Como rodar o projeto</h4>
Para rodar o projeto será necessário utilizar algumas ferramentas:

- NodeJS
- Docker
- Mongo Compass

1. Abrir o terminal na pasta do projeto;
2. Executar o comando para subir o container docker, `docker compose up -d`;
3. Abrir outro terminal para rodar o backend, executar o comando `cd backend && npm install && npm run dev`;
4. abrir outro terminal para rodar o frontend, executar o comando `cd frontend && npm install && npm run dev`; 

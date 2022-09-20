# Challenge Oracle ONE - Sprint 01
Este projeto é o resultado do primeiro *challenge*/desafio desenvolvido na 3ª turma da #OracleNextEducation, apelidado por mim de "*(de)CODIFIQUE_*" :rocket:

### Prévia no GitHub Pages:
⛓️: https://aquamouzinho.github.io/Challenge-Oracle-ONE

## 📋 Sobre
Feito com HTML, CSS e Javascript esta aplicação tem por função codificar e decodificar mensagens de texto de maneira simples. Visando a troca de informações com outras pessoas de uma forma segura e divertida.

### 🛠 Como funciona? 
#### Codificação
Ao inserir a sua mensagem no campo de texto e pressionar o botão *codificar* a aplicação irá percorrer pelo o seu texto caracter por caracter em busca de substituir as vogais presentes pelos seguintes códigos pré-determinados:

1. "a" irá se converter para "ai"
2. "e" irá se converter para "enter"
3. "i" irá se converter para "imes"
4. "o" irá se converter para "ober"
5. "u" irá se converter para "ufat"

#### Decodificação
Nesse caso, a aplicação percorrerá na mensagem encriptada em busca das vogais verificando se os caracteres posteriores são os mesmos do código exposto acima. Em caso positivo, a aplicação irá substituir o termo identificado pela vogal respectiva.

#### Especificações
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve funcionar apenas com letras minúsculas

## ⌨️ Exemplos
1. Codificação:

| Entrada | Saída |
| ----------- | ----------- |
| `a fazenda se foi` | `ai faizenterndai senter foberimes` |
| `campo` | `caimpober` |
| `enumerar` | `enternufatmenterrair` |

2. Decodificação:

| Entrada | Saída |
| ----------- | ----------- |
| `fufatimes hoberjenter nai menterrcenterairimesai` | `fui hoje na mercearia` |
| `tailventerz enterufat fimesqufatenter enterm caisai` | `talvez eu fique em casa` |
| `vaizaimenterntobers` | `vazamentos` |

## 🎨 Layout 
Para este desafio foi disponibilizado pela ONE um modelo base no Figma, ficando a critério do aluno optar pela sua implementação ou não. Permitindo explorar a sua criatividade ao optar por não utilizar o modelo base.

Desse modo, a fim de explorar um novo visual para o projeto, elaborei um novo layout para o desafio me inspirando na estética vista no *set* de ilustrações ["Bubble Gum"](https://dribbble.com/shots/17576205-Bubble-gum) criado por Fruzka. Esta nova UI contou com todos os elementos do modelo base, porém repaginados com uma nova estética. 

| Layout disponibilizado | Layout Final |
| :---: | :---: |
| <img src="https://user-images.githubusercontent.com/42475699/183266602-eca6d5cd-2cfd-4c77-aa02-326f4df0d2a3.png" alt="layout disponibilizado" width="500px"> | <img src="https://user-images.githubusercontent.com/42475699/183266565-9b40b3fe-7fff-4d80-8d47-4efe5c42425e.png" alt="layout final" width="500px"> |

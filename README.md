# Challenge ONE Sprint 01
Este projeto, apelidado por mim de "*(de)CODIFIQUE_*", é o resultado do primeiro *challenge*/desafio desenvolvido na 3ª turma da #OracleNextEducation :rocket:

## Sobre
Feito com HTML, CSS e Javascript, esta aplicação tem por função codificar e decodificar mensagens de texto de maneira simples para trocar informações com outras pessoas de uma forma segura e divertida.

## Prévia no GitHub Pages:
Se você ficou com curiosidade para saber como ficou o trabalho final você pode seguir o link a seguir:
https://aquamouzinho.github.io/Challenge-Oracle-ONE

### Como funciona?
#### Codificação
Ao inserir a sua mensagem no campo de texto e pressionar o botão *codificar* a aplicação irá percorrer pelo o seu texto caracter por caracter em busca de substituir as vogais presentes pelos seguintes códigos pré-determinados:

1. "a" irá se converter para "ai"
2. "e" irá se converter para "enter"
3. "i" irá se converter para "imes"
4. "o" irá se converter para "ober"
5. "u" irá se converter para "ufat"

#### Decodificação
Com a mensagem encriptada e tendo noção de como cada vogal se comporta na encriptação o processo de decriptação se torna mais fácil!
Nesse caso, a aplicação percorrerá na mensagem encriptada em busca das vogais e irá verificar se os caracteres posicionados a sua frente são os mesmos do código exposto acima ou não. Portanto em caso positivo, a aplicação irá substituir esse termo identificado pela vogal respectiva.  

## Exemplos:
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

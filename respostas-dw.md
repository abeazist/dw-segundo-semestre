# RESPOSTAS DW

1) B
2) B
3) B
4) O Routes é o caminho que a requiseição irá seguir encontrando o método delete nele vai proseeguir para o controller de contatos e o controller fica responsável por receber a rerquisição delete, e receber o parametro id, para isso ele "chama" o service, camada responsável pela lógica, para verificicar se há esse id, e após isso ela chama o repository para ele acessar no bd e deletar o id que o usuário pediu. 
5) B
6) A
7) C
8) Porque, na etapa 2 o controller criava uma nova instância, que dependia do service, que também dependia do repository. Ao criar essas novas instãncias o acoplamento era muito forte. A injenção de dependência, é uma espécie de design padrao que as classes não criam mais as novas insatâncias, e sim as recebem. Diminuindo a dependencia entre as classes.
9) C
10) A
    
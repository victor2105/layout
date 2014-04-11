# [Istim Layout]

## Criando seu fork e enviando pull requests

Siga o passo a passo abaixo e repita os passos 5 a 12 para cada novo Pull Request.

1. Crie um fork do repositório [istim/layout](https://github.com/istim/layout/).

2. Clone seu fork (_usuario/layout_) no seu computador utilizando ```git clone```.

3. Faça as alterações localmente, e quando estiver tudo certo dê commit com ```git commit``` no branch master e envie as alterações para o github com ```git push origin master```.

5. Antes de criar um pull request, é recomendado que você faça um pull das alterações que já estão no repositório principal (_istim/layout_) para evitar problemas de merge. Para isso efetue os seguintes comandos:

    1. ```git checkout -b istim-layout-master```

    2. ```git pull https://github.com/istim/layout.git master```

6. Nesse momento, se houver conflitos de merge você verá a seguinte mensagem: _Automatic merge failed; fix conflicts and then commit the result_, e antes disso: _CONFLICT (content): Merge conflict in nomeDoArquivo_.

7. Pode haver mais de uma mensagem especificando arquivos com problemas no merge. Abra cada um deles e resolva os conflitos. Os conflitos são exibidos da seguinte forma:

    1. ```<<<<<<<<<<<<< HEAD```

    2. ```// seu código + suas alterações```

    3. ```===============  ```

    4. ```// codigo do repo principal```

    5. ```>>>>>>>>>>>>> ID DO COMMIT```

8. Você deve escolher qual código deve permanecer no repositório e qual deve sair. Lembre-se que isso será avaliado pelos outros grupos.

9. Depois você deve commitar as resoluções de conflit o com ```git commit```.

10. Agora você pode retornar para seu código, digitando ```git checkout master```. E juntar os dois códigos utilizando ```git merge istim-layout-master```.

11. Pode ser que ocorra algum conflito novamente, apenas repitas os passos 6 a 9.

12. Do lado direito do seu repositorio no github, clique em **Pull Requests [0]**, clique em **New Pull Request** (botão verde). Confira as alterações e clique em **Create Pull Request** (botão verde). Dê um titulo e uma descrição para o pull request (tente se bem específico) e confirme a criação clicando em **Send Pull Request**.



constnumeroSenha=document.querySelector(`.parametro-senha_texto`);
lettamanhoSenha=12;
numeroSenha.textContent=tamanhoSenha;
constletrasMaiusculas=´ABCDEFGHIJKLMNOPQRSTUVXYWZ´;
constletrasMinusculas=`abcdefghijklmnopqrstuvxyw`;
constnumeros=`123456789`;
constsimbolos=`!@%*?`;
constbotoes=document.querySelectorAll(`.parametro-senha_botao`);
constcampoSenha=document.querySelector(`#campo-senha`);
constcheckbox=document.querySelectorAll(`.checkbox`);
constforcaSenha=document.querySelector(`.forca`);


botoes[0].onclick=diminuiTamanho;
botoes[1].onclick=aumentaTamanho;


functiondiminuiTamanho(){
    if(tamanhoSenha>1){
        //tamanhoSenha=tamanhoSenha-1;
        tamanhoSenha--;

    }

    numeroSenha.textContent=tamanhoSenha;
    geraSenha();

}
functionaumentaTamanho(){
    if(tamanhoSenha<20){
        //tamanhoSenha=tamanhoSenha+1;
        tamanhoSenha++;
    
    }

    numeroSenha.textContent=tamanhoSenha;
    geraSenha();

}
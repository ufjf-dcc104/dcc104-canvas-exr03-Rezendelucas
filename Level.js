function Level (){
  this.canos = [];
  //this.music = true;
  //this.end = false;

}

Level.prototype.spawn = function(){
  var eixoX = 1100;
  var eixoY = Math.floor(Math.random() * 300 -200);
  var cano = new Canos;
      
      
  //posicao cano top
     cano.xTop = eixoX;
     cano.yTop = eixoY;
     
     cano.angleTop = 90;
          
  //colisao com o centro para pontuaçao
      cano.xCenter = eixoX;
      cano.yCenter = eixoY + 350;
      
         
  //posicao cano bot
      cano.xBot = eixoX;
      cano.yBot = eixoY + 200 + 500 ;  
    
  //key do asset dos canos      
      cano.imgkey = "canos";

this.canos.push(cano);  
};

Level.prototype.dispose = function(){
   this.canos.dispose; 
};

Level.prototype.mover = function (dt) {
    for (var i = 0; i < this.canos.length; i++) {
         this.canos[i].mover(dt);
    }
    this.deletaCanos();
};

Level.prototype.desenharImg = function (ctx,imageLib) {
    for (var i = 0; i < this.canos.length; i++) {
      this.canos[i].desenharImg(ctx,imageLib.images[this.canos[i].imgkey]);
      this.canos[i].desenharColisaoComPonto(ctx);
    }
};

Level.prototype.deletaCanos = function(){
  for (var i = 0; i < this.canos.length; i++) {
    if(this.canos[i].x1 < -200 ){
         this.canos.splice(i, 1);
    }
  }
};

Level.prototype.perseguirAng = function (alvo, dt) {
   for (var i = 0; i < this.canos.length; i++) {
     this.canos[i].perseguirAng(alvo,dt);
   }
 };

Level.prototype.colidiuComPonto = function (alvo,audload,key,vol, resolveColisao) {
    for (var i = 0; i < this.canos.length; i++) {
      if(this.canos[i].colidiuComPonto(alvo) && this.canos[i].point == true){
          resolveColisao(this.canos[i], alvo);
          this.canos[i].point = false;
          console.log("Pontuou");
      }
    }
};

Level.prototype.colidiuComCanos = function (alvo,audload,key,vol, resolveColisao) {
    for (var i = 0; i < this.canos.length; i++) {
      if(this.canos[i].colidiuComCanos(alvo)){
        resolveColisao(this.canos[i], alvo);
      }
    }
};




"use strict";(self.webpackChunkeCommerce=self.webpackChunkeCommerce||[]).push([[700],{6700:(M,p,a)=>{a.r(p),a.d(p,{CartModule:()=>v});var l=a(6895),s=a(9541),t=a(1571),C=a(910),d=a(8881),c=a(433);function g(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"li"),t._UZ(1,"img",6),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"label"),t._uU(8," Quantidade: "),t.TgZ(9,"input",7),t.NdJ("ngModelChange",function(i){const u=t.CHM(n).$implicit;return t.KtG(u.quantity=i)})("change",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.calcTotalValue())}),t.qZA()(),t.TgZ(10,"button",8),t.NdJ("click",function(){const m=t.CHM(n).$implicit,u=t.oxw(2);return t.KtG(u.removeItem(m.id))}),t._UZ(11,"i",9),t.qZA()()}if(2&e){const n=r.$implicit;t.xp6(1),t.Q6J("src",n.image,t.LSH),t.xp6(2),t.Oqu(n.description),t.xp6(2),t.hij("Pre\xe7o: ",t.xi3(6,4,n.price,"BRL"),""),t.xp6(4),t.Q6J("ngModel",n.quantity)}}function h(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"ul"),t.YNc(2,g,12,7,"li",3),t.qZA(),t.TgZ(3,"h2",4),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.buy())}),t._uU(7,"Comprar"),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.itemsCart),t.xp6(2),t.hij("Total: ",t.xi3(5,2,n.totalValue,"BRL"),"")}}function f(e,r){1&e&&t._uU(0,"Nenhum produto foi adicionado ao carrinho.")}const _=[{path:"",component:(()=>{class e{constructor(n,o,i){this.cart=n,this.route=o,this.snackBar=i,this.itemsCart=[],this.totalValue=0}ngOnInit(){this.itemsCart=this.cart.getCart(),this.calcTotalValue()}removeItem(n){this.itemsCart=this.itemsCart.filter(o=>o.id!==n),this.cart.removeCartItem(n),this.calcTotalValue()}calcTotalValue(){this.totalValue=this.itemsCart.reduce((n,o)=>n+o.price*o.quantity,0)}buy(){this.snackBar.open("Compra Realizada com Sucesso!","Ok",{duration:3e3,verticalPosition:"top",horizontalPosition:"center"}),this.cart.clearCart(),this.route.navigate(["products"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C.N),t.Y36(s.F0),t.Y36(d.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["noProducts",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],["alt","",3,"src"],["type","number","min","1",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-square-xmark"]],template:function(n,o){if(1&n&&(t.TgZ(0,"h2",0),t._uU(1,"Carrinho"),t.qZA(),t.YNc(2,h,8,5,"div",1),t.YNc(3,f,1,0,"ng-template",null,2,t.W1O)),2&n){const i=t.MAs(4);t.xp6(2),t.Q6J("ngIf",o.itemsCart.length>0)("ngIfElse",i)}},dependencies:[l.sg,l.O5,c.Fj,c.wV,c.JJ,c.qQ,c.On,l.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(_),s.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,x,c.u5]}),e})()}}]);
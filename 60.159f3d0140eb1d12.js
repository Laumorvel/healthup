"use strict";(self.webpackChunkhealthup=self.webpackChunkhealthup||[]).push([[60],{1060:(N,d,a)=>{a.r(d),a.d(d,{UserSettingsModule:()=>J});var p=a(9808),l=a(5358),t=a(1223),s=a(2382);const w=function(){return["general"]},c=function(e){return{user:e}},g=function(e){return{outlets:e}},m=function(e){return[e]},h=function(){return["changePassword"]};let Z=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-user-settings"]],decls:9,vars:16,consts:[[1,"my-4","mt-2"],[1,"navbar","navbar-light","justify-content-center","submenu"],[1,"form-inline"],["type","button",1,"btn","btn-outline-dark","btn-lg"],[1,"nav-link",3,"routerLink"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"nav",1),t.TgZ(2,"form",2),t.TgZ(3,"button",3),t.TgZ(4,"a",4),t._uU(5,"About"),t.qZA(),t.qZA(),t.TgZ(6,"button",3),t.TgZ(7,"a",4),t._uU(8,"Change Password"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(4),t.Q6J("routerLink",t.VKq(7,m,t.VKq(5,g,t.VKq(3,c,t.DdM(2,w))))),t.xp6(3),t.Q6J("routerLink",t.VKq(14,m,t.VKq(12,g,t.VKq(10,c,t.DdM(9,h))))))},directives:[s._Y,s.JL,s.F,l.yS],styles:["button[_ngcontent-%COMP%]{margin:.5rem}a[_ngcontent-%COMP%]{font-size:22px;font-weight:700}button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#fff}"]}),e})(),v=(()=>{class e{constructor(){}ngOnInit(){this.cargaDatos()}cargaDatos(){this.user=JSON.parse(localStorage.getItem("user"))}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-general"]],decls:30,vars:4,consts:[[1,"row","mx-5","my-5","contenido"],[1,"title","text-center","mt-3"],[1,"col-md-5"],[1,"row","mt-5"],[1,"col-md-8"],["src","../../../assets/img/foto_perfil.jpg","alt","You",1,"imagen"],[1,"divUpload","col-md-3"],["alt","Select a file",1,"file","btn","btn-lg","btn-outline-secondary","upload"],["type","file",1,"inputUpload"],[1,"col-md-7","d-inline","my-5","datos"],[1,"card-body"],[1,"form-group"],[1,"form-label"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"h1",1),t._uU(2,"About"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t._uU(9," Upload "),t._UZ(10,"input",8),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",9),t.TgZ(12,"div",10),t.TgZ(13,"div",11),t.TgZ(14,"label",12),t._uU(15,"Username"),t.qZA(),t.TgZ(16,"p",12),t._uU(17),t.qZA(),t.qZA(),t.TgZ(18,"div",11),t.TgZ(19,"label",12),t._uU(20,"Objectives"),t.qZA(),t.TgZ(21,"p",12),t._uU(22),t.qZA(),t.TgZ(23,"p",12),t._uU(24),t.qZA(),t.qZA(),t.TgZ(25,"div",11),t.TgZ(26,"label",12),t._uU(27,"E-mail"),t.qZA(),t.TgZ(28,"p",12),t._uU(29),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(17),t.Oqu(n.user.username),t.xp6(5),t.hij("Healthy meals per week: ",n.user.objetivoFoodSemanal," "),t.xp6(2),t.hij("Weekly workouts: ",n.user.objetivoSportSemanal,""),t.xp6(5),t.Oqu(n.user.email))},styles:['@import"https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Dancing+Script&family=Roboto+Serif:wght@100&family=Satisfy&family=Yellowtail&display=swap";img[_ngcontent-%COMP%]{width:70%}.inputUpload[_ngcontent-%COMP%]{position:absolute;font-size:50px;opacity:0;right:0;top:0}.divUpload[_ngcontent-%COMP%]{position:relative;overflow:hidden}button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:pointer{cursor:pointer}.upload[_ngcontent-%COMP%]{font-weight:700;font-size:24px}.imagen[_ngcontent-%COMP%]{float:right}.contenido[_ngcontent-%COMP%]{background-color:#fffdea;border-radius:15px}.form-group[_ngcontent-%COMP%]{margin-bottom:.7rem}.datos[_ngcontent-%COMP%]{font-size:23px}label[_ngcontent-%COMP%]{font-weight:700}.title[_ngcontent-%COMP%]{text-shadow:4px 4px 2px #f0efe8;font-family:Satisfy,cursive;font-weight:700;font-size:70px}']}),e})();var P=a(5226),C=a.n(P),f=a(520),y=a(4004),b=a(262),S=a(9646),T=a(2340);let U=(()=>{class e{constructor(o){this.http=o,this.baseUrl=T.N.baseUrl,this.user=JSON.parse(localStorage.getItem("user"))}validate(o){return this.getPassword().pipe((0,y.U)(i=>(console.log(i),i==this.user.password?{currentPassword:!0}:null)),(0,b.K)(i=>(0,S.of)(null)))}getPassword(){const o=`${this.baseUrl}/getPassword`,n=JSON.parse(localStorage.getItem("jwt")),i=(new f.WM).set("Authorization",`Bearer ${n}`);return this.http.get(o,{headers:i})}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(f.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var A=a(9103),M=a(3071);function O(e,r){if(1&e&&(t.TgZ(0,"span",9),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.currentPasswordError," ")}}function q(e,r){1&e&&(t.TgZ(0,"span",9),t._uU(1," Passwords must contain at least 6 characters. "),t.qZA())}function x(e,r){1&e&&(t.TgZ(0,"span",9),t._uU(1," Both passwords must be equal. "),t.qZA())}const _=[{path:"",component:Z},{path:"general",component:v,outlet:"user"},{path:"changePassword",component:(()=>{class e{constructor(o,n,i,u){this.fb=o,this.passwordValidator=n,this.validatorService=i,this.userService=u,this.newPassword="",this.user=JSON.parse(localStorage.getItem("user")),this.miFormulario=this.fb.group({password:[,[s.kI.required],[this.passwordValidator]],newPassword:[,[s.kI.required,s.kI.min(6)]],newPassword2:[,[s.kI.required]]},{validators:[this.validatorService.camposIguales("newPassword","newPassword2")]})}ngOnInit(){this.miFormulario.reset({name:"",surname:"",email:"",username:"",password:"",password2:""})}get currentPasswordError(){var o;const n=null===(o=this.miFormulario.get("password"))||void 0===o?void 0:o.errors;return n.required?"Password required":n.currentPassword?"The password is incorrect":""}campoNoValido(o){var n,i;return(null===(n=this.miFormulario.get(o))||void 0===n?void 0:n.invalid)&&(null===(i=this.miFormulario.get(o))||void 0===i?void 0:i.touched)}submitFormulario(){let o=this.miFormulario.get("newPassword");console.log(o),this.userService.cambiaContrasena(this.newPassword).subscribe({next:n=>{localStorage.setItem("user",JSON.stringify(n))},error:n=>{C().fire("Error",n.error.message,"error")}}),this.miFormulario.reset({name:"",surname:"",email:"",username:"",password:""})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(s.qu),t.Y36(U),t.Y36(A.o),t.Y36(M.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-change-password"]],decls:20,vars:6,consts:[[1,"title","text-center","mt-3"],[1,"m-4","text-center","mt-5",3,"formGroup","ngSubmit"],[1,"form-group"],["for","currentPassword"],["type","password","id","ecurrentPassword","placeholder","Enter current password","formControlName","password",1,"form-control-sm"],["class","form-text text-danger",4,"ngIf"],["type","password","id","ecurrentPassword","placeholder","Enter new password","formControlName","newPassword",1,"form-control-sm"],["type","password","id","ecurrentPassword","placeholder","Repeat the new password","formControlName","newPassword2",1,"form-control-sm",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"form-text","text-danger"]],template:function(o,n){1&o&&(t.TgZ(0,"h1",0),t._uU(1,"Change your password"),t.qZA(),t.TgZ(2,"form",1),t.NdJ("ngSubmit",function(){return n.submitFormulario()}),t.TgZ(3,"div",2),t.TgZ(4,"label",3),t._uU(5,"Write your current password:"),t.qZA(),t._UZ(6,"input",4),t.YNc(7,O,2,1,"span",5),t.qZA(),t.TgZ(8,"div",2),t.TgZ(9,"label",3),t._uU(10,"Write your new password (with at least 6 letters):"),t.qZA(),t._UZ(11,"input",6),t.YNc(12,q,2,0,"span",5),t.qZA(),t.TgZ(13,"div",2),t.TgZ(14,"label",3),t._uU(15,"Repeat your new password:"),t.qZA(),t.TgZ(16,"input",7),t.NdJ("ngModelChange",function(u){return n.newPassword=u}),t.qZA(),t.YNc(17,x,2,0,"span",5),t.qZA(),t.TgZ(18,"button",8),t._uU(19,"Submit"),t.qZA(),t.qZA()),2&o&&(t.xp6(2),t.Q6J("formGroup",n.miFormulario),t.xp6(5),t.Q6J("ngIf",n.campoNoValido("password")),t.xp6(5),t.Q6J("ngIf",n.campoNoValido("newPassword")),t.xp6(4),t.Q6J("ngModel",n.newPassword),t.xp6(1),t.Q6J("ngIf",n.campoNoValido("newPassword2")),t.xp6(1),t.Q6J("disabled",n.miFormulario.invalid))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,p.O5],styles:['@import"https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Dancing+Script&family=Roboto+Serif:wght@100&family=Satisfy&family=Yellowtail&display=swap";img[_ngcontent-%COMP%]{width:70%}.inputUpload[_ngcontent-%COMP%]{position:absolute;font-size:50px;opacity:0;right:0;top:0}.divUpload[_ngcontent-%COMP%]{position:relative;overflow:hidden}button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:pointer{cursor:pointer}.upload[_ngcontent-%COMP%]{font-weight:700;font-size:24px}.imagen[_ngcontent-%COMP%]{float:right}.contenido[_ngcontent-%COMP%]{border-radius:15px}.form-group[_ngcontent-%COMP%]{margin-bottom:.7rem}.datos[_ngcontent-%COMP%]{font-size:23px}label[_ngcontent-%COMP%]{font-weight:700}.title[_ngcontent-%COMP%]{text-shadow:4px 4px 2px #f0efe8;font-family:Satisfy,cursive;font-weight:700;font-size:70px}input[_ngcontent-%COMP%]{background-color:#fff;margin:1rem}']}),e})(),outlet:"user"}];let F=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(_)],l.Bz]}),e})(),J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,F,s.u5,s.UX]]}),e})()}}]);
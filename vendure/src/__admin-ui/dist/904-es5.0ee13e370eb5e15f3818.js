!function(){"use strict";var e,r;function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}(self.webpackChunkvendure_admin_ui=self.webpackChunkvendure_admin_ui||[]).push([[904],{16904:function(n,a,c){c.r(a),c.d(a,{MyparcelModule:function(){return v}});var u=c(41460),s=c(39155),p=c(3189),f=c(83974),l=f.ZP(e||(e=o(["\n  mutation updateMyparcelConfig($input: MyparcelConfigInput!) {\n    updateMyparcelConfig(input: $input) {\n      apiKey\n    }\n  }\n"]))),m=f.ZP(r||(r=o(["\n  query myparcelConfig {\n    myparcelConfig {\n      apiKey\n    }\n  }\n"]))),y=c(51694),d=c(21067),h=function(){function e(r,n,i,o){t(this,e),this.formBuilder=r,this.dataService=n,this.changeDetector=i,this.notificationService=o,this.form=this.formBuilder.group({apiKey:["your-api-key"]})}return i(e,[{key:"ngOnInit",value:function(){return(0,p.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dataService.query(m).mapStream(function(e){return e.myparcelConfig}).subscribe(function(e){return r.form.controls.apiKey.setValue(e.apiKey)});case 2:case"end":return e.stop()}},e,this)}))}},{key:"save",value:function(){return(0,p.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.form.dirty){e.next=5;break}return r=this.form.value,e.next=5,this.dataService.mutate(l,{input:{apiKey:r.apiKey}}).toPromise();case 5:this.form.markAsPristine(),this.changeDetector.markForCheck(),this.notificationService.success("common.notify-update-success",{entity:"MyparcelConfig"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.notificationService.error("common.notify-update-error",{entity:"MyparcelConfig"});case 11:case"end":return e.stop()}},e,this,[[0,8]])}))}}]),e}();h.\u0275fac=function(e){return new(e||h)(y.Y36(d.qu),y.Y36(s.DoR),y.Y36(y.sBO),y.Y36(s.gqp))},h.\u0275cmp=y.Xpm({type:h,selectors:[["myparcel-component"]],decls:8,vars:2,consts:[[1,"clr-row"],[1,"clr-col"],[1,"form",3,"formGroup"],[1,"form-block"],["label","MyParcel apikey","for","apiKey"],["id","apiKey","type","text","formControlName","apiKey"],[1,"btn","btn-primary",3,"disabled","click"]],template:function(e,r){1&e&&(y.TgZ(0,"div",0),y.TgZ(1,"div",1),y.TgZ(2,"form",2),y.TgZ(3,"section",3),y.TgZ(4,"vdr-form-field",4),y._UZ(5,"input",5),y.qZA(),y.TgZ(6,"button",6),y.NdJ("click",function(){return r.save()}),y._uU(7," Save "),y.qZA(),y.qZA(),y.qZA(),y.qZA(),y.qZA()),2&e&&(y.xp6(2),y.Q6J("formGroup",r.form),y.xp6(4),y.Q6J("disabled",r.form.invalid||r.form.pristine))},directives:[d._Y,d.JL,d.sg,s.hgI,s.y_K,d.Fj,d.JJ,d.u],encapsulation:2});var v=i(function e(){t(this,e)});v.\u0275fac=function(e){return new(e||v)},v.\u0275mod=y.oAB({type:v}),v.\u0275inj=y.cJS({providers:[(0,s.e$Y)({id:"myparcel",label:"MyParcel",routerLink:["/extensions/myparcel"],icon:"cursor-hand-open"},"settings")],imports:[[s.m81,u.Bz.forChild([{path:"",pathMatch:"full",component:h,data:{breadcrumb:"MyParcel"}}])]]})}}])}();
//# sourceMappingURL=904-es5.0ee13e370eb5e15f3818.js.map
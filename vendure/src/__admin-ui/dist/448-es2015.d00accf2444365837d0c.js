"use strict";(self.webpackChunkvendure_admin_ui=self.webpackChunkvendure_admin_ui||[]).push([[448],{6738:function(e,o){var t=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("unable to locate global object")}();e.exports=o=t.fetch,t.fetch&&(o.default=t.fetch.bind(t)),o.Headers=t.Headers,o.Request=t.Request,o.Response=t.Response},15448:function(e,o,t){t.r(o),t.d(o,{GoedgepicktModule:function(){return g}});var i=t(41460),r=t(90417),l=t(3189),s=t(83974);const n=s.ZP`
  mutation updateGoedgepicktConfig($input: GoedgepicktConfigInput!) {
    updateGoedgepicktConfig(input: $input) {
      ... on GoedgepicktConfig {
        enabled
        apiKey
        webshopUuid
        autoFulfill
        orderWebhookKey
        orderWebhookUrl
        stockWebhookKey
        stockWebhookUrl
      }
      ... on GoedgepicktError {
        message
      }
    }
  }
`,c=s.ZP`
  query goedgepicktConfig {
    goedgepicktConfig {
      enabled
      apiKey
      webshopUuid
      autoFulfill
      orderWebhookKey
      orderWebhookUrl
      stockWebhookKey
      stockWebhookUrl
    }
  }
`,d=s.ZP`
  mutation runGoedgepicktFullSync {
    runGoedgepicktFullSync
  }
`;var a=t(6738),u=t.n(a),h=t(51694),f=t(21067),p=t(56258),b=t(70942);function k(e,o){if(1&e&&(h.TgZ(0,"vdr-chip",26),h._UZ(1,"clr-icon",27),h._uU(2),h.qZA()),2&e){const e=h.oxw();h.xp6(2),h.hij(" ",e.testFailed," ")}}function m(e,o){if(1&e&&(h.TgZ(0,"vdr-chip",28),h._UZ(1,"clr-icon",29),h._uU(2),h.qZA()),2&e){const e=h.oxw();h.xp6(2),h.hij(" ",e.testResultName," ")}}class y{constructor(e,o,t,i){this.formBuilder=e,this.dataService=o,this.changeDetector=t,this.notificationService=i,this.loadingSync=!1,this.form=this.formBuilder.group({enabled:["enabled"],apiKey:["your-api-key"],webshopUuid:["webshopUuid"],autoFulfill:["autoFulfill"],orderWebhookUrl:["orderWebhookUrl"],orderWebhookKey:["orderWebhookKey"],stockWebhookUrl:["stockWebhookUrl"],stockWebhookKey:["stockWebhookKey"]})}ngOnInit(){return(0,l.mG)(this,void 0,void 0,function*(){yield this.dataService.query(c).mapStream(e=>e.goedgepicktConfig).subscribe(e=>{this.form.controls.enabled.setValue(e.enabled),this.form.controls.apiKey.setValue(e.apiKey),this.form.controls.webshopUuid.setValue(e.webshopUuid),this.form.controls.autoFulfill.setValue(e.autoFulfill),this.form.controls.orderWebhookUrl.setValue(e.orderWebhookUrl),this.form.controls.orderWebhookKey.setValue(e.orderWebhookKey),this.form.controls.stockWebhookUrl.setValue(e.stockWebhookUrl),this.form.controls.stockWebhookKey.setValue(e.stockWebhookKey)})})}save(){return(0,l.mG)(this,void 0,void 0,function*(){try{if(this.form.dirty){const e=this.form.value,{updateGoedgepicktConfig:o}=yield this.dataService.mutate(n,{input:{enabled:e.enabled,apiKey:e.apiKey,webshopUuid:e.webshopUuid,autoFulfill:e.autoFulfill}}).toPromise();this.form.controls.enabled.setValue(o.enabled),this.form.controls.apiKey.setValue(o.apiKey),this.form.controls.webshopUuid.setValue(o.webshopUuid),this.form.controls.autoFulfill.setValue(o.autoFulfill),this.form.controls.orderWebhookUrl.setValue(o.orderWebhookUrl),this.form.controls.orderWebhookKey.setValue(o.orderWebhookKey),this.form.controls.stockWebhookUrl.setValue(o.stockWebhookUrl),this.form.controls.stockWebhookKey.setValue(o.stockWebhookKey)}this.form.markAsPristine(),this.changeDetector.markForCheck(),this.notificationService.success("common.notify-update-success",{entity:"GoedgepicktConfig"})}catch(e){this.notificationService.error("common.notify-update-error",{entity:"GoedgepicktConfig"})}})}fullSync(){return(0,l.mG)(this,void 0,void 0,function*(){try{this.loadingSync=!0,yield this.dataService.mutate(d).toPromise(),this.notificationService.success("common.notify-update-success",{entity:"products and stocklevels"})}catch(e){this.notificationService.error(e.message)}finally{this.loadingSync=!1}})}test(){var e;return(0,l.mG)(this,void 0,void 0,function*(){this.testFailed=void 0,this.testResultName=void 0;const o=yield u()("https://account.goedgepickt.nl/api/v1/webshops",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${this.form.controls.apiKey.value}`},redirect:"follow"});if(200!==o.status)return void(this.testFailed="Invalid ApiKey");const t=null===(e=(yield o.json()).items)||void 0===e?void 0:e.find(e=>e.uuid===this.form.controls.webshopUuid.value);t?this.testResultName=t.name:this.testFailed="Apikey is correct, but cannot find webshopUuid"})}}y.\u0275fac=function(e){return new(e||y)(h.Y36(f.qu),h.Y36(r.DoR),h.Y36(h.sBO),h.Y36(r.gqp))},y.\u0275cmp=h.Xpm({type:y,selectors:[["goedgepickt-component"]],decls:34,vars:5,consts:[[1,"clr-row"],[1,"clr-col"],[1,"btn","btn-secondary",3,"disabled","click"],["content","Pushes products and pulls stocklevels from Goedgepickt"],[1,"form",3,"formGroup"],[1,"form-block"],["label","Enabled","for","enabled"],["type","checkbox","name","enabled","clrCheckbox","","formControlName","enabled"],["label","apikey","for","apiKey"],["id","apiKey","type","text","formControlName","apiKey"],["label","webshopUuid","for","webshopUuid"],["id","webshopUuid","type","text","formControlName","webshopUuid"],["label","Autofulfill","for","autoFulfill","tooltip","Automatically send orders to Goedgepickt on PaymentSettled"],["type","checkbox","name","autoFulfill","clrCheckbox","","formControlName","autoFulfill"],[1,"btn","btn-primary",3,"disabled","click"],[1,"btn","btn-secondary",3,"click"],["title","Failed","colorType","error",4,"ngIf"],["title","Success!","colorType","success",4,"ngIf"],["label","Order webhook","for","orderWebhookUrl","tooltip","Goedgepickt will call this URL for order status updates"],["id","orderWebhookUrl","type","text","formControlName","orderWebhookUrl","disabled","disabled"],["label","Webhook auth secret","for","orderWebhookKey"],["id","orderWebhookKey","type","text","formControlName","orderWebhookKey","disabled","disabled"],["label","Stock webhook","for","stockWebhookUrl","tooltip","Goedgepickt will call this URL for stocklevel updates"],["id","stockWebhookUrl","type","text","formControlName","stockWebhookUrl","disabled","disabled"],["label","Webhook auth secret","for","stockWebhookKey"],["id","stockWebhookKey","type","text","formControlName","stockWebhookKey","disabled","disabled"],["title","Failed","colorType","error"],["shape","error-standard"],["title","Success!","colorType","success"],["shape","check-circle"]],template:function(e,o){1&e&&(h.TgZ(0,"div",0),h.TgZ(1,"div",1),h.TgZ(2,"button",2),h.NdJ("click",function(){return o.fullSync()}),h._uU(3," Synchronize "),h.qZA(),h._UZ(4,"vdr-help-tooltip",3),h.TgZ(5,"form",4),h.TgZ(6,"section",5),h.TgZ(7,"vdr-form-field",6),h._UZ(8,"input",7),h.qZA(),h.TgZ(9,"vdr-form-field",8),h._UZ(10,"input",9),h.qZA(),h.TgZ(11,"vdr-form-field",10),h._UZ(12,"input",11),h.qZA(),h.TgZ(13,"vdr-form-field",12),h._UZ(14,"input",13),h.qZA(),h.TgZ(15,"button",14),h.NdJ("click",function(){return o.save()}),h._uU(16," Save "),h.qZA(),h.TgZ(17,"button",15),h.NdJ("click",function(){return o.test()}),h._uU(18,"Test"),h.qZA(),h.YNc(19,k,3,1,"vdr-chip",16),h.YNc(20,m,3,1,"vdr-chip",17),h.qZA(),h.TgZ(21,"section",5),h.TgZ(22,"p"),h._uU(23," The following settings are set automatically and cannot be edited "),h.qZA(),h._UZ(24,"br"),h.TgZ(25,"vdr-form-field",18),h._UZ(26,"input",19),h.qZA(),h.TgZ(27,"vdr-form-field",20),h._UZ(28,"input",21),h.qZA(),h.qZA(),h.TgZ(29,"section",5),h.TgZ(30,"vdr-form-field",22),h._UZ(31,"input",23),h.qZA(),h.TgZ(32,"vdr-form-field",24),h._UZ(33,"input",25),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA()),2&e&&(h.xp6(2),h.Q6J("disabled",o.loadingSync),h.xp6(3),h.Q6J("formGroup",o.form),h.xp6(10),h.Q6J("disabled",o.form.invalid||o.form.pristine),h.xp6(4),h.Q6J("ngIf",o.testFailed),h.xp6(1),h.Q6J("ngIf",o.testResultName))},directives:[r.opf,f._Y,f.JL,f.sg,r.hgI,r.y_K,f.Wl,p.KKC,f.JJ,f.u,f.Fj,b.O5,r.Ywx,p.qvL],encapsulation:2});class g{}g.\u0275fac=function(e){return new(e||g)},g.\u0275mod=h.oAB({type:g}),g.\u0275inj=h.cJS({providers:[(0,r.e$Y)({id:"goedgepickt",label:"Goedgepickt",routerLink:["/extensions/goedgepickt"],icon:"cursor-hand-open"},"settings")],imports:[[r.m81,i.Bz.forChild([{path:"",pathMatch:"full",component:y,data:{breadcrumb:"Goedgepickt"}}])]]})}}]);
//# sourceMappingURL=448-es2015.d00accf2444365837d0c.js.map
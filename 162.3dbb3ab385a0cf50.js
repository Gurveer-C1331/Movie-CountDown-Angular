"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[162],{1162:(Ye,v,c)=>{c.r(v),c.d(v,{HomeModule:()=>Ee});var l=c(9808),I=c(4466),h=c(9966),x=c(9546),C=c(505),y=c(262),M=c(9646),T=c(8306),N=c(4742),U=c(8421),J=c(3269),z=c(5403),H=c(3268),q=c(1810);function w(...n){const o=(0,J.jO)(n),{args:t,keys:i}=(0,N.D)(n),a=new T.y(s=>{const{length:r}=t;if(!r)return void s.complete();const d=new Array(r);let p=r,S=r;for(let f=0;f<r;f++){let u=!1;(0,U.Xf)(t[f]).subscribe((0,z.x)(s,Fe=>{u||(u=!0,S--),d[f]=Fe},()=>p--,void 0,()=>{(!p||!u)&&(S||s.next(i?(0,q.n)(i,d):d),s.complete())}))}});return o?a.pipe((0,H.Z)(o)):a}var g=c(2687),e=c(1223),O=c(2340),Q=c(520);let P=(()=>{class n{constructor(t){this.http=t,this.url=O.N.tmdb.url,this.apiKey=O.N.tmdb.apiKey}getMovieData(t){return this.http.get(this.url+"/movie/"+t+"?api_key="+this.apiKey)}getTVData(t){return this.http.get(this.url+"/tv/"+t+"?api_key="+this.apiKey)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(Q.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var R=c(3398);let E=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-new-user-content"]],decls:12,vars:0,consts:[["id","info-text"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2," Use the Discover Page or the Search Bar to add movies and tv series to your collection "),e._UZ(3,"br")(4,"br"),e.TgZ(5,"strong"),e._uU(6,"Discover Page"),e.qZA(),e._uU(7," - Discover popular movies "),e._UZ(8,"br"),e.TgZ(9,"strong"),e._uU(10,"Search Bar"),e.qZA(),e._uU(11," - Search for movies and tv series "),e.qZA()())},styles:["#info-text[_ngcontent-%COMP%]{display:block;width:80vw;padding:3em 1em;margin:auto}#info-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;text-align:center;color:#666;font-size:.95em}@media (min-width: 2000px){#info-text[_ngcontent-%COMP%]{font-size:1.3em}}@media (max-width: 400px){#info-text[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 350px){#info-text[_ngcontent-%COMP%]{font-size:.8em}}"]}),n})();var F=c(9047),Y=c(727);class B extends Y.w0{constructor(o,t){super()}schedule(o,t=0){return this}}const _={setInterval(n,o,...t){const{delegate:i}=_;return(null==i?void 0:i.setInterval)?i.setInterval(n,o,...t):setInterval(n,o,...t)},clearInterval(n){const{delegate:o}=_;return((null==o?void 0:o.clearInterval)||clearInterval)(n)},delegate:void 0};var L=c(8737);const b={now:()=>(b.delegate||Date).now(),delegate:void 0};class m{constructor(o,t=m.now){this.schedulerActionCtor=o,this.now=t}schedule(o,t=0,i){return new this.schedulerActionCtor(this,o).schedule(i,t)}}m.now=b.now;const Z=new class j extends m{constructor(o,t=m.now){super(o,t),this.actions=[],this._active=!1,this._scheduled=void 0}flush(o){const{actions:t}=this;if(this._active)return void t.push(o);let i;this._active=!0;do{if(i=o.execute(o.state,o.delay))break}while(o=t.shift());if(this._active=!1,i){for(;o=t.shift();)o.unsubscribe();throw i}}}(class V extends B{constructor(o,t){super(o,t),this.scheduler=o,this.work=t,this.pending=!1}schedule(o,t=0){if(this.closed)return this;this.state=o;const i=this.id,a=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(a,i,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(a,this.id,t),this}requestAsyncId(o,t,i=0){return _.setInterval(o.flush.bind(o,this),i)}recycleAsyncId(o,t,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return t;_.clearInterval(t)}execute(o,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(o,t);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,t){let a,i=!1;try{this.work(o)}catch(s){i=!0,a=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),a}unsubscribe(){if(!this.closed){const{id:o,scheduler:t}=this,{actions:i}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,L.P)(i,this),null!=o&&(this.id=this.recycleAsyncId(t,o,null)),this.delay=null,super.unsubscribe()}}}),G=Z;var K=c(3532);function D(n=0,o=Z){return n<0&&(n=0),function $(n=0,o,t=G){let i=-1;return null!=o&&((0,K.K)(o)?t=o:i=o),new T.y(a=>{let s=function W(n){return n instanceof Date&&!isNaN(n)}(n)?+n-t.now():n;s<0&&(s=0);let r=0;return t.schedule(function(){a.closed||(a.next(r++),0<=i?this.schedule(void 0,i):a.complete())},s)})}(n,n,o)}function X(n,o){if(1&n&&e._UZ(0,"img",23),2&n){const t=e.oxw(2);e.MGl("src","https://image.tmdb.org/t/p/w500",t.movieData.poster_path,"",e.LSH)}}function ee(n,o){1&n&&e._UZ(0,"img")}function te(n,o){if(1&n&&(e.TgZ(0,"span",24),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.MGl("id","studio-",t.movieData.id,""),e.Q6J("ngClass",t.isStudioTextLong?"animate":""),e.xp6(1),e.hij(" ",t.productionCompanies[0].name,"")}}function ne(n,o){1&n&&e._UZ(0,"span")}function ie(n,o){if(1&n&&(e.TgZ(0,"span",25),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(t.movieData.genres[0].name+"/"+t.movieData.genres[1].name)}}function oe(n,o){if(1&n&&(e.TgZ(0,"span",25),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(t.movieData.genres[0].name)}}function ae(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"td",26)(2,"span"),e._uU(3),e.qZA()(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Oqu(t.daysTilRelease)}}function se(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"td",27)(2,"span"),e._uU(3),e.qZA()(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Oqu(t.daysTilRelease)}}function re(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"td",28)(2,"span"),e._uU(3),e.qZA()(),e.TgZ(4,"td",29)(5,"span"),e._uU(6,"Days"),e.qZA()(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Oqu(t.daysTilRelease)}}const ce=function(n){return{"background-image":n}},le=function(){return{"background-image":"none"}},de=function(){return{dateStyle:"medium"}};function pe(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",1)(2,"div",2),e.YNc(3,X,1,1,"img",3),e.YNc(4,ee,1,0,"ng-template",null,4,e.W1O),e.qZA(),e.TgZ(6,"div",5)(7,"div",6)(8,"span",7),e._uU(9),e.qZA(),e._UZ(10,"br"),e.YNc(11,te,2,3,"span",8),e.YNc(12,ne,1,0,"ng-template",null,9,e.W1O),e._UZ(14,"br"),e.YNc(15,ie,2,1,"span",10),e.YNc(16,oe,2,1,"ng-template",null,11,e.W1O),e.qZA(),e.TgZ(18,"div",12)(19,"span",13),e._uU(20),e.qZA(),e.TgZ(21,"table")(22,"tbody")(23,"tr"),e.ynx(24,14),e.YNc(25,ae,4,1,"ng-container",15),e.YNc(26,se,4,1,"ng-container",15),e.YNc(27,re,7,1,"ng-container",16),e.BQk(),e.qZA(),e.TgZ(28,"tr")(29,"td",17),e._UZ(30,"img",18),e.TgZ(31,"span"),e._uU(32),e.qZA()()()()()(),e.TgZ(33,"div",19)(34,"span",20),e._uU(35,"Movie"),e.qZA(),e.TgZ(36,"span",21),e._uU(37),e.qZA()(),e.TgZ(38,"img",22),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return a.removed.emit(a.movieId)}),e.qZA()()(),e.BQk()}if(2&n){const t=e.MAs(5),i=e.MAs(13),a=e.MAs(17),s=e.oxw();e.xp6(1),e.Q6J("ngStyle",s.movieData.poster_path?e.VKq(16,ce,"url(https://image.tmdb.org/t/p/w500"+s.movieData.poster_path+")"):e.DdM(18,le)),e.xp6(2),e.Q6J("ngIf",s.movieData.poster_path)("ngIfElse",t),e.xp6(5),e.MGl("id","title-",s.movieData.id,""),e.Q6J("ngClass",s.isTitleLong?"animate":""),e.xp6(1),e.hij(" ",s.movieData.title,""),e.xp6(2),e.Q6J("ngIf",s.productionCompanies[0])("ngIfElse",i),e.xp6(4),e.Q6J("ngIf",s.movieData.genres.length>1)("ngIfElse",a),e.xp6(5),e.Oqu(s.movieData.release_date),e.xp6(4),e.Q6J("ngSwitch","Released"===s.daysTilRelease?1:s.daysTilRelease.includes(":")?2:-1),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2),e.xp6(6),e.Oqu(s.releaseDate.toLocaleString("en-US",e.DdM(19,de)).replace(",","")),e.xp6(5),e.Oqu(s.movieId)}}let ge=(()=>{class n{constructor(t){this.cd=t,this.removed=new e.vpe,this.isTitleLong=!1,this.isStudioTextLong=!1}ngOnInit(){this.movieId=this.movieData.id,this.productionCompanies=this.movieData.production_companies,this.releaseDate=new Date(this.movieData.release_date+"T00:00:00"),this.setTime(this.releaseDate),this.refreshCountDown=D(1e3).subscribe(()=>this.setTime(this.releaseDate))}ngAfterViewChecked(){this.isTitleLong!==this.enableSlideText("#title-"+this.movieId)&&(this.isTitleLong=this.enableSlideText("#title-"+this.movieId),this.cd.detectChanges()),this.isStudioTextLong!==this.enableSlideText("#studio-"+this.movieId)&&(this.isStudioTextLong=this.enableSlideText("#studio-"+this.movieId),this.cd.detectChanges())}ngOnDelete(){this.refreshCountDown.unsubscribe()}enableSlideText(t){const i=document.querySelector(".text-container"),a=parseFloat(window.getComputedStyle(i).width),s=document.querySelector(t);return(null==s?void 0:s.scrollWidth)>a}setTime(t){const i=new Date,a=t.getTime()+0-i.getTime(),s=Math.floor(a/864e5),r="0"+Math.floor(a%864e5/36e5).toString(),d="0"+Math.floor(a%36e5/6e4).toString(),p="0"+Math.floor(a%6e4/1e3).toString();this.daysTilRelease=a/864e5<0?"Released":a/864e5<1?r.slice(-2)+" : "+d.slice(-2)+" : "+p.slice(-2):s.toString()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-movie-card"]],inputs:{movieData:"movieData"},outputs:{removed:"removed"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"card-container",3,"ngStyle"],[1,"image-container"],["alt","","id","image",3,"src",4,"ngIf","ngIfElse"],["elsePoster",""],[1,"text-container"],[1,"top","no-hover"],[1,"title-text",3,"id","ngClass"],["class","studio-text",3,"id","ngClass",4,"ngIf","ngIfElse"],["elseProductionCompany",""],["class","movie-genre-text",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"middle","no-hover"],[1,"release-date",2,"display","none"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["colspan","2",1,"date-text"],["src","assets/calendar.svg","alt",""],[1,"bottom","no-hover"],[1,"media-text"],[1,"id",2,"display","none"],["src","assets/x.svg","alt","",1,"remove-button",3,"click"],["alt","","id","image",3,"src"],[1,"studio-text",3,"id","ngClass"],[1,"movie-genre-text"],[1,"days",2,"padding-bottom",".2em","padding-top",".2em","font-size","2em"],[1,"days",2,"padding-bottom",".2em","padding-top",".2em"],[1,"days"],[1,"days-text"]],template:function(t,i){1&t&&e.YNc(0,pe,39,20,"ng-container",0),2&t&&e.Q6J("ngIf",i.movieData)},directives:[l.O5,l.PC,l.mk,l.RF,l.n9,l.ED],styles:[".card-container[_ngcontent-%COMP%]{background-size:cover;background-position:center center;background-repeat:no-repeat;border-radius:20px;display:grid;grid-template-columns:37.5% 62.5%;width:50em;height:12.5em;margin:1em 0;color:#fff}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:12.5em;object-fit:cover;object-position:center center;border-radius:20px 0 0 20px}.text-container[_ngcontent-%COMP%]{position:relative;padding:0 1em;background-color:#0000004d;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:0 20px 20px 0;height:12.5em;line-height:1.56em;display:flex;flex-direction:column}.top[_ngcontent-%COMP%]{position:relative;top:0%;padding:1em 0 .5em;overflow:hidden}.title-text[_ngcontent-%COMP%]{font-size:1.56em;font-weight:500;white-space:nowrap;display:inline-block}.animate[_ngcontent-%COMP%]{animation:scrollText 8s linear infinite}@keyframes scrollText{0%{transform:translate(0)}8%{transform:translate(0)}98%{transform:translate(-100%)}to{transform:translate(-100%)}}.studio-text[_ngcontent-%COMP%]{font-size:1.125em;opacity:80%;white-space:nowrap;display:inline-block}.movie-genre-text[_ngcontent-%COMP%]{opacity:60%}.middle[_ngcontent-%COMP%]{width:max-content;padding-bottom:.5em;align-self:center}.time-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.85em;font-weight:400}.abbre-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.94em;font-weight:300;opacity:75%}table[_ngcontent-%COMP%]{border-spacing:0em}td[_ngcontent-%COMP%]{text-align:center}td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:-.2em}.days[_ngcontent-%COMP%]{font-size:2.5em;font-weight:500;text-align:right;padding-right:.2em}.days-text[_ngcontent-%COMP%]{font-size:1.25em;font-weight:300;padding-top:.6em;text-align:left}.date-text[_ngcontent-%COMP%]{font-size:1.125em;font-weight:300;opacity:65%}.date-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-right:.5em;height:1.1em}.media-text[_ngcontent-%COMP%]{font-size:1.125em;font-weight:300}.bottom[_ngcontent-%COMP%]{position:relative;bottom:0%;padding-bottom:.5em;overflow:hidden}.episode-text[_ngcontent-%COMP%]{font-size:1.125em;position:relative;bottom:0%;font-weight:300;white-space:nowrap;display:inline-block}.episode-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:500}.remove-button[_ngcontent-%COMP%]{display:none;background-color:#000000bf;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:50%;position:absolute;top:-6%;right:-3%;padding:.5em;width:1.5em;cursor:pointer}.card-container[_ngcontent-%COMP%]:hover   .remove-button[_ngcontent-%COMP%]{display:flex}.large-view[_ngcontent-%COMP%]{display:block}.small-view[_ngcontent-%COMP%]{display:none}@media (min-width: 1800px){.card-container[_ngcontent-%COMP%]{margin:0}}@media (max-width: 920px){.large-view[_ngcontent-%COMP%]{display:none}.small-view[_ngcontent-%COMP%]{display:block}.card-container[_ngcontent-%COMP%]{width:37.5em}.title-text[_ngcontent-%COMP%]{font-size:1.375em;padding-right:1em}.days[_ngcontent-%COMP%]{font-size:2.25em}.days-text[_ngcontent-%COMP%]{font-size:1.125em}.date-text[_ngcontent-%COMP%], .media-text[_ngcontent-%COMP%]{font-size:1em}}@media (max-width: 780px){.card-container[_ngcontent-%COMP%]{width:35em}}@media (max-width: 600px){.card-container[_ngcontent-%COMP%]{width:30em}}@media (max-width: 480px){.card-container[_ngcontent-%COMP%]{width:25em}}"]}),n})();function me(n,o){if(1&n&&e._UZ(0,"img",23),2&n){const t=e.oxw(2);e.MGl("src","https://image.tmdb.org/t/p/w500",t.tvData.poster_path,"",e.LSH)}}function _e(n,o){1&n&&e._UZ(0,"img")}function fe(n,o){if(1&n&&(e.TgZ(0,"span",24),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.MGl("id","network-",t.tvData.id,""),e.Q6J("ngClass",t.isNetworkTextLong?"animate":""),e.xp6(1),e.hij(" ",t.networks[0].name,"")}}function he(n,o){1&n&&e._UZ(0,"span")}function ue(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"td",25)(2,"span"),e._uU(3),e.qZA()(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Oqu(t.daysTilRelease)}}function ve(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"td",26)(2,"span"),e._uU(3),e.qZA()(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Oqu(t.daysTilRelease)}}function xe(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"td",27)(2,"span"),e._uU(3),e.qZA()(),e.TgZ(4,"td",28)(5,"span"),e._uU(6,"Days"),e.qZA()(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Oqu(t.daysTilRelease)}}const Ce=function(n){return{"background-image":n}},ye=function(){return{"background-image":"none"}},Me=function(){return{dateStyle:"medium"}};function Te(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",1)(2,"div",2),e.YNc(3,me,1,1,"img",3),e.YNc(4,_e,1,0,"ng-template",null,4,e.W1O),e.qZA(),e.TgZ(6,"div",5)(7,"div",6)(8,"span",7),e._uU(9),e.qZA(),e._UZ(10,"br"),e.TgZ(11,"span",8)(12,"strong",9),e._uU(13),e.qZA(),e._uU(14),e.qZA(),e._UZ(15,"br"),e.YNc(16,fe,2,3,"span",10),e.YNc(17,he,1,0,"ng-template",null,11,e.W1O),e._UZ(19,"br"),e.qZA(),e.TgZ(20,"div",12)(21,"span",13),e._uU(22),e.qZA(),e.TgZ(23,"table")(24,"tbody")(25,"tr"),e.ynx(26,14),e.YNc(27,ue,4,1,"ng-container",15),e.YNc(28,ve,4,1,"ng-container",15),e.YNc(29,xe,7,1,"ng-container",16),e.BQk(),e.qZA(),e.TgZ(30,"tr")(31,"td",17),e._UZ(32,"img",18),e.TgZ(33,"span"),e._uU(34),e.qZA()()()()()(),e.TgZ(35,"div",19)(36,"span",20),e._uU(37,"TV Series"),e.qZA(),e.TgZ(38,"span",21),e._uU(39),e.qZA()(),e.TgZ(40,"img",22),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return a.removed.emit(a.tvId)}),e.qZA()()(),e.BQk()}if(2&n){const t=e.MAs(5),i=e.MAs(18),a=e.oxw();e.xp6(1),e.Q6J("ngStyle",a.tvData.poster_path?e.VKq(19,Ce,"url(https://image.tmdb.org/t/p/w500"+a.tvData.poster_path+")"):e.DdM(21,ye)),e.xp6(2),e.Q6J("ngIf",a.tvData.poster_path)("ngIfElse",t),e.xp6(5),e.MGl("id","title-",a.tvData.id,""),e.Q6J("ngClass",a.isTitleLong?"animate":""),e.xp6(1),e.hij(" ",a.tvData.name,""),e.xp6(2),e.MGl("id","episode-",a.tvData.id,""),e.Q6J("ngClass",a.isEpisodeTextLong?"animate":""),e.xp6(2),e.AsE("S",a.tvData.display_episode.season_number,"E",a.tvData.display_episode.episode_number,": "),e.xp6(1),e.hij(" ",a.tvData.display_episode.name," "),e.xp6(2),e.Q6J("ngIf",a.networks[0])("ngIfElse",i),e.xp6(6),e.Oqu(a.tvData.display_episode.air_date),e.xp6(4),e.Q6J("ngSwitch","Released"===a.daysTilRelease?1:a.daysTilRelease.includes(":")?2:-1),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2),e.xp6(6),e.Oqu(a.releaseDate.toLocaleString("en-US",e.DdM(22,Me)).replace(",","")),e.xp6(5),e.Oqu(a.tvId)}}let we=(()=>{class n{constructor(t){this.cd=t,this.removed=new e.vpe,this.isTitleLong=!1,this.isEpisodeTextLong=!1,this.isNetworkTextLong=!1}ngOnInit(){this.tvId=this.tvData.id,this.networks=this.tvData.networks,this.releaseDate=new Date(this.tvData.display_episode.air_date+"T00:00:00"),this.setTime(this.releaseDate),this.refreshCountDown=D(1e3).subscribe(()=>this.setTime(this.releaseDate))}ngAfterViewChecked(){this.isTitleLong!==this.enableSlideText("#title-"+this.tvId)&&(this.isTitleLong=this.enableSlideText("#title-"+this.tvId),this.cd.detectChanges()),this.isEpisodeTextLong!==this.enableSlideText("#episode-"+this.tvId)&&(this.isEpisodeTextLong=this.enableSlideText("#episode-"+this.tvId),this.cd.detectChanges()),this.isNetworkTextLong!==this.enableSlideText("#network-"+this.tvData.id)&&(this.isNetworkTextLong=this.enableSlideText("#network-"+this.tvData.id),this.cd.detectChanges())}ngOnDelete(){this.refreshCountDown.unsubscribe()}enableSlideText(t){const i=document.querySelector(".text-container"),a=parseFloat(window.getComputedStyle(i).width),s=document.querySelector(t);return(null==s?void 0:s.scrollWidth)>a}setTime(t){const i=new Date,a=t.getTime()+0-i.getTime(),s=Math.floor(a/864e5),r="0"+Math.floor(a%864e5/36e5).toString(),d="0"+Math.floor(a%36e5/6e4).toString(),p="0"+Math.floor(a%6e4/1e3).toString();this.daysTilRelease=a/864e5<0?"Released":a/864e5<1?r.slice(-2)+" : "+d.slice(-2)+" : "+p.slice(-2):s.toString()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tv-card"]],inputs:{tvData:"tvData"},outputs:{removed:"removed"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"card-container",3,"ngStyle"],[1,"image-container"],["alt","","id","image",3,"src",4,"ngIf","ngIfElse"],["elsePoster",""],[1,"text-container"],[1,"top","no-hover"],[1,"title-text",3,"id","ngClass"],[1,"episode-text",3,"id","ngClass"],[1,"episodeNum"],["class","studio-text",3,"id","ngClass",4,"ngIf","ngIfElse"],["elseNetwork",""],[1,"middle","no-hover"],[1,"release-date",2,"display","none"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["colspan","2",1,"date-text"],["src","assets/calendar.svg","alt",""],[1,"bottom","no-hover"],[1,"media-text"],[1,"id",2,"display","none"],["src","assets/x.svg","alt","",1,"remove-button",3,"click"],["alt","","id","image",3,"src"],[1,"studio-text",3,"id","ngClass"],[1,"days",2,"padding-bottom",".2em","padding-top",".2em","font-size","2em"],[1,"days",2,"padding-bottom",".2em","padding-top",".2em"],[1,"days"],[1,"days-text"]],template:function(t,i){1&t&&e.YNc(0,Te,41,23,"ng-container",0),2&t&&e.Q6J("ngIf",i.tvData&&i.tvData.display_episode)},directives:[l.O5,l.PC,l.mk,l.RF,l.n9,l.ED],styles:[".card-container[_ngcontent-%COMP%]{background-size:cover;background-position:center center;background-repeat:no-repeat;border-radius:20px;display:grid;grid-template-columns:37.5% 62.5%;width:50em;height:12.5em;margin:1em 0;color:#fff}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:12.5em;object-fit:cover;object-position:center center;border-radius:20px 0 0 20px}.text-container[_ngcontent-%COMP%]{position:relative;padding:0 1em;background-color:#0000004d;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:0 20px 20px 0;height:12.5em;line-height:1.56em;display:flex;flex-direction:column}.top[_ngcontent-%COMP%]{position:relative;top:0%;padding:1em 0 .5em;overflow:hidden}.title-text[_ngcontent-%COMP%]{font-size:1.56em;font-weight:500;white-space:nowrap;display:inline-block}.animate[_ngcontent-%COMP%]{animation:scrollText 8s linear infinite}@keyframes scrollText{0%{transform:translate(0)}8%{transform:translate(0)}98%{transform:translate(-100%)}to{transform:translate(-100%)}}.studio-text[_ngcontent-%COMP%]{font-size:1.125em;opacity:80%;white-space:nowrap;display:inline-block}.movie-genre-text[_ngcontent-%COMP%]{opacity:60%}.middle[_ngcontent-%COMP%]{width:max-content;padding-bottom:.5em;align-self:center}.time-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.85em;font-weight:400}.abbre-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.94em;font-weight:300;opacity:75%}table[_ngcontent-%COMP%]{border-spacing:0em}td[_ngcontent-%COMP%]{text-align:center}td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:-.2em}.days[_ngcontent-%COMP%]{font-size:2.5em;font-weight:500;text-align:right;padding-right:.2em}.days-text[_ngcontent-%COMP%]{font-size:1.25em;font-weight:300;padding-top:.6em;text-align:left}.date-text[_ngcontent-%COMP%]{font-size:1.125em;font-weight:300;opacity:65%}.date-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-right:.5em;height:1.1em}.media-text[_ngcontent-%COMP%]{font-size:1.125em;font-weight:300}.bottom[_ngcontent-%COMP%]{position:relative;bottom:0%;padding-bottom:.5em;overflow:hidden}.episode-text[_ngcontent-%COMP%]{font-size:1.125em;position:relative;bottom:0%;font-weight:300;white-space:nowrap;display:inline-block}.episode-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:500}.remove-button[_ngcontent-%COMP%]{display:none;background-color:#000000bf;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:50%;position:absolute;top:-6%;right:-3%;padding:.5em;width:1.5em;cursor:pointer}.card-container[_ngcontent-%COMP%]:hover   .remove-button[_ngcontent-%COMP%]{display:flex}.large-view[_ngcontent-%COMP%]{display:block}.small-view[_ngcontent-%COMP%]{display:none}@media (min-width: 1800px){.card-container[_ngcontent-%COMP%]{margin:0}}@media (max-width: 920px){.large-view[_ngcontent-%COMP%]{display:none}.small-view[_ngcontent-%COMP%]{display:block}.card-container[_ngcontent-%COMP%]{width:37.5em}.title-text[_ngcontent-%COMP%]{font-size:1.375em;padding-right:1em}.days[_ngcontent-%COMP%]{font-size:2.25em}.days-text[_ngcontent-%COMP%]{font-size:1.125em}.date-text[_ngcontent-%COMP%], .media-text[_ngcontent-%COMP%]{font-size:1em}}@media (max-width: 780px){.card-container[_ngcontent-%COMP%]{width:35em}}@media (max-width: 600px){.card-container[_ngcontent-%COMP%]{width:30em}}@media (max-width: 480px){.card-container[_ngcontent-%COMP%]{width:25em}}"]}),n})(),Oe=(()=>{class n{transform(t,i){return t&&i?"Movies"===i?t.filter(a=>"movie"===a.type):"TV Series"===i?t.filter(a=>"tv"===a.type):t:t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"filterCards",type:n,pure:!1}),n})();const A=function(){return{display:""}},k=function(){return{display:"none"}};function Pe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",5)(1,"div",6),e._UZ(2,"fa-icon",7),e.TgZ(3,"span",8),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggleFilterType()}),e._uU(4),e.qZA()(),e.TgZ(5,"div",9)(6,"span",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggleSortType()}),e._uU(7),e.qZA(),e.TgZ(8,"fa-icon",11),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggleSortOrder()}),e.qZA(),e.TgZ(9,"fa-icon",12),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggleSortOrder()}),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("icon",t.faFilter),e.xp6(2),e.Oqu(t.filterType),e.xp6(3),e.Oqu(t.sortType),e.xp6(1),e.Q6J("icon",t.faArrowUp)("ngStyle",t.cardsAscending?e.DdM(7,A):e.DdM(8,k)),e.xp6(1),e.Q6J("icon",t.faArrowDown)("ngStyle",t.cardsAscending?e.DdM(9,k):e.DdM(10,A))}}function be(n,o){1&n&&e._UZ(0,"app-new-user-content")}function Ze(n,o){1&n&&e._UZ(0,"app-loader")}function De(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"app-movie-card",17),e.NdJ("removed",function(a){return e.CHM(t),e.oxw(3).onRemoveMovie(a)}),e.qZA()}if(2&n){const t=e.oxw().$implicit;e.Q6J("movieData",t.data)}}function Ae(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"app-tv-card",18),e.NdJ("removed",function(a){return e.CHM(t),e.oxw(3).onRemoveTV(a)}),e.qZA()}if(2&n){const t=e.oxw().$implicit;e.Q6J("tvData",t.data)}}function ke(n,o){if(1&n&&(e.ynx(0),e.YNc(1,De,1,1,"app-movie-card",15),e.YNc(2,Ae,1,1,"app-tv-card",16),e.BQk()),2&n){const t=o.$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.determineIfMovieOrTV(t.data)),e.xp6(1),e.Q6J("ngIf",!i.determineIfMovieOrTV(t.data))}}function Se(n,o){if(1&n&&(e.TgZ(0,"div",13),e.YNc(1,ke,3,2,"ng-container",14),e.ALo(2,"paginate"),e.ALo(3,"filterCards"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.xi3(3,4,t.cardData,t.filterType),t.config))}}function Ie(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",27),e.NdJ("click",function(){return e.CHM(t),e.oxw(2),e.MAs(1).previous()}),e._UZ(1,"fa-icon",7),e.qZA()}if(2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("icon",t.faArrowLeft)}}function Ne(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",27),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit;return e.oxw(2),e.MAs(1).setCurrent(a.value)}),e.TgZ(1,"span"),e._uU(2),e.qZA()()}if(2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.label)}}function Ue(n,o){if(1&n&&(e.TgZ(0,"div")(1,"span"),e._uU(2),e.qZA()()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.label)}}function Je(n,o){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,Ne,3,1,"a",24),e.YNc(2,Ue,3,1,"div",2),e.qZA()),2&n){const t=o.$implicit;e.oxw(2);const i=e.MAs(1);e.ekj("current",i.getCurrent()===t.value),e.xp6(1),e.Q6J("ngIf",i.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",i.getCurrent()===t.value)}}function ze(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"a",27),e.NdJ("click",function(){return e.CHM(t),e.oxw(2),e.MAs(1).next()}),e._UZ(1,"fa-icon",7),e.qZA()}if(2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("icon",t.faArrowRight)}}function He(n,o){if(1&n&&(e.TgZ(0,"div",22)(1,"div",23),e.YNc(2,Ie,2,1,"a",24),e.qZA(),e.YNc(3,Je,3,4,"div",25),e.TgZ(4,"div",26),e.YNc(5,ze,2,1,"a",24),e.qZA()()),2&n){e.oxw();const t=e.MAs(1);e.xp6(1),e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",!t.isFirstPage()),e.xp6(1),e.Q6J("ngForOf",t.pages),e.xp6(1),e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage())}}function qe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"pagination-template",19,20),e.NdJ("pageChange",function(a){return e.CHM(t),e.oxw().config.currentPage=a}),e.YNc(2,He,6,7,"div",21),e.qZA()}if(2&n){const t=e.MAs(1),i=e.oxw();e.Q6J("maxSize",i.maxSize),e.xp6(2),e.Q6J("ngIf",t.pages.length>1)}}const Qe=[{path:"",component:(()=>{class n{constructor(t,i){this.homeService=t,this.cookieService=i,this.cardData=[],this.maxSize=5,this.config={itemsPerPage:20,currentPage:1},this.faArrowUp=g.u2A,this.faArrowDown=g.d9d,this.faFilter=g.G_j,this.faArrowLeft=g.EyR,this.faArrowRight=g.yOZ,this.isMovieReady=!1,this.isTVReady=!1,this.sortType="Release",this.filterType="All",this.cardsAscending=!0}ngOnInit(){this.cookieService.setCookie("movieCollection",["585083","385687","569094","603692","507086","438148","338953","447365","616037","505642","575264","677179","575265","640146","609681","877269","508947","619979","718789","634492","911916","725201","539972","962697","615469","361743","519182","539681","787699","346698","838330","756999","822119","617127","1003598","1003596","617126","986056","929170","830788","593643","762968","913290","661374","723419","619730","301502","799546","541134","894205","968051","676547","830784","664469","1022789","1022787","976573","447273","616747","762509","533535","632856","774752","653851","502356","934433","700391","697843","614479","638974","872585","806704","1003579","726759","532408","958196","862552","881164","821890","800158"]),this.cookieService.setCookie("tvCollection",["107113","456","97951","125282","66732","1434","128095","125949","92783","85801","122196","114469","114502","157202","157215","127585","201874","137437","155631","153518","114463","158087","113988","209167","78191","73375","210662","155427","210232","111803","197434","157080","100088","107365","124800","96237","114472","208397","137527","135251"]),this.movieCollection=this.cookieService.getCookie("movieCollection"),this.tvCollection=this.cookieService.getCookie("tvCollection"),console.log(this.movieCollection),console.log(this.tvCollection);const t=[],i=[];this.isEmpty(this.movieCollection)||this.movieCollection.forEach(a=>{t.push(this.homeService.getMovieData(a).pipe((0,y.K)(()=>(0,M.of)(null))))}),this.isEmpty(this.tvCollection)||this.tvCollection.forEach(a=>{i.push(this.homeService.getTVData(a).pipe((0,y.K)(()=>(0,M.of)(null))))}),w(t).subscribe(a=>{const s=a.filter(r=>r);this.cardData=this.cardData.concat(s.map(r=>({type:"movie",releaseDate:r.release_date,name:r.title,data:r}))),this.isMovieReady=!0}),w(i).subscribe(a=>{const s=a.filter(r=>r);this.cardData=this.cardData.concat(s.map(r=>(r.display_episode=r.next_episode_to_air?r.next_episode_to_air:r.last_episode_to_air,{type:"tv",releaseDate:r.display_episode.air_date,name:r.name,data:r}))),this.isTVReady=!0,this.cardData.sort(this.sortByRelease)})}isEmpty(t){return 0===t.length||""===t[0]}convertID(t){return parseInt(t,10)}onRemoveMovie(t){const i=this.movieCollection.indexOf(t.toString());this.movieCollection.splice(i,1),this.cardData=this.cardData.filter(a=>this.determineIfMovieOrTV(a.data)&&t!==a.data.id||!this.determineIfMovieOrTV(a.data)),console.log("removed movie - "+t)}onRemoveTV(t){const i=this.tvCollection.indexOf(t.toString());this.tvCollection.splice(i,1),this.cardData=this.cardData.filter(a=>!this.determineIfMovieOrTV(a.data)&&t!==a.data.id||this.determineIfMovieOrTV(a.data)),console.log("removed tv - "+t)}toggleSortType(){"Release"===this.sortType?(this.sortType="Name",this.cardsAscending=!0,this.cardData.sort(this.sortByName)):(this.sortType="Release",this.cardsAscending=!0,this.cardData.sort(this.sortByRelease))}toggleSortOrder(){this.cardsAscending=!this.cardsAscending,this.cardData.reverse()}toggleFilterType(){this.filterType="All"===this.filterType?"Movies":"Movies"===this.filterType?"TV Series":"All",this.config.currentPage=1}determineIfMovieOrTV(t){return!!t.release_date}sortByRelease(t,i){return new Date(t.releaseDate+"T00:00:00").getTime()-new Date(i.releaseDate+"T00:00:00").getTime()}sortByName(t,i){return t.name<i.name?-1:t.name>t.name?1:0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(P),e.Y36(R.N))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:6,vars:5,consts:[[1,"container"],["id","options-container",4,"ngIf"],[4,"ngIf"],["class","main-container",4,"ngIf"],[3,"maxSize","pageChange",4,"ngIf"],["id","options-container"],[1,"filter-container"],[3,"icon"],["id","filter-method",3,"click"],[1,"sortBy-container"],["id","sort-method",3,"click"],["id","sort-directionUp",3,"icon","ngStyle","click"],["id","sort-directionDown",3,"icon","ngStyle","click"],[1,"main-container"],[4,"ngFor","ngForOf"],[3,"movieData","removed",4,"ngIf"],[3,"tvData","removed",4,"ngIf"],[3,"movieData","removed"],[3,"tvData","removed"],[3,"maxSize","pageChange"],["p","paginationApi"],["class","custom-pagination",4,"ngIf"],[1,"custom-pagination"],[1,"pagination-previous"],[3,"click",4,"ngIf"],[3,"current",4,"ngFor","ngForOf"],[1,"pagination-next"],[3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,Pe,10,11,"div",1),e.YNc(2,be,1,0,"app-new-user-content",2),e.YNc(3,Ze,1,0,"app-loader",2),e.YNc(4,Se,4,7,"div",3),e.YNc(5,qe,3,2,"pagination-template",4),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",(i.isMovieReady||i.isEmpty(i.movieCollection))&&(i.isTVReady||i.isEmpty(i.tvCollection))),e.xp6(1),e.Q6J("ngIf",i.isEmpty(i.movieCollection)&&i.isEmpty(i.tvCollection)),e.xp6(1),e.Q6J("ngIf",!((i.isMovieReady||i.isEmpty(i.movieCollection))&&(i.isTVReady||i.isEmpty(i.tvCollection)))),e.xp6(1),e.Q6J("ngIf",(i.isMovieReady||i.isEmpty(i.movieCollection))&&(i.isTVReady||i.isEmpty(i.tvCollection))),e.xp6(1),e.Q6J("ngIf",(i.isMovieReady||i.isEmpty(i.movieCollection))&&(i.isTVReady||i.isEmpty(i.tvCollection))&&i.cardData.length>i.config.itemsPerPage))},directives:[l.O5,x.BN,l.PC,E,F.R,l.sg,ge,we,h.tk],pipes:[h._s,Oe],styles:["#options-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.filter-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .sortBy-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.95em;cursor:pointer}.filter-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .filter-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-right:.5em;height:.9em}.sortBy-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .sortBy-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-left:.5em;height:.9em;cursor:pointer}.container[_ngcontent-%COMP%]{display:block;padding:0 3em 3em;margin:auto;width:max-content}.custom-pagination[_ngcontent-%COMP%]{display:flex;text-align:center;align-items:center;max-width:20em;margin:auto;padding-top:2em}.custom-pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1;font-size:1.1em}.custom-pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;padding:.6em}.current[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:1.2em;color:#fff;background-color:#000;padding:.4em;margin:0;border-radius:20px;font-size:.8em}@media (min-width: 2100px){.container[_ngcontent-%COMP%]{font-size:1.2em}}@media (min-width: 2000px){.filter-container[_ngcontent-%COMP%], .sortBy-container[_ngcontent-%COMP%]{font-size:1.3em}}@media (min-width: 1800px){.main-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:50% 50%;grid-gap:1em;margin-top:1em}.custom-pagination[_ngcontent-%COMP%]{padding-top:3em}}@media (max-width: 720px){.container[_ngcontent-%COMP%]{padding-left:1em;padding-right:1em}}@media (max-width: 530px){.container[_ngcontent-%COMP%]{font-size:.9em}.filter-container[_ngcontent-%COMP%], .sortBy-container[_ngcontent-%COMP%]{font-size:1.11em}}@media (max-width: 400px){.container[_ngcontent-%COMP%]{font-size:.8em;padding-left:.5em;padding-right:.5em}.filter-container[_ngcontent-%COMP%], .sortBy-container[_ngcontent-%COMP%]{font-size:1.125em}}@media (max-width: 350px){.container[_ngcontent-%COMP%]{font-size:.7em}.filter-container[_ngcontent-%COMP%], .sortBy-container[_ngcontent-%COMP%]{font-size:1.143em}}"]}),n})()}];let Re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[C.Bz.forChild(Qe)],C.Bz]}),n})(),Ee=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[P],imports:[[l.ez,I.m,h.JX,Re,x.uH]]}),n})()}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[375],{5672:(T,m,s)=>{s.d(m,{v:()=>C});var i=s(1223),d=s(9808);function v(r,g){if(1&r&&i._UZ(0,"img",7),2&r){const p=i.oxw();i.MGl("src","https://image.tmdb.org/t/p/w500",p.cardData.poster_path,"",i.LSH)}}function u(r,g){1&r&&i._UZ(0,"img",8)}function x(r,g){if(1&r&&(i.TgZ(0,"span"),i._uU(1),i.qZA()),2&r){const p=i.oxw();i.xp6(1),i.Oqu(p.cardData.title)}}function t(r,g){if(1&r&&(i.TgZ(0,"span"),i._uU(1),i.qZA()),2&r){const p=i.oxw();i.xp6(1),i.Oqu(p.cardData.name)}}const f=function(r){return{"background-image":r}},h=function(){return{"background-image":"none"}};let C=(()=>{class r{constructor(){this.removed=new i.vpe,this.added=new i.vpe}ngOnInit(){}}return r.\u0275fac=function(p){return new(p||r)},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-discover-card"]],inputs:{cardType:"cardType",cardData:"cardData",inCollection:"inCollection"},outputs:{removed:"removed",added:"added"},decls:12,vars:10,consts:[[1,"search-card",3,"ngStyle"],[1,"search-item"],["class","no-hover poster","alt","","id","image",3,"src",4,"ngIf","ngIfElse"],["elsePoster",""],[1,"no-hover"],[4,"ngIf"],[2,"display","none"],["alt","","id","image",1,"no-hover","poster",3,"src"],["src","","alt","poster image",1,"no-hover",2,"padding","1em"]],template:function(p,_){if(1&p&&(i.TgZ(0,"div",0)(1,"div",1),i.YNc(2,v,1,1,"img",2),i.YNc(3,u,1,0,"ng-template",null,3,i.W1O),i.TgZ(5,"div",4),i.YNc(6,x,2,1,"span",5),i.YNc(7,t,2,1,"span",5),i.qZA(),i.TgZ(8,"span",6),i._uU(9),i.qZA(),i.TgZ(10,"span",6),i._uU(11),i.qZA()()()),2&p){const M=i.MAs(4);i.Q6J("ngStyle",_.cardData.poster_path?i.VKq(7,f,"url(https://image.tmdb.org/t/p/w500"+_.cardData.poster_path+")"):i.DdM(9,h)),i.xp6(2),i.Q6J("ngIf",_.cardData.poster_path)("ngIfElse",M),i.xp6(4),i.Q6J("ngIf",_.cardData.title),i.xp6(1),i.Q6J("ngIf",_.cardData.name),i.xp6(2),i.Oqu(_.cardData.id),i.xp6(2),i.Oqu(_.cardType)}},directives:[d.PC,d.O5],styles:[".search-card[_ngcontent-%COMP%]{border-radius:20px;background-size:cover;background-position:center;height:100%;position:relative}.search-item[_ngcontent-%COMP%]{background-color:#0003;border-radius:20px;padding:0 0 1em;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);height:calc(100% - 1em);display:grid}.search-item[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%]{position:relative;left:50%;transform:translate(-50%);width:100%;margin-bottom:1em;border-radius:20px 20px 0 0}.search-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{overflow:hidden}.search-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;text-align:center;padding:0 1em;color:#fff}.add-text[_ngcontent-%COMP%], .remove-text[_ngcontent-%COMP%]{display:none;background-color:#000000bf;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:50%;position:absolute;top:-4%;right:-6%;padding:.5em;width:1.5em}.add-text[_ngcontent-%COMP%], .remove-text[_ngcontent-%COMP%]{display:none}.search-card[_ngcontent-%COMP%]:hover   .add-text[_ngcontent-%COMP%], .search-card[_ngcontent-%COMP%]:hover   .remove-text[_ngcontent-%COMP%]{display:flex}@media (min-width: 2100px){.add-text[_ngcontent-%COMP%], .remove-text[_ngcontent-%COMP%]{font-size:1.2em}}@media (min-width: 2000px){.search-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.3em}}@media (max-width: 2000px){.search-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1em}}@media (max-width: 1400px){.search-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1em}}@media (max-width: 1150px){.add-text[_ngcontent-%COMP%], .remove-text[_ngcontent-%COMP%]{font-size:1em}}"]}),r})()},6375:(T,m,s)=>{s.r(m),s.d(m,{DiscoverModule:()=>L});var i=s(9808),d=s(9966),v=s(9546),u=s(505),x=s(2687),t=s(1223),f=s(2340),h=s(520);let C=(()=>{class n{constructor(e){this.http=e,this.url=f.N.tmdb.url,this.apiKey=f.N.tmdb.apiKey}getUpcomingMovies(e){const o=new Date;return this.http.get(this.url+"/discover/movie?api_key="+this.apiKey+"&region=US&sort_by=popularity.desc&release_date.gte="+o.toJSON().substr(0,10)+"&with_release_type=3|2&page="+e)}getUpcomingTVSeries(e){const o=new Date;return this.http.get(this.url+"/discover/tv?api_key="+this.apiKey+"&with_original_language=en&sort_by=popularity.desc&air_date.gte="+o.toJSON().substr(0,10)+"&with_type=0|2|3|4|5|6&page="+e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(h.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var r=s(3398),g=s(9047),p=s(5672);function _(n,a){1&n&&(t.TgZ(0,"div",9),t._UZ(1,"app-loader"),t.qZA())}function M(n,a){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"app-discover-card",11),t.NdJ("added",function(c){return t.CHM(e),t.oxw(2).onAddMovie(c)})("removed",function(c){return t.CHM(e),t.oxw(2).onRemoveMovie(c)}),t.qZA(),t.BQk()}if(2&n){const e=a.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("cardType","movie")("cardData",e)("inCollection",o.movieCollection.includes(e.id.toString()))}}function O(n,a){if(1&n&&(t.ynx(0),t.YNc(1,M,2,3,"ng-container",10),t.ALo(2,"paginate"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.movieData,e.movieConfig))}}function D(n,a){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"app-discover-card",11),t.NdJ("added",function(c){return t.CHM(e),t.oxw(2).onAddTV(c)})("removed",function(c){return t.CHM(e),t.oxw(2).onRemoveTV(c)}),t.qZA(),t.BQk()}if(2&n){const e=a.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("cardType","tv")("cardData",e)("inCollection",o.tvCollection.includes(e.id.toString()))}}function w(n,a){if(1&n&&(t.ynx(0),t.YNc(1,D,2,3,"ng-container",10),t.ALo(2,"paginate"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.tvData,e.tvConfig))}}function Z(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){return t.CHM(e),t.oxw(2),t.MAs(1).previous()}),t._UZ(1,"fa-icon",21),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("icon",e.faArrowLeft)}}function y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){t.CHM(e);const c=t.oxw().$implicit;return t.oxw(2),t.MAs(1).setCurrent(c.value)}),t.TgZ(1,"span"),t._uU(2),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.label)}}function A(n,a){if(1&n&&(t.TgZ(0,"div")(1,"span"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.label)}}function b(n,a){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,y,3,1,"a",17),t.YNc(2,A,3,1,"div",6),t.qZA()),2&n){const e=a.$implicit;t.oxw(2);const o=t.MAs(1);t.ekj("current",o.getCurrent()===e.value),t.xp6(1),t.Q6J("ngIf",o.getCurrent()!==e.value),t.xp6(1),t.Q6J("ngIf",o.getCurrent()===e.value)}}function k(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){return t.CHM(e),t.oxw(2),t.MAs(1).next()}),t._UZ(1,"fa-icon",21),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("icon",e.faArrowRight)}}function J(n,a){if(1&n&&(t.TgZ(0,"div",15)(1,"div",16),t.YNc(2,Z,2,1,"a",17),t.qZA(),t.YNc(3,b,3,4,"div",18),t.TgZ(4,"div",19),t.YNc(5,k,2,1,"a",17),t.qZA()()),2&n){t.oxw();const e=t.MAs(1);t.xp6(1),t.ekj("disabled",e.isFirstPage()),t.xp6(1),t.Q6J("ngIf",!e.isFirstPage()),t.xp6(1),t.Q6J("ngForOf",e.pages),t.xp6(1),t.ekj("disabled",e.isLastPage()),t.xp6(1),t.Q6J("ngIf",!e.isLastPage())}}function N(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"pagination-template",12,13),t.NdJ("pageChange",function(c){return t.CHM(e),t.oxw().getMoviePage(c)}),t.YNc(2,J,6,7,"div",14),t.qZA()}if(2&n){const e=t.MAs(1),o=t.oxw();t.Q6J("maxSize",o.maxSize),t.xp6(2),t.Q6J("ngIf",e.pages.length>1)}}function I(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){return t.CHM(e),t.oxw(2),t.MAs(1).previous()}),t._UZ(1,"fa-icon",21),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("icon",e.faArrowLeft)}}function Q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){t.CHM(e);const c=t.oxw().$implicit;return t.oxw(2),t.MAs(1).setCurrent(c.value)}),t.TgZ(1,"span"),t._uU(2),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.label)}}function S(n,a){if(1&n&&(t.TgZ(0,"div")(1,"span"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.label)}}function z(n,a){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,Q,3,1,"a",17),t.YNc(2,S,3,1,"div",6),t.qZA()),2&n){const e=a.$implicit;t.oxw(2);const o=t.MAs(1);t.ekj("current",o.getCurrent()===e.value),t.xp6(1),t.Q6J("ngIf",o.getCurrent()!==e.value),t.xp6(1),t.Q6J("ngIf",o.getCurrent()===e.value)}}function F(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){return t.CHM(e),t.oxw(2),t.MAs(1).next()}),t._UZ(1,"fa-icon",21),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("icon",e.faArrowRight)}}function U(n,a){if(1&n&&(t.TgZ(0,"div",15)(1,"div",16),t.YNc(2,I,2,1,"a",17),t.qZA(),t.YNc(3,z,3,4,"div",18),t.TgZ(4,"div",19),t.YNc(5,F,2,1,"a",17),t.qZA()()),2&n){t.oxw();const e=t.MAs(1);t.xp6(1),t.ekj("disabled",e.isFirstPage()),t.xp6(1),t.Q6J("ngIf",!e.isFirstPage()),t.xp6(1),t.Q6J("ngForOf",e.pages),t.xp6(1),t.ekj("disabled",e.isLastPage()),t.xp6(1),t.Q6J("ngIf",!e.isLastPage())}}function Y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"pagination-template",22,13),t.NdJ("pageChange",function(c){return t.CHM(e),t.oxw().getTVPage(c)}),t.YNc(2,U,6,7,"div",14),t.qZA()}if(2&n){const e=t.MAs(1),o=t.oxw();t.Q6J("maxSize",o.maxSize),t.xp6(2),t.Q6J("ngIf",e.pages.length>1)}}const P=function(n){return{current:n}},q=[{path:"",component:(()=>{class n{constructor(e,o){this.discoverService=e,this.cookieService=o,this.movieData=[],this.tvData=[],this.firstLoadComplete=!1,this.isReady=!1,this.toggleMovies=!0,this.maxSize=5,this.movieConfig={id:"moviePagination",itemsPerPage:20,currentPage:1,totalItems:20},this.tvConfig={id:"tvPagination",itemsPerPage:20,currentPage:1,totalItems:20},this.faArrowLeft=x.EyR,this.faArrowRight=x.yOZ}ngOnInit(){this.movieCollection=this.cookieService.getCookie("movieCollection"),this.tvCollection=this.cookieService.getCookie("tvCollection"),console.log(this.movieCollection),console.log(this.tvCollection),this.discoverService.getUpcomingMovies(1).subscribe({next:e=>{this.movieConfig.totalItems=e.total_results,this.movieData=e.results,this.isReady=!0,this.firstLoadComplete=!0},error:e=>{console.log(e),this.isReady=!0}}),this.discoverService.getUpcomingTVSeries(1).subscribe({next:e=>{this.tvConfig.totalItems=e.total_results,this.tvData=e.results},error:e=>{console.log(e)}})}getMoviePage(e){this.isReady=!1,this.discoverService.getUpcomingMovies(e).subscribe({next:o=>{this.movieConfig.currentPage=e,this.movieConfig.totalItems=o.total_results,this.movieData=o.results,this.isReady=!0,window.scrollTo(0,0)},error:o=>{console.log(o),this.isReady=!0,window.scrollTo(0,0)}})}getTVPage(e){this.isReady=!1,this.discoverService.getUpcomingTVSeries(e).subscribe({next:o=>{this.tvConfig.currentPage=e,this.tvConfig.totalItems=o.total_results,this.tvData=o.results,this.isReady=!0,window.scrollTo(0,0)},error:o=>{console.log(o),this.isReady=!0,window.scrollTo(0,0)}})}onAddMovie(e){this.movieCollection.push(e.toString()),console.log("added movie - "+e)}onRemoveMovie(e){const o=this.movieCollection.indexOf(e.toString());this.movieCollection.splice(o,1),console.log("removed movie - "+e)}onAddTV(e){this.tvCollection.push(e.toString()),console.log("added tv - "+e)}onRemoveTV(e){const o=this.tvCollection.indexOf(e.toString());this.tvCollection.splice(o,1),console.log("removed tv - "+e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C),t.Y36(r.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-discover"]],decls:16,vars:11,consts:[[1,"discover-nav"],[1,"toggle-container"],["id","toggle-movie",3,"ngClass","click"],["id","toggle-tv",3,"ngClass","click"],["class","loader-container",4,"ngIf"],["id","results-container"],[4,"ngIf"],["id","moviePagination",3,"maxSize","pageChange",4,"ngIf"],["id","tvPagination",3,"maxSize","pageChange",4,"ngIf"],[1,"loader-container"],[4,"ngFor","ngForOf"],[3,"cardType","cardData","inCollection","added","removed"],["id","moviePagination",3,"maxSize","pageChange"],["p","paginationApi"],["class","custom-pagination",4,"ngIf"],[1,"custom-pagination"],[1,"pagination-previous"],[3,"click",4,"ngIf"],[3,"current",4,"ngFor","ngForOf"],[1,"pagination-next"],[3,"click"],[3,"icon"],["id","tvPagination",3,"maxSize","pageChange"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Discover"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Explore and find the latest movies and tv series to add to your collection."),t.qZA(),t.TgZ(5,"div",1)(6,"span",2),t.NdJ("click",function(){return o.toggleMovies=!0}),t._uU(7,"Movie"),t.qZA(),t.TgZ(8,"span",3),t.NdJ("click",function(){return o.toggleMovies=!1}),t._uU(9,"TV"),t.qZA()()(),t.YNc(10,_,2,0,"div",4),t.TgZ(11,"div",5),t.YNc(12,O,3,4,"ng-container",6),t.YNc(13,w,3,4,"ng-container",6),t.qZA(),t.YNc(14,N,3,2,"pagination-template",7),t.YNc(15,Y,3,2,"pagination-template",8)),2&e&&(t.xp6(6),t.Q6J("ngClass",t.VKq(7,P,o.toggleMovies)),t.xp6(2),t.Q6J("ngClass",t.VKq(9,P,!o.toggleMovies)),t.xp6(2),t.Q6J("ngIf",!o.isReady),t.xp6(2),t.Q6J("ngIf",o.toggleMovies),t.xp6(1),t.Q6J("ngIf",!o.toggleMovies),t.xp6(1),t.Q6J("ngIf",o.firstLoadComplete&&o.toggleMovies),t.xp6(1),t.Q6J("ngIf",!o.toggleMovies))},directives:[i.mk,i.O5,g.R,i.sg,p.v,d.tk,v.BN],pipes:[d._s],styles:["#results-container[_ngcontent-%COMP%]{display:grid;grid-gap:2em;grid-template-columns:15% 15% 15% 15% 15%;justify-content:space-evenly;padding:2em}h1[_ngcontent-%COMP%]{margin-bottom:.4em;font-weight:600;display:flex;justify-content:center}p[_ngcontent-%COMP%]{margin:1em 0;padding:0 3em;text-align:center;font-size:.9em;color:#666}.toggle-container[_ngcontent-%COMP%]{display:block;margin:1em auto auto;width:max-content;border-radius:20px;text-align:center;padding:.3em;background-color:#f8f8f8}.toggle-container[_ngcontent-%COMP%]   #toggle-movie[_ngcontent-%COMP%], .toggle-container[_ngcontent-%COMP%]   #toggle-tv[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;padding:.4em 1em;border-radius:20px;width:3em;color:#666;font-weight:500}.toggle-container[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{background-color:#000;color:#fff!important}.loader-container[_ngcontent-%COMP%]{margin-top:3em}.custom-pagination[_ngcontent-%COMP%]{display:flex;text-align:center;align-items:center;max-width:20em;margin:auto;padding-top:1em;padding-bottom:3em}.custom-pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1;font-size:1.1em}.custom-pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;padding:.6em}.current[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:1.2em;color:#fff;background-color:#000;padding:.4em;margin:0;border-radius:20px;font-size:.8em}@media (min-width: 2100px){pagination-template[_ngcontent-%COMP%]{font-size:1.2em}}@media (min-width: 2000px){.discover-nav[_ngcontent-%COMP%]{font-size:1.3em}}@media (min-width: 1800px){#results-container[_ngcontent-%COMP%]{grid-template-columns:11% 11% 11% 11% 11% 11% 11% 11%}.custom-pagination[_ngcontent-%COMP%]{padding-top:3em}}@media (max-width: 1800px){#results-container[_ngcontent-%COMP%]{grid-template-columns:12% 12% 12% 12% 12% 12% 12%}}@media (max-width: 1400px){#results-container[_ngcontent-%COMP%]{grid-template-columns:14% 14% 14% 14% 14% 14%}}@media (max-width: 1150px){#results-container[_ngcontent-%COMP%]{grid-template-columns:17% 17% 17% 17% 17%}}@media (max-width: 1020px){#results-container[_ngcontent-%COMP%]{grid-template-columns:20% 20% 20% 20%}}@media (max-width: 760px){#results-container[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 725px){.discover-nav[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 650px){#results-container[_ngcontent-%COMP%]{grid-template-columns:25% 25% 25%}}@media (max-width: 530px){pagination-template[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 500px){#results-container[_ngcontent-%COMP%]{grid-template-columns:33% 33%;padding-left:0;padding-right:0;padding-top:1em}.discover-nav[_ngcontent-%COMP%]{margin-bottom:.5em}}@media (max-width: 410px){#results-container[_ngcontent-%COMP%]{grid-template-columns:50%}}@media (max-width: 400px){pagination-template[_ngcontent-%COMP%]{font-size:.8em}}@media (max-width: 350px){pagination-template[_ngcontent-%COMP%]{font-size:.7em}.discover-nav[_ngcontent-%COMP%]{font-size:.8em}}"]}),n})()}];let R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(q)],u.Bz]}),n})();var E=s(4466);let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[C],imports:[[i.ez,E.m,R,d.JX,v.uH]]}),n})()}}]);
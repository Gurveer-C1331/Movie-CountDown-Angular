"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[656],{7656:(K,g,c)=>{c.r(g),c.d(g,{DiscoverModule:()=>B});var s=c(9808),p=c(9966),_=c(9546),l=c(505),d=c(2687),t=c(1223),m=c(2340),x=c(520);let v=(()=>{class n{constructor(e){this.http=e,this.url=m.N.tmdb.url,this.apiKey=m.N.tmdb.apiKey}getUpcomingMovies(e){const o=new Date;return this.http.get(this.url+"/discover/movie?api_key="+this.apiKey+"&region=US&sort_by=popularity.desc&release_date.gte="+o.toJSON().substr(0,10)+"&with_release_type=3|2&page="+e)}getUpcomingTVSeries(e){const o=new Date;return this.http.get(this.url+"/discover/tv?api_key="+this.apiKey+"&with_original_language=en&sort_by=popularity.desc&air_date.gte="+o.toJSON().substr(0,10)+"&with_type=0|2|3|4|5|6&page="+e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var f=c(3398),C=c(9047);function h(n,i){if(1&n&&t._UZ(0,"img",7),2&n){const e=t.oxw();t.MGl("src","https://image.tmdb.org/t/p/w500",e.cardData.poster_path,"",t.LSH)}}function M(n,i){1&n&&t._UZ(0,"img",8)}function P(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.cardData.title)}}function T(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.cardData.name)}}const O=function(n){return{"background-image":n}},D=function(){return{"background-image":"none"}};let w=(()=>{class n{constructor(){this.removed=new t.vpe,this.added=new t.vpe}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-discover-card"]],inputs:{cardType:"cardType",cardData:"cardData",inCollection:"inCollection"},outputs:{removed:"removed",added:"added"},decls:12,vars:10,consts:[[1,"search-card",3,"ngStyle"],[1,"search-item"],["class","no-hover poster","alt","","id","image",3,"src",4,"ngIf","ngIfElse"],["elsePoster",""],[1,"no-hover"],[4,"ngIf"],[2,"display","none"],["alt","","id","image",1,"no-hover","poster",3,"src"],["src","","alt","poster image",1,"no-hover",2,"padding","1em"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,h,1,1,"img",2),t.YNc(3,M,1,0,"ng-template",null,3,t.W1O),t.TgZ(5,"div",4),t.YNc(6,P,2,1,"span",5),t.YNc(7,T,2,1,"span",5),t.qZA(),t.TgZ(8,"span",6),t._uU(9),t.qZA(),t.TgZ(10,"span",6),t._uU(11),t.qZA()()()),2&e){const a=t.MAs(4);t.Q6J("ngStyle",o.cardData.poster_path?t.VKq(7,O,"url(https://image.tmdb.org/t/p/w500"+o.cardData.poster_path+")"):t.DdM(9,D)),t.xp6(2),t.Q6J("ngIf",o.cardData.poster_path)("ngIfElse",a),t.xp6(4),t.Q6J("ngIf",o.cardData.title),t.xp6(1),t.Q6J("ngIf",o.cardData.name),t.xp6(2),t.Oqu(o.cardData.id),t.xp6(2),t.Oqu(o.cardType)}},directives:[s.PC,s.O5],styles:[".search-card[_ngcontent-%COMP%]{border-radius:20px;background-size:cover;background-position:center;height:100%;position:relative}.search-item[_ngcontent-%COMP%]{background-color:#0003;border-radius:20px;padding:0 0 1em;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);height:calc(100% - 1em);display:grid}.search-item[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%]{position:relative;left:50%;transform:translate(-50%);width:100%;margin-bottom:1em;border-radius:20px 20px 0 0}.search-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{overflow:hidden}.search-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;text-align:center;padding:0 1em;color:#fff}.add-text[_ngcontent-%COMP%], .remove-text[_ngcontent-%COMP%]{display:none;background-color:#000000bf;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:50%;position:absolute;top:-4%;right:-6%;padding:.5em;width:1.5em}.add-text[_ngcontent-%COMP%], .remove-text[_ngcontent-%COMP%]{display:none}.search-card[_ngcontent-%COMP%]:hover   .add-text[_ngcontent-%COMP%], .search-card[_ngcontent-%COMP%]:hover   .remove-text[_ngcontent-%COMP%]{display:flex}@media (min-width: 2100px){.add-text[_ngcontent-%COMP%], .remove-text[_ngcontent-%COMP%]{font-size:1.2em}}@media (min-width: 2000px){.search-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.3em}}@media (max-width: 2000px){.search-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1em}}@media (max-width: 1400px){.search-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1em}}@media (max-width: 1150px){.add-text[_ngcontent-%COMP%], .remove-text[_ngcontent-%COMP%]{font-size:1em}}"]}),n})();function Z(n,i){1&n&&(t.TgZ(0,"div",9),t._UZ(1,"app-loader"),t.qZA())}function y(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"app-discover-card",11),t.NdJ("added",function(a){return t.CHM(e),t.oxw(2).onAddMovie(a)})("removed",function(a){return t.CHM(e),t.oxw(2).onRemoveMovie(a)}),t.qZA(),t.BQk()}if(2&n){const e=i.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("cardType","movie")("cardData",e)("inCollection",o.movieCollection.includes(e.id.toString()))}}function A(n,i){if(1&n&&(t.ynx(0),t.YNc(1,y,2,3,"ng-container",10),t.ALo(2,"paginate"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.movieData,e.movieConfig))}}function b(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"app-discover-card",11),t.NdJ("added",function(a){return t.CHM(e),t.oxw(2).onAddTV(a)})("removed",function(a){return t.CHM(e),t.oxw(2).onRemoveTV(a)}),t.qZA(),t.BQk()}if(2&n){const e=i.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("cardType","tv")("cardData",e)("inCollection",o.tvCollection.includes(e.id.toString()))}}function k(n,i){if(1&n&&(t.ynx(0),t.YNc(1,b,2,3,"ng-container",10),t.ALo(2,"paginate"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.tvData,e.tvConfig))}}function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){return t.CHM(e),t.oxw(2),t.MAs(1).previous()}),t._UZ(1,"fa-icon",21),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("icon",e.faArrowLeft)}}function N(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw(2),t.MAs(1).setCurrent(a.value)}),t.TgZ(1,"span"),t._uU(2),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.label)}}function I(n,i){if(1&n&&(t.TgZ(0,"div")(1,"span"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.label)}}function Q(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,N,3,1,"a",17),t.YNc(2,I,3,1,"div",6),t.qZA()),2&n){const e=i.$implicit;t.oxw(2);const o=t.MAs(1);t.ekj("current",o.getCurrent()===e.value),t.xp6(1),t.Q6J("ngIf",o.getCurrent()!==e.value),t.xp6(1),t.Q6J("ngIf",o.getCurrent()===e.value)}}function S(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){return t.CHM(e),t.oxw(2),t.MAs(1).next()}),t._UZ(1,"fa-icon",21),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("icon",e.faArrowRight)}}function z(n,i){if(1&n&&(t.TgZ(0,"div",15)(1,"div",16),t.YNc(2,J,2,1,"a",17),t.qZA(),t.YNc(3,Q,3,4,"div",18),t.TgZ(4,"div",19),t.YNc(5,S,2,1,"a",17),t.qZA()()),2&n){t.oxw();const e=t.MAs(1);t.xp6(1),t.ekj("disabled",e.isFirstPage()),t.xp6(1),t.Q6J("ngIf",!e.isFirstPage()),t.xp6(1),t.Q6J("ngForOf",e.pages),t.xp6(1),t.ekj("disabled",e.isLastPage()),t.xp6(1),t.Q6J("ngIf",!e.isLastPage())}}function q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"pagination-template",12,13),t.NdJ("pageChange",function(a){return t.CHM(e),t.oxw().getMoviePage(a)}),t.YNc(2,z,6,7,"div",14),t.qZA()}if(2&n){const e=t.MAs(1),o=t.oxw();t.Q6J("maxSize",o.maxSize),t.xp6(2),t.Q6J("ngIf",e.pages.length>1)}}function F(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){return t.CHM(e),t.oxw(2),t.MAs(1).previous()}),t._UZ(1,"fa-icon",21),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("icon",e.faArrowLeft)}}function U(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw(2),t.MAs(1).setCurrent(a.value)}),t.TgZ(1,"span"),t._uU(2),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.label)}}function Y(n,i){if(1&n&&(t.TgZ(0,"div")(1,"span"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.label)}}function R(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,U,3,1,"a",17),t.YNc(2,Y,3,1,"div",6),t.qZA()),2&n){const e=i.$implicit;t.oxw(2);const o=t.MAs(1);t.ekj("current",o.getCurrent()===e.value),t.xp6(1),t.Q6J("ngIf",o.getCurrent()!==e.value),t.xp6(1),t.Q6J("ngIf",o.getCurrent()===e.value)}}function E(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){return t.CHM(e),t.oxw(2),t.MAs(1).next()}),t._UZ(1,"fa-icon",21),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("icon",e.faArrowRight)}}function H(n,i){if(1&n&&(t.TgZ(0,"div",15)(1,"div",16),t.YNc(2,F,2,1,"a",17),t.qZA(),t.YNc(3,R,3,4,"div",18),t.TgZ(4,"div",19),t.YNc(5,E,2,1,"a",17),t.qZA()()),2&n){t.oxw();const e=t.MAs(1);t.xp6(1),t.ekj("disabled",e.isFirstPage()),t.xp6(1),t.Q6J("ngIf",!e.isFirstPage()),t.xp6(1),t.Q6J("ngForOf",e.pages),t.xp6(1),t.ekj("disabled",e.isLastPage()),t.xp6(1),t.Q6J("ngIf",!e.isLastPage())}}function L(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"pagination-template",22,13),t.NdJ("pageChange",function(a){return t.CHM(e),t.oxw().getTVPage(a)}),t.YNc(2,H,6,7,"div",14),t.qZA()}if(2&n){const e=t.MAs(1),o=t.oxw();t.Q6J("maxSize",o.maxSize),t.xp6(2),t.Q6J("ngIf",e.pages.length>1)}}const u=function(n){return{current:n}},V=[{path:"",component:(()=>{class n{constructor(e,o){this.discoverService=e,this.cookieService=o,this.movieData=[],this.tvData=[],this.firstLoadComplete=!1,this.isReady=!1,this.toggleMovies=!0,this.maxSize=5,this.movieConfig={id:"moviePagination",itemsPerPage:20,currentPage:1,totalItems:20},this.tvConfig={id:"tvPagination",itemsPerPage:20,currentPage:1,totalItems:20},this.faArrowLeft=d.EyR,this.faArrowRight=d.yOZ}ngOnInit(){this.movieCollection=this.cookieService.getCookie("movieCollection"),this.tvCollection=this.cookieService.getCookie("tvCollection"),console.log(this.movieCollection),console.log(this.tvCollection),this.discoverService.getUpcomingMovies(1).subscribe({next:e=>{this.movieConfig.totalItems=e.total_results,this.movieData=e.results,this.isReady=!0,this.firstLoadComplete=!0},error:e=>{console.log(e),this.isReady=!0}}),this.discoverService.getUpcomingTVSeries(1).subscribe({next:e=>{this.tvConfig.totalItems=e.total_results,this.tvData=e.results},error:e=>{console.log(e)}})}getMoviePage(e){this.isReady=!1,this.discoverService.getUpcomingMovies(e).subscribe({next:o=>{this.movieConfig.currentPage=e,this.movieConfig.totalItems=o.total_results,this.movieData=o.results,this.isReady=!0},error:o=>{console.log(o),this.isReady=!0}})}getTVPage(e){this.isReady=!1,this.discoverService.getUpcomingTVSeries(e).subscribe({next:o=>{this.tvConfig.currentPage=e,this.tvConfig.totalItems=o.total_results,this.tvData=o.results,this.isReady=!0},error:o=>{console.log(o),this.isReady=!0}})}onAddMovie(e){this.movieCollection.push(e.toString()),console.log("added movie - "+e)}onRemoveMovie(e){const o=this.movieCollection.indexOf(e.toString());this.movieCollection.splice(o,1),console.log("removed movie - "+e)}onAddTV(e){this.tvCollection.push(e.toString()),console.log("added tv - "+e)}onRemoveTV(e){const o=this.tvCollection.indexOf(e.toString());this.tvCollection.splice(o,1),console.log("removed tv - "+e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(v),t.Y36(f.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-discover"]],decls:16,vars:11,consts:[[1,"discover-nav"],[1,"toggle-container"],["id","toggle-movie",3,"ngClass","click"],["id","toggle-tv",3,"ngClass","click"],["class","loader-container",4,"ngIf"],["id","results-container"],[4,"ngIf"],["id","moviePagination",3,"maxSize","pageChange",4,"ngIf"],["id","tvPagination",3,"maxSize","pageChange",4,"ngIf"],[1,"loader-container"],[4,"ngFor","ngForOf"],[3,"cardType","cardData","inCollection","added","removed"],["id","moviePagination",3,"maxSize","pageChange"],["p","paginationApi"],["class","custom-pagination",4,"ngIf"],[1,"custom-pagination"],[1,"pagination-previous"],[3,"click",4,"ngIf"],[3,"current",4,"ngFor","ngForOf"],[1,"pagination-next"],[3,"click"],[3,"icon"],["id","tvPagination",3,"maxSize","pageChange"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Discover"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Explore and find the latest movies and tv series to add to your collection."),t.qZA(),t.TgZ(5,"div",1)(6,"span",2),t.NdJ("click",function(){return o.toggleMovies=!0}),t._uU(7,"Movie"),t.qZA(),t.TgZ(8,"span",3),t.NdJ("click",function(){return o.toggleMovies=!1}),t._uU(9,"TV"),t.qZA()()(),t.YNc(10,Z,2,0,"div",4),t.TgZ(11,"div",5),t.YNc(12,A,3,4,"ng-container",6),t.YNc(13,k,3,4,"ng-container",6),t.qZA(),t.YNc(14,q,3,2,"pagination-template",7),t.YNc(15,L,3,2,"pagination-template",8)),2&e&&(t.xp6(6),t.Q6J("ngClass",t.VKq(7,u,o.toggleMovies)),t.xp6(2),t.Q6J("ngClass",t.VKq(9,u,!o.toggleMovies)),t.xp6(2),t.Q6J("ngIf",!o.isReady),t.xp6(2),t.Q6J("ngIf",o.toggleMovies),t.xp6(1),t.Q6J("ngIf",!o.toggleMovies),t.xp6(1),t.Q6J("ngIf",o.firstLoadComplete&&o.toggleMovies),t.xp6(1),t.Q6J("ngIf",!o.toggleMovies))},directives:[s.mk,s.O5,C.R,s.sg,w,p.tk,_.BN],pipes:[p._s],styles:["#results-container[_ngcontent-%COMP%]{display:grid;grid-gap:2em;grid-template-columns:15% 15% 15% 15% 15%;justify-content:space-evenly;padding:2em}h1[_ngcontent-%COMP%]{margin-bottom:.4em;font-weight:600;display:flex;justify-content:center}p[_ngcontent-%COMP%]{margin:1em 0;padding:0 3em;text-align:center;font-size:.9em;color:#666}.toggle-container[_ngcontent-%COMP%]{display:block;margin:1em auto auto;width:max-content;border-radius:20px;text-align:center;padding:.3em;background-color:#f8f8f8}.toggle-container[_ngcontent-%COMP%]   #toggle-movie[_ngcontent-%COMP%], .toggle-container[_ngcontent-%COMP%]   #toggle-tv[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;padding:.4em 1em;border-radius:20px;width:3em;color:#666;font-weight:500}.toggle-container[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{background-color:#000;color:#fff!important}.loader-container[_ngcontent-%COMP%]{margin-top:3em}.custom-pagination[_ngcontent-%COMP%]{display:flex;text-align:center;align-items:center;max-width:20em;margin:auto;padding-top:1em;padding-bottom:3em}.custom-pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1;font-size:1.1em}.custom-pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;padding:.6em}.current[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:1.2em;color:#fff;background-color:#000;padding:.4em;margin:0;border-radius:20px;font-size:.8em}@media (min-width: 2100px){pagination-template[_ngcontent-%COMP%]{font-size:1.2em}}@media (min-width: 2000px){.discover-nav[_ngcontent-%COMP%]{font-size:1.3em}}@media (min-width: 1800px){#results-container[_ngcontent-%COMP%]{grid-template-columns:11% 11% 11% 11% 11% 11% 11% 11%}.custom-pagination[_ngcontent-%COMP%]{padding-top:3em}}@media (max-width: 1800px){#results-container[_ngcontent-%COMP%]{grid-template-columns:12% 12% 12% 12% 12% 12% 12%}}@media (max-width: 1400px){#results-container[_ngcontent-%COMP%]{grid-template-columns:14% 14% 14% 14% 14% 14%}}@media (max-width: 1150px){#results-container[_ngcontent-%COMP%]{grid-template-columns:17% 17% 17% 17% 17%}}@media (max-width: 1020px){#results-container[_ngcontent-%COMP%]{grid-template-columns:20% 20% 20% 20%}}@media (max-width: 760px){#results-container[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 725px){.discover-nav[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 650px){#results-container[_ngcontent-%COMP%]{grid-template-columns:25% 25% 25%}}@media (max-width: 530px){pagination-template[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 500px){#results-container[_ngcontent-%COMP%]{grid-template-columns:33% 33%;padding-left:0;padding-right:0;padding-top:1em}.discover-nav[_ngcontent-%COMP%]{margin-bottom:.5em}}@media (max-width: 410px){#results-container[_ngcontent-%COMP%]{grid-template-columns:50%}}@media (max-width: 400px){pagination-template[_ngcontent-%COMP%]{font-size:.8em}}@media (max-width: 350px){pagination-template[_ngcontent-%COMP%]{font-size:.7em}.discover-nav[_ngcontent-%COMP%]{font-size:.8em}}"]}),n})()}];let j=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(V)],l.Bz]}),n})();var $=c(4466);let B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[v],imports:[[s.ez,$.m,j,p.JX,_.uH]]}),n})()}}]);
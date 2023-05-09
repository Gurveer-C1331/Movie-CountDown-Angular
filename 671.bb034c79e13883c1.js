"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{1671:(D,p,c)=>{c.r(p),c.d(p,{SearchModule:()=>Q});var s=c(9808),l=c(1695),g=c(2687),f=c(4128),m=c(262),h=c(9646),t=c(4893),_=c(2340),C=c(520);let u=(()=>{class n{constructor(e){this.http=e,this.url=_.N.tmdb.url,this.apiKey=_.N.tmdb.apiKey}getSearchResults(e,o){return this.http.get(this.url+"/search/multi?api_key="+this.apiKey+"&query="+e+"&region=US&include_adult=false&page="+o)}getMovieById(e){return this.http.get(this.url+"/movie/"+e+"?api_key="+this.apiKey)}getTVById(e){return this.http.get(this.url+"/tv/"+e+"?api_key="+this.apiKey)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(C.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var x=c(6387),S=c(9047),M=c(5672),d=c(9966),v=c(9546);function y(n,i){1&n&&(t.TgZ(0,"div",6),t._UZ(1,"app-loader"),t.qZA())}function P(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"app-discover-card",8),t.NdJ("added",function(a){return t.CHM(e),t.oxw(2).onAddMovie(a)})("removed",function(a){return t.CHM(e),t.oxw(2).onRemoveMovie(a)}),t.qZA()}if(2&n){const e=t.oxw().$implicit,o=t.oxw();t.Q6J("cardType","movie")("cardData",e)("inCollection",o.movieCollection.includes(e.id.toString()))}}function O(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"app-discover-card",8),t.NdJ("added",function(a){return t.CHM(e),t.oxw(2).onAddTV(a)})("removed",function(a){return t.CHM(e),t.oxw(2).onRemoveTV(a)}),t.qZA()}if(2&n){const e=t.oxw().$implicit,o=t.oxw();t.Q6J("cardType","tv")("cardData",e)("inCollection",o.tvCollection.includes(e.id.toString()))}}function T(n,i){if(1&n&&(t.ynx(0),t.YNc(1,P,1,3,"app-discover-card",7),t.YNc(2,O,1,3,"app-discover-card",7),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf","movie"===e.media_type),t.xp6(1),t.Q6J("ngIf","tv"===e.media_type)}}function w(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"a",14),t.NdJ("click",function(){return t.CHM(e),t.oxw(2),t.MAs(5).previous()}),t._UZ(1,"fa-icon",15),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("icon",e.faArrowLeft)}}function R(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"a",14),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw(2),t.MAs(5).setCurrent(a.value)}),t.TgZ(1,"span"),t._uU(2),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.label)}}function A(n,i){if(1&n&&(t.TgZ(0,"div")(1,"span"),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.label)}}function Z(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,R,3,1,"a",11),t.YNc(2,A,3,1,"div",16),t.qZA()),2&n){const e=i.$implicit;t.oxw(2);const o=t.MAs(5);t.ekj("current",o.getCurrent()===e.value),t.xp6(1),t.Q6J("ngIf",o.getCurrent()!==e.value),t.xp6(1),t.Q6J("ngIf",o.getCurrent()===e.value)}}function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"a",14),t.NdJ("click",function(){return t.CHM(e),t.oxw(2),t.MAs(5).next()}),t._UZ(1,"fa-icon",15),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("icon",e.faArrowRight)}}function I(n,i){if(1&n&&(t.TgZ(0,"div",9)(1,"div",10),t.YNc(2,w,2,1,"a",11),t.qZA(),t.YNc(3,Z,3,4,"div",12),t.TgZ(4,"div",13),t.YNc(5,J,2,1,"a",11),t.qZA()()),2&n){t.oxw();const e=t.MAs(5);t.xp6(1),t.ekj("disabled",e.isFirstPage()),t.xp6(1),t.Q6J("ngIf",!e.isFirstPage()),t.xp6(1),t.Q6J("ngForOf",e.pages),t.xp6(1),t.ekj("disabled",e.isLastPage()),t.xp6(1),t.Q6J("ngIf",!e.isLastPage())}}const z=[{path:"",component:(()=>{class n{constructor(e,o,a){this.route=e,this.searchSerivce=o,this.collectionService=a,this.searchResultData=[],this.isReady=!1,this.maxSize=5,this.config={itemsPerPage:20,currentPage:1,totalItems:20},this.faArrowLeft=g.EyR,this.faArrowRight=g.yOZ}ngOnInit(){this.movieCollection=this.collectionService.getCollection("movieCollection"),this.tvCollection=this.collectionService.getCollection("tvCollection"),console.log(this.movieCollection),console.log(this.tvCollection),this.route.queryParamMap.subscribe(e=>{this.isReady=!1,this.searchResultData=[],this.searchString=String(e.get("q")),this.config={itemsPerPage:20,currentPage:1,totalItems:20},this.searchString.includes("tmdb")?(0,f.D)({movie:this.searchSerivce.getMovieById(this.searchString.replace("tmdb","")).pipe((0,m.K)(()=>(0,h.of)(null))),tv:this.searchSerivce.getTVById(this.searchString.replace("tmdb","")).pipe((0,m.K)(()=>(0,h.of)(null)))}).subscribe(o=>{o.movie&&(o.movie.media_type="movie",this.searchResultData.push(o.movie)),o.tv&&(o.tv.media_type="tv",this.searchResultData.push(o.tv)),this.isReady=!0}):this.searchSerivce.getSearchResults(this.searchString,1).subscribe({next:o=>{console.log(o.results),this.config.totalItems=o.total_results,this.searchResultData=o.results,this.isReady=!0},error:o=>{console.log(o),this.isReady=!0}})})}getSearchPage(e){this.isReady=!1,this.searchSerivce.getSearchResults(this.searchString,e).subscribe({next:o=>{this.config.currentPage=e,this.config.totalItems=o.total_results,this.searchResultData=o.results,console.log(this.searchResultData),this.isReady=!0,window.scrollTo(0,0)},error:o=>{console.log(o),this.isReady=!0,window.scrollTo(0,0)}})}onAddMovie(e){this.movieCollection.push(e.toString()),this.collectionService.setCollection("movieCollection",this.movieCollection)}onRemoveMovie(e){const o=this.movieCollection.indexOf(e.toString());this.movieCollection.splice(o,1),this.collectionService.setCollection("movieCollection",this.movieCollection)}onAddTV(e){this.tvCollection.push(e.toString()),this.collectionService.setCollection("tvCollection",this.tvCollection)}onRemoveTV(e){const o=this.tvCollection.indexOf(e.toString());this.tvCollection.splice(o,1),this.collectionService.setCollection("tvCollection",this.tvCollection)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(u),t.Y36(x.a))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-search"]],decls:7,vars:7,consts:[["class","loader-container",4,"ngIf"],["id","results-container"],[4,"ngFor","ngForOf"],[3,"maxSize","pageChange"],["p","paginationApi"],["class","custom-pagination",4,"ngIf"],[1,"loader-container"],[3,"cardType","cardData","inCollection","added","removed",4,"ngIf"],[3,"cardType","cardData","inCollection","added","removed"],[1,"custom-pagination"],[1,"pagination-previous"],[3,"click",4,"ngIf"],[3,"current",4,"ngFor","ngForOf"],[1,"pagination-next"],[3,"click"],[3,"icon"],[4,"ngIf"]],template:function(e,o){if(1&e&&(t.YNc(0,y,2,0,"div",0),t.TgZ(1,"div",1),t.YNc(2,T,3,2,"ng-container",2),t.ALo(3,"paginate"),t.qZA(),t.TgZ(4,"pagination-template",3,4),t.NdJ("pageChange",function(r){return o.getSearchPage(r)}),t.YNc(6,I,6,7,"div",5),t.qZA()),2&e){const a=t.MAs(5);t.Q6J("ngIf",!o.isReady),t.xp6(2),t.Q6J("ngForOf",t.xi3(3,4,o.searchResultData,o.config)),t.xp6(2),t.Q6J("maxSize",o.maxSize),t.xp6(2),t.Q6J("ngIf",a.pages.length>1)}},directives:[s.O5,S.R,s.sg,M.v,d.tk,v.BN],pipes:[d._s],styles:["#results-container[_ngcontent-%COMP%]{display:grid;grid-gap:2em;grid-template-columns:15% 15% 15% 15% 15%;justify-content:space-evenly;padding:2em}h1[_ngcontent-%COMP%]{margin-bottom:.4em;font-weight:600;display:flex;justify-content:center}p[_ngcontent-%COMP%]{margin:1em 0;padding:0 3em;text-align:center;font-size:.9em;color:#666}.toggle-container[_ngcontent-%COMP%]{display:block;margin:1em auto auto;width:max-content;border-radius:20px;text-align:center;padding:.3em;background-color:#f8f8f8}.toggle-container[_ngcontent-%COMP%]   #toggle-movie[_ngcontent-%COMP%], .toggle-container[_ngcontent-%COMP%]   #toggle-tv[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;padding:.4em 1em;border-radius:20px;width:3em;color:#666;font-weight:500}.toggle-container[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{background-color:#000;color:#fff!important}.loader-container[_ngcontent-%COMP%]{margin-top:3em}.custom-pagination[_ngcontent-%COMP%]{display:flex;text-align:center;align-items:center;max-width:20em;margin:auto;padding-top:1em;padding-bottom:3em}.custom-pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1;font-size:1.1em}.custom-pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;padding:.6em}.current[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:1.2em;color:#fff;background-color:#000;padding:.4em;margin:0;border-radius:20px;font-size:.8em}@media (min-width: 2100px){pagination-template[_ngcontent-%COMP%]{font-size:1.2em}}@media (min-width: 2000px){.discover-nav[_ngcontent-%COMP%]{font-size:1.3em}}@media (min-width: 1800px){#results-container[_ngcontent-%COMP%]{grid-template-columns:11% 11% 11% 11% 11% 11% 11% 11%}.custom-pagination[_ngcontent-%COMP%]{padding-top:3em}}@media (max-width: 1800px){#results-container[_ngcontent-%COMP%]{grid-template-columns:12% 12% 12% 12% 12% 12% 12%}}@media (max-width: 1400px){#results-container[_ngcontent-%COMP%]{grid-template-columns:14% 14% 14% 14% 14% 14%}}@media (max-width: 1150px){#results-container[_ngcontent-%COMP%]{grid-template-columns:17% 17% 17% 17% 17%}}@media (max-width: 1020px){#results-container[_ngcontent-%COMP%]{grid-template-columns:20% 20% 20% 20%}}@media (max-width: 760px){#results-container[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 725px){.discover-nav[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 650px){#results-container[_ngcontent-%COMP%]{grid-template-columns:25% 25% 25%}}@media (max-width: 530px){pagination-template[_ngcontent-%COMP%]{font-size:.9em}}@media (max-width: 500px){#results-container[_ngcontent-%COMP%]{grid-template-columns:33% 33%;padding-left:0;padding-right:0;padding-top:1em}.discover-nav[_ngcontent-%COMP%]{margin-bottom:.5em}}@media (max-width: 410px){#results-container[_ngcontent-%COMP%]{grid-template-columns:50%}}@media (max-width: 400px){pagination-template[_ngcontent-%COMP%]{font-size:.8em}}@media (max-width: 350px){pagination-template[_ngcontent-%COMP%]{font-size:.7em}.discover-nav[_ngcontent-%COMP%]{font-size:.8em}}"]}),n})()}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(z)],l.Bz]}),n})();var F=c(4466),b=c(6375);let Q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[u],imports:[[s.ez,F.m,N,b.DiscoverModule,d.JX,v.uH]]}),n})()}}]);
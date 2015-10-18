function BodyController(){var t=!0;this.position="menu_colapsed",this.expand=function(){t?(t=!1,this.position="menu_expanded"):(t=!0,this.position="menu_colapsed")},this.showMenu=function(){this.expand()},this.getPosition=function(){return window.matchMedia("(max-width: 991px) ").matches?this.position:{}}}function FeedbackController(){}function HomeController(t,e){console.log(e.setQuoteRotation),e.setQuoteRotation()}function PhotosController(t,e){var o=e.rubric,r=null;this.deselectPhoto=function(){this.photos[r].selected=!1,r=null,this.overlay=!1},this.selectPhoto=function(t){console.log(t),r=t,this.photos[r].selected=!0,this.overlay=!0},this.touglePhoto=function(t){null!==r?this.deselectPhoto():this.selectPhoto(t)},t.get("/api/photo/?rubric="+o).then(function(t){this.photos=t.data}.bind(this))}!function(){function t(t,e){e.html5Mode({enabled:!0});var o={home:{templateUrl:"tmpl/home.html",controller:"HomeController",controllerAs:"Home"},material:{templateUrl:"tmpl/material.html",controller:"MaterialController",controllerAs:"Material"},materials:{templateUrl:"tmpl/materials.html",controller:"MaterialListController",controllerAs:"MaterialList"},san:{templateUrl:"tmpl/san.html",controller:"SanListController",controllerAs:"MaterialList"},scince:{templateUrl:"tmpl/san.html"},photos:{templateUrl:"tmpl/photos.html",controller:"PhotosController",controllerAs:"Photos"},videos:{templateUrl:"tmpl/videos.html",controller:"VideosController",controllerAs:"Videos"},feedback:{templateUrl:"tmpl/feedback.html",controller:"FeedbackController",controllerAs:"Feedback"}};t.when("/",o.home).when("/articles/:rubric/:id",o.material).when("/articles/:rubric",o.materials).when("/club/materials/:rubric",o.materials).when("/club/materials/:rubric/:id",o.material).when("/club/photos/:rubric",o.photos).when("/san/:rubric",o.san).when("/scince/:rubric",o.scince).when("/photos/:rubric",o.photos).when("/videos/:rubric",o.videos).when("/feedback",o.feedback).otherwise({redirectTo:"/"})}angular.module("Alperina",["ngRoute","ngSanitize","ngAnimate","youtube-embed","Alperina.controllers","Alperina.services"]),angular.module("Alperina.controllers",[]),angular.module("Alperina.services",[]),angular.module("Alperina").config(t),t.$inject=["$routeProvider","$locationProvider"]}(),angular.module("Alperina.controllers").controller("BodyController",BodyController),angular.module("Alperina.controllers").controller("FeedbackController",FeedbackController),function(){function t(){function t(t){return a.title=t,a.quote=null,a.notifyObservers()}function e(t){return a.quote=t,a.title=null,a.notifyObservers()}function o(t){return a.showTags=t,a.notifyObservers()}function r(t){return a.tags=t?function(t){for(c in s)if(s[c].name==t)return[s[c]]}(t):s,a.notifyObservers()}function n(t){i.push(t)}function l(){return angular.forEach(i,function(t){t()}),a}var a=this,i=[],s=[{alias:"Актеры",name:"actors",id:1},{alias:"Режиссеры",name:"directors",id:2},{alias:"Продюсеры",name:"producers",id:3},{alias:"Писатели",name:"writers",id:4},{alias:"Шоу-бизнес",name:"show_business",id:5},{alias:"Русский Голливуд",name:"russian_hollywood",id:6}],c=null;a.title="",a.tags=s,a.showTags=!1,a.setTitle=t,a.setQuote=e,a.setShowTags=o,a.setTags=r,a.registerObserverCallback=n,a.notifyObservers=l}angular.module("Alperina.controllers").service("Header",t)}(),function(){function t(t,o,r,n,l,a){var i=this,s={updateTitle:function(){i.title=a.title},updatequote:function(){i.quote=a.quote},updateShowTags:function(){i.showTags=a.showTags},updateTags:function(){i.tags=a.tags}},c=null,u=[{id:1,content:"<p>Чуть – чуть литературы,</p><p>И музыки немного,</p><p>И чертова натура,</p><p>И лирика – от Бога</p>"},{id:2,content:"<p>Тест,</p><p>И музыки немного,</p><p>Чуть чуть</p><p>Ещё</p>"}];for(c in s)a.registerObserverCallback(s[c]);i.path=r.path(),t.$on("$routeChangeSuccess",function(){var t=r.search();t.hasOwnProperty("tag")&&a.setTags(t.tag)}),o.quoteClass="quote_show",a.setQuoteRotation=function(){var t=new e;u.forEach(function(e,o){var r=t.append(e.content);0===o&&(head=r)}),a.setQuote(head.data);var r=head.next;o.quoteClass="quote_show",n(function(){o.quoteClass="quote_hide",console.log("quote_hide"),l(function(){a.setQuote(r.data),o.quoteClass="quote_show",console.log("quote_show"),r=r.next},2e3)},1e4)}}function e(){this._head=null,this._tail=null,this._length=0}angular.module("Alperina.controllers").controller("HeaderContrller",t),t.$inject=["$rootScope","$scope","$location","$interval","$timeout","Header"],e.prototype._createNewNode=function(t){var e={data:t,next:null,prev:null};return e},e.prototype.append=function(t){var e=this._createNewNode(t);return 0===this._length?(this._head=e,this._tail=e):(this._tail.next=e,e.prev=this._tail,this._tail=e),this._length++,e},e.prototype.prepend=function(t){var e=this._createNewNode(t);return null===this.first?void this.append(t):(this._head.prev=e,e.next=this._head,this._head=e,this._length++,e)},e.prototype.item=function(t){if(t>=0&&t<this._length){for(var e=this._head;t--;)e=e.next;return e}},e.prototype.head=function(){return this._head},e.prototype.tail=function(){return this._tail},e.prototype.size=function(){return this._length},e.prototype.remove=function(){throw"Not implemented"}}(),angular.module("Alperina.controllers").controller("HomeController",HomeController),HomeController.$inject=["$rootScope","Header"],function(){function t(t,e,o,r){var n=this;o.get("/api/material/"+t.id).then(function(t){console.log(t.data),n.material=t.data.material,n.tags=t.data.tags,r.setTitle(n.material.title)})}angular.module("Alperina.controllers").controller("MaterialController",t),t.$inject=["$routeParams","$sce","$http","Header"]}(),function(){function t(t,e,o,r,n,l){var a=o.rubric,i=null,s={},c=0,u=function(t){parseInt(t)===t&&(s.after=t),l.get("/api/material.json",{params:s}).then(function(t){this.showLoadMore=t.data.length>=5?!0:!1,[].push.apply(this.materials,t.data)}.bind(this))},h=function(){c+=5,u.call(this,c)};t.$on("$routeUpdate",function(){i=r.search().tag,s.tag=i,u.call(this)}.bind(this)),s.rubric=a,"persons"===a&&(i=r.search().tag,s.tag=i),this.materials=[],this.showLoadMore=!1,this.showTags=n.showTags,this.path=r.path(),this.loadMore=h,u.call(this)}angular.module("Alperina.controllers").controller("MaterialListController",t),t.$inject=["$scope","$rootScope","$routeParams","$location","Header","$http"]}(),function(){function t(t,e,o,r,n){var l=e.rubric;n.get("/api/material/new.json?rubric="+l).then(function(t){this.materials=t.data}.bind(this)),this.showTags=r.showTags,this.path=o.path()}angular.module("Alperina.controllers").controller("SanListController",t),t.$inject=["$rootScope","$routeParams","$location","Header","$http"]}(),function(){function t(t,e,o){function r(t){var e=null;for(e in a.items)a.items[e]=e===t?!a.items[e]:!1}function n(t){var o=e.path();return o.indexOf(t)>-1?!0:!1}function l(){var t=e.search(),r=e.path();o.setShowTags("/articles/persons"==r).setTitle(a.titles[r]),t.hasOwnProperty("tag")||o.setTags()}var a=this,i=null,s=e.path();a.titles={"/articles/persons":"Персоны","/articles/reviews":"Рецензии","/articles/travel":"Путешествия","/club/news":"Клуб одесситов - Новости","/club/photos":"Клуб одесситов - Фото","/san/poetry":"Стихи","/san/songs":"Песни","/san/stories":"Рассказы","/san/thoughts":"Мысли","/scince/synopsis":"Автореферат","/san/thoughts":"Мысли","/scince/thesis":"Диссертация","/photos/self":"Фото - САНолюбование","/photos/other":"Фото - САН техника","/videos/self":"Видео - САНолюбование","/videos/other":"Видео - КлипС.А.","/feedback":"Обратная связь"},l(),a.items={articles:!1,club:!1,san:!1,scince:!1,photos:!1,videos:!1};for(i in a.items)s.indexOf(i)>-1&&r(i);a.expandSubMenu=r,a.selectedItem=n,t.$on("$routeChangeSuccess",function(){l()})}angular.module("Alperina.controllers").controller("MenuController",t),t.$inject=["$rootScope","$location","Header"]}(),angular.module("Alperina.controllers").controller("PhotosController",PhotosController),PhotosController.$inject=["$http","$routeParams"],angular.module("Alperina.controllers").directive("youtube",function(){return{scope:{code:"@"},template:'<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="http://www.youtube.com/embed/{{code}}" frameborder="0" allowfullscreen></iframe>'}}),function(){function t(t,e,o,r,n,l){var a=e.rubric;l.get("/api/video.json?rubric="+a).then(function(t){var e=[];t.data.forEach(function(t){t.content=t.content.split("/").pop(-1),e.push(t)}),this.videos=e}.bind(this)),this.showTags=n.showTags,this.path=o.path()}angular.module("Alperina.controllers").controller("VideosController",t),t.$inject=["$rootScope","$routeParams","$location","$sce","Header","$http"]}();
//# sourceMappingURL=maps/app.js.map

(this.webpackJsonpplantperson=this.webpackJsonpplantperson||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(18),i=n.n(r),c=(n(26),n(3)),l=n(5),o=n(10),h=n(9),u=(n(27),n(0)),d=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"renderRow",value:function(e,t){for(var n=[],a=0;a<e.length;a++)n.push(this.renderSquare(e[a]));return Object(u.jsx)("div",{className:"row",children:n},t)}},{key:"renderSquare",value:function(e){var t,n=this;return Object(u.jsx)("div",{className:"square",onClick:function(){return n.props.onClick(e)},children:null===(t=e.piece)||void 0===t?void 0:t.value},e.index)}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.board.rowSize;t++)e.push(this.renderRow(this.props.board.row(t),t));return Object(u.jsx)("div",{className:"board",children:e})}}]),n}(s.a.Component),j=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"renderSquare",value:function(e,t){return Object(u.jsx)("div",{className:"preview-square",children:e.value},t)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"incoming",children:[Object(u.jsxs)("div",{className:"current",children:["Current: ",this.renderSquare(this.props.piece,0)]}),Object(u.jsxs)("div",{className:"next",children:["Next: ",this.renderSquare(this.props.nextPiece,1)]})]})}}]),n}(s.a.Component),b=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(c.a)(this,e),this.value=t}return Object(l.a)(e,null,[{key:"next",value:function(e){return new this((e<10?[1,1,1,1,1,1,1,1,3,3]:e<25?[1,1,1,3,3,3,3,3,9,9]:e<50?[1,1,3,3,3,9,9,9,27,27]:e<75?[1,3,3,9,9,27,27,81,81,243]:[1,3,9,27,81,243,243,729,729,2187])[Math.floor(10*Math.random())])}}]),e}(),m=function e(t,n,a){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;Object(c.a)(this,e),this.x=n,this.y=a,this.index=t,this.piece=s},p=function(){function e(){Object(c.a)(this,e),this.rowSize=6,this.colSize=6,this.squares=this.initializeGrid()}return Object(l.a)(e,[{key:"initializeGrid",value:function(){for(var e,t=[],n=0,a=0;a<this.rowSize;a++){e=[];for(var s=0;s<this.colSize;s++)e.push(new m(n++,a,s));t.push(e)}return t}},{key:"row",value:function(e){return this.squares[e]}},{key:"square",value:function(e,t){return e<0||t<0||e>=this.rowSize||t>=this.colSize?null:this.squares[e][t]}},{key:"addPiece",value:function(e,t){e.piece=t}},{key:"validMove",value:function(e,t){if(null===e.piece)return!0}},{key:"checkBoardForMatches",value:function(){var e=this,t=!1;this.squares.forEach((function(n){n.forEach((function(n){e.matchingNeighbors(n)&&(t=!0)}))})),t&&this.checkBoardForMatches()}},{key:"makeMatch",value:function(e,t,n){return t.piece.value*=3,e.piece=null,n.piece=null,!0}},{key:"matchingNeighbors",value:function(e){var t=this.square(e.x,e.y-1),n=this.square(e.x+1,e.y),a=this.square(e.x,e.y+1),s=this.square(e.x-1,e.y);if(this.isMatch(s,e)){if(this.isMatch(n,e))return this.makeMatch(s,e,n);if(this.isMatch(t,e))return this.makeMatch(s,e,t);if(this.isMatch(a,e))return this.makeMatch(s,e,a)}if(this.isMatch(t,e)){if(this.isMatch(n,e))return this.makeMatch(t,e,n);if(this.isMatch(a,e))return this.makeMatch(t,e,a)}return!(!this.isMatch(n,e)||!this.isMatch(a,e))&&this.makeMatch(a,e,n)}},{key:"isMatch",value:function(e,t){return!!(e&&e.piece&&t&&t.piece&&e.piece.value===t.piece.value)}}]),e}(),f=function(){function e(){Object(c.a)(this,e),this.turn=1,this.board=new p,this.currentPiece=this.newPiece(),this.nextPiece=this.newPiece()}return Object(l.a)(e,[{key:"nextTurn",value:function(e,t){this.turn+=1,this.board.validMove(e,t)&&(this.board.addPiece(e,t),this.board.checkBoardForMatches(),this.currentPiece=this.nextPiece,this.nextPiece=this.newPiece())}},{key:"newPiece",value:function(){return b.next(this.turn)}}]),e}(),x=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={game:new f},a}return Object(l.a)(n,[{key:"handleClick",value:function(e){var t=this;this.state.game.nextTurn(e,this.state.game.currentPiece),this.setState((function(e){return{game:t.state.game}}))}},{key:"render",value:function(){var e=this;return Object(u.jsx)("main",{className:"App-main garden",children:Object(u.jsxs)("div",{className:"App-main-content",children:[Object(u.jsx)("h1",{children:"Garden"}),Object(u.jsx)(j,{piece:this.state.game.currentPiece,nextPiece:this.state.game.nextPiece}),Object(u.jsx)(d,{board:this.state.game.board,onClick:function(t){return e.handleClick(t)}})]})})}}]),n}(s.a.Component),v=n.p+"static/media/chess.9a8b5416.svg",O=n.p+"static/media/github.dd737df8.svg",g=n.p+"static/media/instagram.ef09c3bb.svg",k=n.p+"static/media/spotify.bb492dd6.svg",y=n.p+"static/media/stackoverflow.a77a042c.svg",w=n.p+"static/media/twitter.16c1f823.svg",N=n.p+"static/media/youtube.1d5e69ef.svg",M=n.p+"static/media/linkedin.1bcf49d0.svg",S=(n.p,n.p+"static/media/letterboxd.43455aaf.svg"),P=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App-main",children:[Object(u.jsxs)("main",{children:[Object(u.jsx)("h1",{children:"Gabriel Talavera"}),Object(u.jsx)("p",{children:"Hello. I am a software engineer. I love to code and when I'm not coding I enjoy writing, painting, movies and taking care of my pets and plants."})]}),Object(u.jsx)("footer",{children:Object(u.jsx)("div",{className:"d-flex justify-content-center align-items-center h-100",children:Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsxs)("a",{className:"mx-2 email no-underline",href:"mailto:gabrielvt6@gmail.com",target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("span",{className:"email-icon",children:"\ud83d\udd75\ud83c\udffb"}),Object(u.jsx)("span",{className:"sr-only",children:"Email"})]}),Object(u.jsxs)("a",{className:"ml-3 mx-2 spotify",href:"https://boxd.it/3kULv",target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("img",{alt:"letterboxd",src:S}),Object(u.jsx)("span",{className:"sr-only",children:"LetterBoxD"})]}),Object(u.jsxs)("a",{className:"mx-2 spotify",href:"https://www.github.com/gabrieltal",target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("img",{alt:"github",src:O}),Object(u.jsx)("span",{className:"sr-only",children:"Github"})]}),Object(u.jsxs)("a",{className:"mx-2 blue-fill-hover",href:"https://www.twitter.com/brownwoolpants",target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("img",{alt:"twitter",src:w}),Object(u.jsx)("span",{className:"sr-only",children:"Twitter"})]}),Object(u.jsxs)("a",{className:"mx-2 instagram",href:"https://www.instagram.com/brownwoolpants",target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("img",{alt:"instagram",src:g}),Object(u.jsx)("span",{className:"sr-only",children:"Instagram"})]}),Object(u.jsxs)("a",{className:"mx-2 linkedin",href:"https://chess.com/member/plant_person",target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("img",{alt:"chess",src:v}),Object(u.jsx)("span",{className:"sr-only",children:"Chess"})]}),Object(u.jsxs)("a",{className:"mx-2 orange-fill-hover",href:"https://stackoverflow.com/users/9911698/gabriel?tab=profile",target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("img",{alt:"stackoverflow",src:y}),Object(u.jsx)("span",{className:"sr-only",children:"StackOverflow"})]}),Object(u.jsxs)("a",{className:"mx-2 red-fill-hover",href:"https://www.youtube.com/channel/UCKRJ1N_6m16aQEqviKk5Hxw",target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("img",{alt:"youtube",src:N}),Object(u.jsx)("span",{className:"sr-only",children:"Youtube"})]}),Object(u.jsxs)("a",{className:"mx-2 spotify",href:"https://open.spotify.com/user/nano_egg?si=70OCbiv_R62yYdAPDpfZyQ",target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("img",{alt:"spotify",src:k}),Object(u.jsx)("span",{className:"sr-only",children:"Spotify"})]}),Object(u.jsxs)("a",{className:"mx-2 linkedin",href:"https://www.linkedin.com/in/gvtalavera/",target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("img",{alt:"linkedin",src:M}),Object(u.jsx)("span",{className:"sr-only",children:"LinkedIn"})]})]})})})]})}}]),n}(s.a.Component),C=n(13),q=n.p+"static/media/logo.0a5f11fc.png",_=n.p+"static/media/plantperson-expanded.12c4e9bc.png",E=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={status:"normal"},a.handleEnter=a.handleEnter.bind(Object(C.a)(a)),a.handleLeave=a.handleLeave.bind(Object(C.a)(a)),a}return Object(l.a)(n,[{key:"handleEnter",value:function(){this.setState((function(e){return{status:"expanded"}}))}},{key:"handleLeave",value:function(){this.setState((function(e){return{status:"normal"}}))}},{key:"classByStatus",value:function(e){return e===this.state.status?"":"d-none"}},{key:"render",value:function(){return Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("nav",{className:"navbar d-flex flex-column align-items-center",children:Object(u.jsxs)("a",{href:"/",id:"logo",onMouseEnter:this.handleEnter,onMouseLeave:this.handleLeave,children:[Object(u.jsx)("span",{className:"default "+this.classByStatus("normal"),children:Object(u.jsx)("img",{src:q,className:"App-logo",alt:"logo",height:"80px",width:"50px"})}),Object(u.jsx)("span",{className:"expanded "+this.classByStatus("expanded"),children:Object(u.jsx)("img",{src:_,height:"80px",width:"50px",alt:"cute little plant person logo"})}),Object(u.jsx)("span",{className:"sr-only",children:"Home"})]})})})}}]),n}(s.a.Component),L=n(19),z=n(2),B=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(L.a,{basename:"/",children:[Object(u.jsx)(E,{}),Object(u.jsx)(z.a,{exact:!0,path:"/",component:P}),Object(u.jsx)(z.a,{path:"/game",component:x})]})}}]),n}(a.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(B,{})}),document.getElementById("root")),I()}},[[34,1,2]]]);
//# sourceMappingURL=main.c1fc34e1.chunk.js.map
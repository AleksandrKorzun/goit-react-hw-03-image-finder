(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__khevJ",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3Qnw9"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3H3Ja",Modal:"Modal_Modal__1x6HA"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3riJT"}},28:function(e,t,a){e.exports={Button:"Button_Button__U40Vg"}},30:function(e,t,a){e.exports={loader:"Loader_loader__3a7z9"}},35:function(e,t,a){},36:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1aiZk",SearchForm:"Searchbar_SearchForm__17xKn",SearchFormButton:"Searchbar_SearchFormButton__1oDhp",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1VVNT",SearchFormInput:"Searchbar_SearchFormInput__sxR92"}},77:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(24),c=a.n(o),l=(a(35),a(15)),i=a(7),s=a(8),u=a(10),g=a(9),h=(a(36),a(4)),d=a.n(h),m=a(0),p=function(e){var t=e.onHandleSubmit;return Object(m.jsx)("header",{className:d.a.Searchbar,children:Object(m.jsxs)("form",{className:d.a.SearchForm,onSubmit:t,children:[Object(m.jsx)("button",{type:"submit",className:d.a.SearchFormButton,onSubmit:t,children:Object(m.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(m.jsx)("label",{children:Object(m.jsx)("input",{className:d.a.SearchFormInput,type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})})]})})},b=a(12),j=a.n(b),f=a(25),O=a(26),y=a.n(O),v=function(){var e=Object(f.a)(j.a.mark((function e(t,a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("23179954-204c91e2d20c9745fc8192c94","&image_type=photo&orientation=horizontal&per_page=12"));case 3:return n=e.sent,console.log(n),e.abrupt("return",n.data.hits);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),_=a(13),x=a.n(_),I=function(e){var t=e.pictures,a=e.onToggleModal;return Object(m.jsx)(m.Fragment,{children:t.map((function(e){return Object(m.jsx)("li",{className:x.a.ImageGalleryItem,onClick:a,children:Object(m.jsx)("img",{src:e.webformatURL,alt:e.tags,id:e.largeImageURL,className:x.a.ImageGalleryItemImage})},e.id)}))})},S=a(27),M=a.n(S),k=a(2),w=a.n(k),T=function(e){var t=e.pictures,a=e.onToggleModal;return Object(m.jsx)("ul",{className:M.a.ImageGallery,children:Object(m.jsx)(I,{pictures:t,onToggleModal:a})})};I.propTypes={pictures:w.a.array};var F=a(28),L=a.n(F),C=function(e){var t=e.getMorePictures;return Object(m.jsx)("button",{id:"loadMore",type:"button",className:L.a.Button,onClick:t,children:"Load more"})},N=a(14),B=a.n(N),G=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.onHandleEscapeClick=function(t){return"Escape"===t.code&&e.props.onToggleModal()},e.onOverlayClick=function(t){return t.target===t.currentTarget&&e.props.onToggleModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onHandleEscapeClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onHandleEscapeClick)}},{key:"render",value:function(){return Object(m.jsx)("div",{className:B.a.Overlay,onClick:this.onOverlayClick,children:Object(m.jsx)("div",{className:B.a.Modal,children:Object(m.jsx)("img",{src:this.props.largeImageURL,alt:""})})})}}]),a}(n.Component),H=G,U=a(29),R=a.n(U),E=a(30),P=a.n(E),D=function(){return Object(m.jsx)(R.a,{className:P.a.loader,type:"Rings",color:"#5757c2",height:100,width:100})},J=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={picture:[],page:0,search:"",isOpenModal:!1,largeImageURL:"",loader:!1},e.onHandleSubmit=function(t){t.preventDefault();var a=t.target.elements[1].value;e.setState({page:1,search:a,picture:[]})},e.onHandleMorePicture=function(t){e.setState((function(e){return{page:e.page+=1}}))},e.onToggleModal=function(t){e.setState((function(e){return{isOpenModal:!e.isOpenModal}}))},e.onModalImageUrl=function(t){e.setState({largeImageURL:t.target.id}),e.onToggleModal()},e.onToggleLoader=function(){e.setState((function(e){return{loader:!e.loader}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;t.page===this.state.page&&t.search===this.state.search||(this.onToggleLoader(),v(this.state.search,this.state.page).then((function(e){return a.setState((function(t){return{picture:[].concat(Object(l.a)(t.picture),Object(l.a)(e))}}))})).finally(this.onToggleLoader())),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{onHandleSubmit:this.onHandleSubmit}),this.state.loader&&Object(m.jsx)(D,{}),Object(m.jsx)(T,{pictures:this.state.picture,onToggleModal:this.onModalImageUrl}),0!==this.state.picture.length&&Object(m.jsx)(C,{getMorePictures:this.onHandleMorePicture}),this.state.isOpenModal&&Object(m.jsx)(H,{largeImageURL:this.state.largeImageURL,onToggleModal:this.onToggleModal})]})}}]),a}(n.Component),A=J,V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root")),V()}},[[77,1,2]]]);
//# sourceMappingURL=main.aa55525b.chunk.js.map
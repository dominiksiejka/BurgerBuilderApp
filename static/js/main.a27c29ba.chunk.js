(this.webpackJsonpburgerbuilderapp=this.webpackJsonpburgerbuilderapp||[]).push([[0],{20:function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1-mDB",Label:"BuildControl_Label__J5gzB",Less:"BuildControl_Less__1kqoK",More:"BuildControl_More__3lJ3V"}},23:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2Fdws",ActiveLink:"NavigationItem_ActiveLink__N8l9r",active:"NavigationItem_active__uqO8X"}},26:function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__2XZUm",OrderButton:"BuildControls_OrderButton__2KXaK"}},27:function(e,t,n){e.exports={ContinueBtn:"OrderButton_ContinueBtn__1_6K3",CancelBtn:"OrderButton_CancelBtn__4fLHc"}},38:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__nr6AB"}},39:function(e,t,n){e.exports={Logo:"Logo_Logo__HjuuY"}},41:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3R50q",Active:"NavigationItems_Active__15p4R"}},42:function(e,t,n){e.exports={Burger:"Burger_Burger__O5V6e"}},43:function(e,t,n){e.exports={Modal:"Modal_Modal__3GXML"}},44:function(e,t,n){e.exports={BackDrop:"BackDrop_BackDrop__GR899"}},45:function(e,t,n){e.exports={OrderSummary:"OrderSummary_OrderSummary__38xD8"}},46:function(e,t,n){e.exports={loader:"Loader_loader__2Z8zu",load3:"Loader_load3__3qTqo"}},48:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3SZOv"}},49:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__1Cfa8"}},51:function(e,t,n){e.exports={Finalized:"Finalized_Finalized__2MXSW"}},58:function(e,t,n){},8:function(e,t,n){e.exports={BreadBottom:"Ingredients_BreadBottom__28t_M",BreadTop:"Ingredients_BreadTop__177OF",Seeds1:"Ingredients_Seeds1__2dPgI",Seeds2:"Ingredients_Seeds2__1NBeM",Meat:"Ingredients_Meat__3f4_W",Cheese:"Ingredients_Cheese__uhraZ",Salad:"Ingredients_Salad__KRPEM",Bacon:"Ingredients_Bacon__ZSrKd"}},83:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(37),s=n.n(c),i=(n(58),n(9)),o=n(10),l=n(12),d=n(11),u=n(15),h=n(2),j=n(52),b=function(e){return e.children},p=n(38),m=n.n(p),O=n.p+"static/media/burger-logo.ec69c7f6.png",x=n(39),f=n.n(x),v=n(0),g=function(){return Object(v.jsx)("div",{className:f.a.Logo,children:Object(v.jsx)("img",{src:O,alt:"burger logo"})})},_=n(23),C=n.n(_),y=function(e){return Object(v.jsx)("li",{className:C.a.NavigationItem,children:Object(v.jsx)(u.b,{onClick:e.handleClickItem,to:e.url,exact:!0,activeClassName:C.a.active,children:e.children})})},P=n(41),k=n.n(P),N=function(e){return Object(v.jsxs)("ul",{className:k.a.NavigationItems,children:[Object(v.jsx)(y,{url:"/",handleClickItem:null,children:"Burger"}),Object(v.jsx)(y,{url:"/checkout",handleClickItem:function(){return alert("In order to continue you need to press 'Order Now' button ")},children:"Checkout"})]})},B=function(e){var t=e.scroll;return Object(v.jsxs)("header",{className:m.a.Toolbar,children:[Object(v.jsx)(g,{scroll:t}),Object(v.jsx)("nav",{children:Object(v.jsx)(N,{scroll:t})})]})},S=function(e){var t=Object(a.useState)(0),n=Object(j.a)(t,2),r=n[0],c=n[1],s=function(e){c(e.currentTarget.scrollY)};return Object(a.useEffect)((function(){window.addEventListener("scroll",s)}),[r]),Object(v.jsxs)(b,{children:[Object(v.jsx)(B,{scroll:r}),Object(v.jsx)("main",{children:e.children})]})},I=n(19),M=n(14),L=n(53),w=n(42),A=n.n(w),T=n(8),R=n.n(T),F=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(v.jsx)("div",{className:R.a.BreadBottom});break;case"bread-top":t=Object(v.jsxs)("div",{className:R.a.BreadTop,children:[Object(v.jsx)("div",{className:R.a.Seeds1}),Object(v.jsx)("div",{className:R.a.Seeds2})]});break;case"meat":t=Object(v.jsx)("div",{className:R.a.Meat});break;case"cheese":t=Object(v.jsx)("div",{className:R.a.Cheese});break;case"salad":t=Object(v.jsx)("div",{className:R.a.Salad});break;case"bacon":t=Object(v.jsx)("div",{className:R.a.Bacon});break;default:t=null}return t},D=function(e){var t=Object.keys(e.ingrediants).map((function(t){return Object(L.a)(Array(e.ingrediants[t])).map((function(e,n){return Object(v.jsx)(F,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(v.jsx)("p",{children:"Please start adding ingrediants !"})),Object(v.jsxs)("div",{className:A.a.Burger,children:[Object(v.jsx)(F,{type:"bread-top"}),t,Object(v.jsx)(F,{type:"bread-bottom"})]})},E=n(26),z=n.n(E),U=n(20),K=n.n(U),Y=function(e){return Object(v.jsxs)("div",{className:K.a.BuildControl,children:[Object(v.jsx)("div",{className:K.a.Label,children:e.label}),Object(v.jsx)("button",{className:K.a.Less,onClick:e.remove,disabled:e.disabled,children:"Less"}),Object(v.jsx)("button",{onClick:e.add,className:K.a.More,disabled:e.control,children:"More"})]})},q=[{label:"Salad",type:"salad"},{label:"Cheese",type:"cheese"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"}],X=function(e){var t=q.map((function(t){var n=t.label,a=t.type;return Object(v.jsx)(Y,{label:n,type:a,add:function(){return e.add(a)},remove:function(){e.remove(a)},disabled:e.disabled[a],control:e.control},n)})),n=e.control?Object(v.jsx)("p",{children:"You can only select up to 6 ingrediants !"}):"";return Object(v.jsxs)(a.Fragment,{children:[Object(v.jsx)("div",{className:z.a.BuildControls,children:Object(v.jsxs)("div",{children:[n,t]})}),Object(v.jsx)("button",{className:z.a.OrderButton,onClick:e.orderSubmit,disabled:e.allowPurchase,children:"Order Now"})]})},Z=n(43),H=n.n(Z),J=n(44),W=n.n(J),V=function(e){return e.show?Object(v.jsx)("div",{className:W.a.BackDrop,onClick:e.cancelPurchase}):null},G=function(e){return Object(v.jsxs)(a.Fragment,{children:[Object(v.jsx)(V,{show:e.showModal,cancelPurchase:e.exitPurchase}),Object(v.jsx)("div",{className:H.a.Modal,style:{transform:e.showModal?"translate(-50%, 20%)":null},children:e.children})]})},$=n(45),Q=n.n($),ee=n(27),te=n.n(ee),ne=function(e){var t=e.handleContinuePurchase,n=e.handleCancelPurchase;return Object(v.jsxs)(a.Fragment,{children:[Object(v.jsx)("button",{onClick:t,className:te.a.ContinueBtn,children:"CONTINUE"}),Object(v.jsx)("button",{onClick:n,className:te.a.CancelBtn,children:"CANCEL"})]})},ae=function(e){var t=e.ingrediants,n=e.finalPrice,a=e.handleContinuePurchase,r=e.handleCancelPurchase,c=Object.keys(t).map((function(e){return Object(v.jsxs)("li",{children:[e.charAt(0).toUpperCase()+e.slice(1),": ",t[e]]},e)}));return Object(v.jsxs)("div",{className:Q.a.OrderSummary,children:[Object(v.jsx)("h3",{children:"Your order:"}),Object(v.jsx)("p",{children:"A delicious burger with the following ingrediants:"}),Object(v.jsx)("ul",{children:c}),Object(v.jsxs)("p",{children:["Total price: ",Object(v.jsxs)("strong",{children:["$",n.toFixed(2)," "]})]}),Object(v.jsx)("p",{children:"Continue to checkout ?"}),Object(v.jsx)(ne,{handleContinuePurchase:a,handleCancelPurchase:r})]})},re=n(46),ce=n.n(re),se=function(){return Object(v.jsx)("div",{className:ce.a.loader,children:"Loading..."})},ie={salad:.8,cheese:.9,bacon:1.1,meat:1.5},oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ingrediants:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,serverAccepted:!1},e.handleIsPurchasable=function(t){var n=!1;n=Object.keys(t).map((function(e){return t[e]})).reduce((function(e,t){return e+t}))>=2,e.setState({purchasable:n})},e.handleRemoveIngrediant=function(t){var n=e.state,a=n.ingrediants,r=n.totalPrice;if(0===a[t])return alert("Can't remove igredients that was not added before !");var c=a[t]+-1,s=Object(M.a)(Object(M.a)({},a),{},Object(I.a)({},t,c)),i=r-ie[t];e.setState({ingrediants:s,totalPrice:i}),e.handleIsPurchasable(s)},e.handleAddIngrediant=function(t){var n=e.state,a=n.ingrediants,r=n.totalPrice,c=a[t]+1,s=Object(M.a)(Object(M.a)({},a),{},Object(I.a)({},t,c)),i=r+ie[t];e.setState({ingrediants:s,totalPrice:i}),e.handleIsPurchasable(s)},e.handleOrderSubmit=function(){e.setState({orderClicked:!0})},e.handleExitPurchaseModal=function(){e.setState({orderClicked:!1})},e.handleContinuePurchase=function(){var t=[];for(var n in e.state.ingrediants)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e.state.ingrediants[n]));t.push("price="+e.state.totalPrice);var a=t.join("&");e.props.history.push({pathname:"/checkout",search:"?"+a})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.ingrediants,n=e.purchasable,r=e.totalPrice,c=e.orderClicked,s=Object(M.a)({},t);for(var i in s)s[i]=s[i]<=0;for(var o=Object(M.a)({},t),l=0,d=!1,u=0,h=Object.keys(o);u<h.length;u++){l+=o[h[u]]}l>=6&&(d=!0);var j=Object(v.jsx)(ae,{ingrediants:t,finalPrice:r,handleCancelPurchase:this.handleExitPurchaseModal,handleContinuePurchase:this.handleContinuePurchase});return this.state.serverAccepted&&(j=Object(v.jsx)(se,{})),Object(v.jsxs)(a.Fragment,{children:[Object(v.jsx)(G,{showModal:c,exitPurchase:this.handleExitPurchaseModal,children:j}),Object(v.jsx)(D,{ingrediants:this.state.ingrediants}),Object(v.jsxs)("h4",{style:{textAlign:"center",margin:0,padding:"6px"},children:["Current Price: $",this.state.totalPrice.toFixed(2)]}),Object(v.jsx)(X,{add:this.handleAddIngrediant,remove:this.handleRemoveIngrediant,disabled:s,control:d,allowPurchase:!n,orderSubmit:this.handleOrderSubmit})]})}}]),n}(a.Component),le=n(47),de=n(48),ue=n.n(de),he=function(e){return Object(v.jsxs)("div",{className:ue.a.CheckoutSummary,children:[Object(v.jsx)("h3",{children:"We Hope it will taste great, enjoy !"}),Object(v.jsx)(D,{ingrediants:e.ingrediants}),Object(v.jsx)(ne,{handleContinuePurchase:e.handlePurchaseContinued,handleCancelPurchase:e.handlePurchaseCanceled})]})},je=n(49),be=n.n(je),pe=n(50),me=n.n(pe).a.create({baseURL:"https://burger-app-9ee8c-default-rtdb.firebaseio.com"}),Oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",adress:"",phone:"",serverAccepted:!1},e.contactPageRef=r.a.createRef(),e.handleChangeNumberInput=function(t){e.setState({phone:t.target.value.slice(0,10)})},e.handleChangeNameInput=function(t){t.target.value?e.setState({name:t.target.value.charAt(0).toUpperCase()+t.target.value.substring(1)}):e.setState({name:""})},e.handleSubmitForm=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.email,c=n.adress,s=n.phone;if(a&&r&&c&&s){e.setState({serverAccepted:!0});var i={ingrediants:e.props.ings,price:Number(e.props.price),customer:{name:a,email:r,adress:c,phone:s},deliveryMethod:"fastest"};me.post("/orders.json",i).then((function(t){e.setState({serverAccepted:!1})})).catch((function(t){e.setState({serverAccepted:!1})})),e.setState({name:"",email:"",adress:"",phone:""})}else alert("To make an order please fill in all necessary fields")},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.contactPageRef.current.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.email,r=t.adress,c=t.phone;if(this.state.serverAccepted)return setTimeout((function(){e.props.history.replace(e.props.match.path+"/finalized")}),500),Object(v.jsx)(se,{});return Object(v.jsxs)("div",{className:be.a.ContactData,ref:this.contactPageRef,children:[Object(v.jsx)("h2",{children:"Your contact data:"}),Object(v.jsxs)("form",{onSubmit:this.handleSubmitForm,children:[Object(v.jsxs)("label",{children:[Object(v.jsx)("p",{children:"Name:"}),Object(v.jsx)("input",{type:"text",value:n,onChange:this.handleChangeNameInput,placeholder:"enter your name...",autoComplete:"no",maxLength:20})]}),Object(v.jsxs)("label",{children:[Object(v.jsx)("p",{children:"Email:"}),Object(v.jsx)("input",{type:"text",value:a,onChange:function(t){return e.setState({email:t.target.value})},placeholder:"enter your email...",autoComplete:"no",maxLength:20})]}),Object(v.jsxs)("label",{children:[Object(v.jsx)("p",{children:"Adress:"}),Object(v.jsx)("input",{type:"text",value:r,onChange:function(t){return e.setState({adress:t.target.value})},placeholder:"enter your adress...",autoComplete:"no",maxLength:20})]}),Object(v.jsxs)("label",{children:[Object(v.jsx)("p",{children:"Phone number:"}),Object(v.jsx)("input",{type:"number",value:c,onChange:this.handleChangeNumberInput,placeholder:"enter your phone number",autoComplete:"no",maxLength:"10"})]}),Object(v.jsx)("button",{type:"submit",children:"Send"})]})]})}}]),n}(a.Component),xe=Object(h.f)(Oe),fe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ingrediants:{},totalPrice:0},e.handlePurchaseContinued=function(){e.props.history.replace("/checkout/contact-data")},e.handlePurchaseCanceled=function(){e.props.history.goBack()},e}return Object(o.a)(n,[{key:"componentWillUnmount",value:function(){}},{key:"componentDidMount",value:function(){var e,t=new URLSearchParams(this.props.location.search),n={},a=0,r=Object(le.a)(t.entries());try{for(r.s();!(e=r.n()).done;){var c=e.value;"price"===c[0]?a=c[1]:n[c[0]]=+c[1]}}catch(s){r.e(s)}finally{r.f()}this.setState({ingrediants:n,totalPrice:a})}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{style:{textAlign:"center"},children:"Checkout Page"}),Object(v.jsx)(he,{ingrediants:this.state.ingrediants,handlePurchaseContinued:this.handlePurchaseContinued,handlePurchaseCanceled:this.handlePurchaseCanceled}),Object(v.jsx)(h.a,{path:this.props.match.path+"/contact-data",render:function(){return Object(v.jsx)(xe,{ings:e.state.ingrediants,price:e.state.totalPrice})}})]})}}]),n}(a.Component),ve=n(51),ge=n.n(ve),_e=function(e){var t=0,n=Object(a.useRef)();return Object(a.useEffect)((function(){var a;return setTimeout((function(){a=setInterval((function(){!function(a){var r="Thank You, your order was successfuly finalized !";t<r.length?(n.current.innerHTML+=" "===r[t]?"&nbsp":"<span> ".concat(r[t]," </span>"),t++):(clearInterval(a),setTimeout((function(){e.history.replace("/")}),3e3))}(a)}),50)}),700),function(){return clearInterval(a)}}),[]),Object(v.jsx)("div",{className:ge.a.Finalized,children:Object(v.jsx)("h2",{ref:n,children:null})})},Ce=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(v.jsx)(u.a,{children:Object(v.jsx)("div",{children:Object(v.jsx)(S,{children:Object(v.jsxs)(h.c,{children:[Object(v.jsx)(h.a,{path:"/",exact:!0,component:oe}),Object(v.jsx)(h.a,{path:"/checkout/contact-data/finalized",component:_e}),Object(v.jsx)(h.a,{path:"/checkout",component:fe})]})})})})}}]),n}(a.Component);s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(Ce,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.a27c29ba.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(8),i=t.n(s),o=t(6),l=t(1),c=t(2),u=t(4),m=t(3),d=t(5),h=t(9),p=(t(15),function(e){var a=e.todoList;return r.a.createElement("div",{className:"position_List"},r.a.createElement("div",{className:"taskList"},r.a.createElement("ul",{className:"ul"},a.map(function(e){return r.a.createElement("li",null,r.a.createElement("span",{className:"span"}," Task:"),e.title,r.a.createElement("p",null," ",r.a.createElement("span",{className:"span"},"Person:"),e.user.name),r.a.createElement("hr",null))}))))}),b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],g=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],y=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={saveValue:"",selectedUser:0,taskError:!1,userError:!1},t.handleOnSubmit=function(e){e.preventDefault();var a=t.state,n=a.saveValue,r=a.selectedUser;n&&r?(t.props.add(n,r),t.setState({saveValue:"",selectedUser:0})):t.setState({taskError:!n,userError:!r})},t.handleChangeValue=function(e){t.setState({saveValue:e.target.value,taskError:!1})},t.handleChangeSelect=function(e){t.setState({selectedUser:e.target.value,userError:!1})},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.saveValue,t=e.selectedUser,n=e.taskError,s=e.userError;return r.a.createElement("form",{onSubmit:this.handleOnSubmit},r.a.createElement("p",{className:"ToDo"},"Task:"),r.a.createElement("input",{className:"input",type:"text",value:a,onChange:this.handleChangeValue}),n&&r.a.createElement("p",{className:"error"},"Plese select your task"),r.a.createElement("p",{className:"ToDo"},"Person:"),r.a.createElement("select",{className:"select",value:t,onChange:this.handleChangeSelect},r.a.createElement("option",{value:"0"},"Choose a person"),b.map(function(e){return r.a.createElement("option",null,e.name)})),r.a.createElement("button",{type:"submit",className:"button"},"ADD"),s&&r.a.createElement("p",{className:"error"},"Plese select your name"))}}]),a}(r.a.Component),f=g.map(function(e){return Object(h.a)({},e,{user:b.find(function(a){return a.id===e.userId})})}),v=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={todoList:Object(o.a)(f)},t.add=function(e,a){t.setState(function(t){return{todoList:[].concat(Object(o.a)(t.todoList),[{title:e,user:{name:a}}])}})},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state.todoList;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"h1"},"List of Todos"),r.a.createElement(y,{add:this.add}),r.a.createElement(p,{todoList:e}))}}]),a}(r.a.Component);i.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.27d28889.chunk.js.map
(function(){"use strict";var e={8600:function(e,t,s){var i=s(175),a=s.n(i),n=s(353),r=s.n(n),u=s(2802),o=s.n(u),l=s(167),c=s.n(l),d=s(9507),m=s.n(d),p=s(1227),g=s.n(p),v=s(685),f=s.n(v),h=s(7705),b=s.n(h),_=s(2063),C=s.n(_),y=s(1443),q=s.n(y),L=s(2025),A=s.n(L),N=s(2525),T=s.n(N),I=s(1604),w=s.n(I),S=s(8228),k=s.n(S),x=s(6782),E=s.n(x),O=s(874),j=s.n(O),P=s(6848),M=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header"),t("router-view"),t("Footer")],1)},D=[],$=function(){var e=this,t=e._self._c;return t("header",[t("Logo"),t("NavBar")],1)},U=[],H=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"nav-bar"}},[t("div",{staticClass:"nav-link"},[t("i",{staticClass:"el-icon-s-home"}),t("router-link",{attrs:{to:"/"}},[e._v("首页")])],1),e.isLoggedIn?e._e():t("div",{staticClass:"nav-link"},[t("i",{staticClass:"el-icon-position"}),t("router-link",{attrs:{to:"/login"}},[e._v("登录/注册")])],1),e.isLoggedIn?t("el-dropdown",{staticClass:"nav-link",on:{command:e.handleCommand}},[t("span",{staticClass:"el-dropdown-link"},[t("i",{staticClass:"el-icon-user"}),t("router-link",{attrs:{to:""}},[e._v("个人中心")])],1),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{command:"0"}},[e._v("个人中心")]),t("el-dropdown-item",{attrs:{command:"1"}},[e._v("我的课程")]),t("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[e._v("退出登录")])],1)],1):e._e()],1)},V=[],F=(s(4114),s(3518)),R={name:"NavBar",methods:{...(0,F.i0)(["logout"]),...(0,F.PY)(["setLoggedIn"]),async handleCommand(e){"0"===e||"1"===e?(this.$router.push(`/user?tab=${e}`),await this.$nextTick(),document.getElementById(`tab-${this.$route.query.tab}`).click()):"logout"===e&&await this.logout()}},computed:{...(0,F.aH)(["isLoggedIn"])}},B=R,J=s(1656),z=(0,J.A)(B,H,V,!1,null,"5c4e48f7",null),Y=z.exports,Q=function(){var e=this;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"logo"}},[t("div",{staticClass:"upper-part"},[e._v("EZ")]),t("div",{staticClass:"lower-part"},[e._v("在线学习平台")])])}],G={name:"Logo"},X=G,W=(0,J.A)(X,Q,Z,!1,null,"7e4f32d0",null),K=W.exports,ee={name:"Header",components:{NavBar:Y,Logo:K}},te=ee,se=(0,J.A)(te,$,U,!1,null,"52d40fac",null),ie=se.exports,ae=function(){var e=this,t=e._self._c;return t("Main")},ne=[],re=function(){var e=this,t=e._self._c;return t("main",[t("Carousel"),t("CourseDisplay")],1)},ue=[],oe=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"carousel"}},[t("el-carousel",{attrs:{trigger:"click",height:"300px",type:"card"}},e._l(4,(function(s){return t("el-carousel-item",{key:s},[t("h1",[e._v(e._s(e.techPromotions[s-1].name))]),t("h3",[e._v(e._s(e.techPromotions[s-1].sloganCN))]),t("h3",[e._v(e._s(e.techPromotions[s-1].slogan))])])})),1)],1)},le=[],ce={data(){return{techPromotions:[{name:"人工智能 (Artificial Intelligence)",slogan:"Unlock the future with AI: Revolutionize your business with intelligent automation.",sloganCN:"解锁未来的钥匙：用智能自动化革新您的业务。"},{name:"区块链 (Blockchain)",slogan:"Secure and transparent transactions: Embrace the power of blockchain technology.",sloganCN:"安全透明的交易：拥抱区块链技术的力量。"},{name:"云计算 (Cloud Computing)",slogan:"Scale effortlessly and innovate faster: Harness the limitless potential of cloud computing.",sloganCN:"轻松扩展，快速创新：利用云计算的无限潜力。"},{name:"物联网 (Internet of Things)",slogan:"Connect the world around you: Transform your operations with IoT solutions.",sloganCN:"连接你周围的世界：用物联网解决方案改变您的运营。"}]}}},de=ce,me=(0,J.A)(de,oe,le,!1,null,"24b7731d",null),pe=me.exports,ge=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"course-display"}},[e.categories?t("MultiLevelMenu",{attrs:{categories:e.categories},on:{"select-sub-category":e.filterCourses}}):e._e(),t("div",{staticClass:"course-container"},e._l(e.filteredCourses,(function(e,s){return t("CourseCard",{key:s,attrs:{courseName:e}})})),1)],1)},ve=[],fe=s(9399);const he=(0,fe.UU)("https://pudhihnbhrzzwrxozojf.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1ZGhpaG5iaHJ6endyeG96b2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4OTg0NDAsImV4cCI6MjAzNDQ3NDQ0MH0.dLWwrO5ROLXY-k1REpORxHcMoDrnIYhoPDHqM_b78sU");var be=function(){var e=this,t=e._self._c;return t("div",{staticClass:"course-card"},[t("div",{staticClass:"cover",style:e.boxStyle},[t("div",{staticClass:"course-name"},[e._v(e._s(e.courseName))])]),t("div",{staticClass:"title"},[t("span",[e._v(e._s(e.courseName))]),e.isLoggedIn&!e.isAdded?t("el-button",{attrs:{icon:"el-icon-plus",size:"small",circle:"",title:"添加到“我的课程”"},on:{click:e.addToList}}):e._e(),e.isLoggedIn&e.isAdded?t("el-button",{attrs:{icon:"el-icon-right",size:"small",circle:"",title:"进入学习"},on:{click:e.goToLearn}}):e._e()],1)])},_e=[],Ce={name:"CourseCard",data(){return{}},props:{courseName:{type:String,required:!0}},methods:{...(0,F.i0)(["updateRemoteList"]),getRandomColor(){const e="0123456789ABCDEF";let t="#";for(let s=0;s<6;s++)t+=e[Math.floor(16*Math.random())];return t},async addToList(){try{this.updateRemoteList([this.$props.courseName]),alert("添加成功！")}catch(e){alert(e)}},goToLearn(){this.$router.push(`/study?className=${this.$props.courseName}`)}},computed:{...(0,F.aH)(["isLoggedIn","localClassList"]),boxStyle(){return{backgroundColor:this.getRandomColor()}},isAdded:{get:function(){return this.localClassList.includes(this.$props.courseName)}}},created(){}},ye=Ce,qe=(0,J.A)(ye,be,_e,!1,null,"62b5897b",null),Le=qe.exports,Ae=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"multi-level-menu"}},[t("div",[e._v("全部分类：")]),e._l(e.categories,(function(s,i){return t("div",{key:i},[t("div",{staticClass:"large-category",on:{click:function(t){return e.toggleSubCategory(i)}}},[e._v(" "+e._s(s.LargeCategory)+" ")]),t("transition",{attrs:{name:"fade"}},[e.activeCategory===i?t("div",{staticClass:"sub-categories"},e._l(s.SubCategories,(function(s,i){return t("div",{key:i,staticClass:"sub-category",on:{click:function(t){return e.selectSubCategory(s)}}},[e._v(" "+e._s(s.SubCategoryName)+" ")])})),0):e._e()])],1)}))],2)},Ne=[],Te={props:{categories:{type:Array,required:!0}},data(){return{activeCategory:null,selectedCategory:null}},methods:{toggleSubCategory(e){this.activeCategory===e?this.activeCategory=null:this.activeCategory=e},selectSubCategory(e){this.$emit("select-sub-category",e)}}},Ie=Te,we=(0,J.A)(Ie,Ae,Ne,!1,null,"f392c94a",null),Se=we.exports,ke={data(){return{categories:null,filteredCourses:[]}},methods:{async getClasses(){let{data:e}=await he.from("Classes").select();return this.classes=e[0].class["CS-classes"],this.classes},async getAllCourses(){let e=[];return this.categories.forEach((t=>{t.SubCategories.forEach((t=>{e=e.concat(Object.keys(t.ClassName))}))})),e},filterCourses(e){this.filteredCourses=Object.keys(e.ClassName),console.log(this.filteredCourses)},...(0,F.i0)(["fetchClassList"])},components:{CourseCard:Le,MultiLevelMenu:Se},async mounted(){this.categories=await this.getClasses(),this.filteredCourses=await this.getAllCourses()},created(){this.fetchClassList()}},xe=ke,Ee=(0,J.A)(xe,ge,ve,!1,null,"005922cc",null),Oe=Ee.exports,je={name:"Main",components:{Carousel:pe,CourseDisplay:Oe},methods:{}},Pe=je,Me=(0,J.A)(Pe,re,ue,!1,null,"1a9bfa26",null),De=Me.exports,$e={components:{Main:De}},Ue=$e,He=(0,J.A)(Ue,ae,ne,!1,null,"0f168109",null),Ve=He.exports,Fe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login"},[t("el-tabs",{attrs:{type:"border-card"}},[t("el-tab-pane",{attrs:{label:"登录/注册"}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"邮箱"}},[t("el-input",{attrs:{placeholder:"请输入邮箱地址"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",{attrs:{label:"用户名"}},[t("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",round:""},on:{click:e.login}},[e._v("登录")]),t("el-button",{attrs:{round:""},on:{click:e.signUp}},[e._v("注册")]),t("el-tag",[e._v("新用户注册后会自动登录")])],1)],1)],1)],1)],1)},Re=[],Be={data(){return{form:{email:"",password:"",userName:""}}},methods:{...(0,F.i0)(["logout"]),...(0,F.PY)(["setLoggedIn"]),async signUp(){try{const{data:e,error:t}=await he.auth.signUp({email:this.form.email,password:this.form.password,options:{data:{userName:this.form.userName,classList:"[]",totalLearningTime:0,classLearningData:"[]"}}});t?alert("注册失败："+t.message):(console.log("注册成功：",e),this.login())}catch(e){alert("注册失败："+e.message)}},async login(){try{const{data:e,error:t}=await he.auth.signInWithPassword({email:this.form.email,password:this.form.password});t?alert("登录失败："+t.message):(console.log("登录成功：",e),this.setLoggedIn(!0),this.$router.push("/"))}catch(e){alert("登录失败："+e.message)}}}},Je=Be,ze=(0,J.A)(Je,Fe,Re,!1,null,"4fab63ce",null),Ye=ze.exports,Qe=function(){var e=this;e._self._c;return e._m(0)},Ze=[function(){var e=this,t=e._self._c;return t("footer",{staticClass:"footer"},[t("div",{staticClass:"container"},[t("div",{staticClass:"footer-content"},[t("div",{staticClass:"footer-section about"},[t("h2",[e._v("关于我们")]),t("p",[e._v("我们希望创建令人惊叹的Web应用程序.")])]),t("div",{staticClass:"footer-section social"},[t("h2",[e._v("关注我们")]),t("div",{staticClass:"social-icons"},[t("a",{attrs:{href:"#"}},[e._v("facebook")]),t("a",{attrs:{href:"#"}},[e._v("twitter")]),t("a",{attrs:{href:"#"}},[e._v("instagram")]),t("a",{attrs:{href:"#"}},[e._v("sina")])])])]),t("div",{staticClass:"footer-bottom"},[e._v(" © 2024 EZ Class | All Rights Reserved ")])])])}],Ge={},Xe=(0,J.A)(Ge,Qe,Ze,!1,null,"6a15ce50",null),We=Xe.exports,Ke=function(){var e=this,t=e._self._c;return t("div",{staticClass:"user-center"},[t("div",{staticClass:"card"},[t("el-card",[t("div",{staticClass:"left"},[t("el-avatar",[e._v(e._s(e.userName[0]))])],1),t("div",{staticClass:"right"},[t("el-tag",[e._v(" "+e._s(e.userName))]),t("el-tag",{attrs:{size:"mini",type:"success"}},[e._v(" 上次登录于："+e._s(e.lastSignInAt)+" ")])],1)])],1),t("div",{staticClass:"info-area"},[t("el-tabs",{attrs:{"tab-position":e.tabPosition,type:"border-card"}},[t("el-tab-pane",{attrs:{label:"个人信息"}},[t("div",{staticClass:"info"},[t("ul",[t("li",[e._v("注册时间："),t("span",[e._v(e._s(e.createdAt))])]),t("li",[e._v("邮箱地址："),t("span",[e._v(e._s(e.email))])]),t("li",[e._v("拥有课程数量："),t("span",[e._v(e._s(e.classNum))])])])]),t("el-button",{attrs:{type:"primary"},on:{click:e.handleLogout}},[e._v("退出登录")])],1),t("el-tab-pane",{attrs:{label:"我的课程"}},e._l(e.localClassList,(function(e,s){return t("CourseCard",{key:s,attrs:{courseName:e}})})),1)],1)],1)])},et=[],tt={data(){return{userName:"",tabPosition:"left",createdAt:"",lastSignInAt:"",email:"",classList:"[]",classNum:""}},methods:{...(0,F.i0)(["logout","fetchClassList"]),async handleLogout(){await this.logout()}},components:{CourseCard:Le},computed:{...(0,F.aH)(["localClassList"])},async mounted(){const{data:{user:e}}=await he.auth.getUser(),{user_metadata:{userName:t},created_at:s,last_sign_in_at:i,email:a}=e;this.userName=t,this.createdAt=new Date(s).toLocaleString(),this.lastSignInAt=new Date(i).toLocaleString(),this.email=a,this.classNum=this.localClassList.length},created(){this.fetchClassList()}},st=tt,it=(0,J.A)(st,Ke,et,!1,null,"3c005c8d",null),at=it.exports,nt={components:{Header:ie,Footer:We,Home:Ve,Login:Ye,UserCenter:at},created(){}},rt=nt,ut=(0,J.A)(rt,M,D,!1,null,null,null),ot=ut.exports,lt=s(6178);P["default"].use(F.Ay);const ct=new F.Ay.Store({state:{isLoggedIn:"true"===localStorage.getItem("isLoggedIn"),localClassList:[],activatedTitle:""},getters:{},mutations:{setLoggedIn(e,t){e.isLoggedIn=t,localStorage.setItem("isLoggedIn",t)},updateLocalList(e,t){e.localClassList=e.localClassList.concat(t)},setLocalList(e,t){e.localClassList=t},setActivatedTitle(e,t){e.activatedTitle=t}},actions:{async logout({commit:e,state:t}){try{e("setLoggedIn",!1),t.localClassList=[],os.push("/login");const{error:s}=await he.auth.signOut();s&&alert("注销失败： ",s.message)}catch(s){alert("注销失败："),console.log(s)}},async updateRemoteList({state:e,commit:t},s){t("updateLocalList",s);const{error:i}=await he.auth.updateUser({data:{classList:JSON.stringify(e.localClassList)}});i&&alert(i.message)},async fetchClassList({commit:e,state:t}){try{if(t.isLoggedIn){const{data:{user:{user_metadata:{classList:t}}}}=await he.auth.getUser();e("setLocalList",JSON.parse(t))}}catch(s){console.error("Failed to fetch localClassList:",s)}}},modules:{}});var dt=ct,mt=function(){var e=this,t=e._self._c;return t("div",{staticClass:"study-detail"},[t("Aside"),t("Article")],1)},pt=[],gt=function(){var e=this,t=e._self._c;return t("aside",{staticClass:"aside"},[t("div",{staticClass:"aside-title"},[e._v(e._s(e.title))]),t("AsideNav")],1)},vt=[],ft=function(){var e=this,t=e._self._c;return t("div",{staticClass:"aside-nav"},e._l(e.navItems,(function(e){return t("NavItem",{key:e.id,attrs:{item:e}})})),1)},ht=[],bt=function(){var e=this,t=e._self._c;return t("div",{staticClass:"nav-item"},[t("div",{staticClass:"item-title",on:{click:e.toggle}},[e._v(" "+e._s(e.item.title)+" "),t("i",{staticClass:"el-icon-arrow-down",class:{activated:e.expanded}})]),e.expanded?t("div",{staticClass:"sub-nav-items-container"},e._l(e.item.subItems,(function(e){return t("SubNavItem",{key:e.id,attrs:{subItem:e}})})),1):e._e()])},_t=[],Ct=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sub-nav-item"},[t("div",{staticClass:"sub-nav-title",on:{click:e.toggle}},[e._v(" "+e._s(e.subItem.title)+" "),t("i",{staticClass:"el-icon-arrow-down",class:{activated:e.expanded}})]),e.expanded?t("div",{staticClass:"sub-sub-nav-items-container"},e._l(e.subItem.subSubItems,(function(e){return t("SubSubNavItem",{key:e.id,attrs:{subSubItem:e}})})),1):e._e()])},yt=[],qt=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sub-sub-nav-item",class:{activated3:e.isActivated},on:{click:e.activate}},[e._v(" "+e._s(e.subSubItem.title)+" ")])},Lt=[],At={data(){return{}},computed:{...(0,F.aH)(["activatedTitle"]),isActivated(){return this.activatedTitle===this.$props.subSubItem.title}},methods:{...(0,F.PY)(["setActivatedTitle"]),activate(){this.setActivatedTitle(this.$props.subSubItem.title)}},components:{},watch:{},props:{subSubItem:Object}},Nt=At,Tt=(0,J.A)(Nt,qt,Lt,!1,null,"5561de44",null),It=Tt.exports,wt={data(){return{expanded:!1}},computed:{},methods:{toggle(){this.expanded=!this.expanded}},components:{SubSubNavItem:It},watch:{},props:{subItem:Object}},St=wt,kt=(0,J.A)(St,Ct,yt,!1,null,"6d225537",null),xt=kt.exports,Et={data(){return{expanded:!1}},computed:{},methods:{toggle(){this.expanded=!this.expanded}},components:{SubNavItem:xt},watch:{},props:{item:Object}},Ot=Et,jt=(0,J.A)(Ot,bt,_t,!1,null,"4f3d3833",null),Pt=jt.exports,Mt={data(){return{navItems:[{id:1,title:"一级标题1",subItems:[{id:11,title:"二级标题1-1",subSubItems:[{id:111,title:"三级标题1-1-1"},{id:112,title:"三级标题1-1-2"},{id:113,title:"三级标题1-1-3"}]},{id:12,title:"二级标题1-2",subSubItems:[{id:121,title:"三级标题1-2-1"},{id:122,title:"三级标题1-2-2"},{id:123,title:"三级标题1-2-3"}]},{id:13,title:"二级标题1-3",subSubItems:[{id:131,title:"三级标题1-3-1"},{id:132,title:"三级标题1-3-2"},{id:133,title:"三级标题1-3-3"}]}]},{id:2,title:"一级标题2",subItems:[{id:21,title:"二级标题2-1",subSubItems:[{id:211,title:"三级标题2-1-1"},{id:212,title:"三级标题2-1-2"},{id:213,title:"三级标题2-1-3"}]},{id:22,title:"二级标题2-2",subSubItems:[{id:221,title:"三级标题2-2-1"},{id:222,title:"三级标题2-2-2"},{id:223,title:"三级标题2-2-3"}]},{id:23,title:"二级标题2-3",subSubItems:[{id:231,title:"三级标题2-3-1"},{id:232,title:"三级标题2-3-2"},{id:233,title:"三级标题2-3-3"}]}]}]}},components:{NavItem:Pt}},Dt=Mt,$t=(0,J.A)(Dt,ft,ht,!1,null,"e7209b94",null),Ut=$t.exports,Ht={components:{AsideNav:Ut},data(){return{}},computed:{title(){return this.$route.query.className}}},Vt=Ht,Ft=(0,J.A)(Vt,gt,vt,!1,null,"24d106ef",null),Rt=Ft.exports,Bt=function(){var e=this,t=e._self._c;return t("article",{staticClass:"article"},[""!==e.activatedTitle?t("div",{staticClass:"article-container"},[t("div",{staticClass:"article-title"},[e._v(e._s(e.activatedTitle))]),e._m(0)]):e._e()])},Jt=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"article-content"},[t("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus mauris a diam maecenas sed enim. Quis hendrerit dolor magna eget. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Enim lobortis scelerisque fermentum dui. Enim facilisis gravida neque convallis a cras semper. At quis risus sed vulputate odio. Scelerisque purus semper eget duis at tellus at urna condimentum. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Tortor pretium viverra suspendisse potenti nullam ac. Tellus elementum sagittis vitae et. Sem viverra aliquet eget sit amet tellus cras. Convallis convallis tellus id interdum velit. Tortor vitae purus faucibus ornare.")]),t("p",[e._v("Amet consectetur adipiscing elit ut aliquam purus. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Vulputate mi sit amet mauris commodo. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Duis convallis convallis tellus id interdum velit laoreet. Nec feugiat in fermentum posuere urna nec tincidunt. Ut porttitor leo a diam sollicitudin tempor id. Sapien faucibus et molestie ac feugiat sed lectus. Ullamcorper morbi tincidunt ornare massa eget.")]),t("p",[e._v("Massa id neque aliquam vestibulum morbi blandit. Varius duis at consectetur lorem donec massa sapien. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Sapien pellentesque habitant morbi tristique senectus et netus. Praesent tristique magna sit amet. Libero enim sed faucibus turpis in eu mi. Sagittis vitae et leo duis ut diam. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Blandit libero volutpat sed cras ornare arcu. Lectus sit amet est placerat in egestas erat imperdiet. Tristique nulla aliquet enim tortor at. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Interdum consectetur libero id faucibus. Fermentum dui faucibus in ornare quam viverra orci sagittis. Arcu felis bibendum ut tristique.")]),t("p",[e._v("Sagittis vitae et leo duis ut. Quis hendrerit dolor magna eget est lorem ipsum dolor. Faucibus pulvinar elementum integer enim. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Tortor condimentum lacinia quis vel eros. Velit euismod in pellentesque massa placerat duis. Elit ut aliquam purus sit amet luctus venenatis lectus. Neque viverra justo nec ultrices dui sapien eget mi. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Et leo duis ut diam quam nulla porttitor massa id. Vel eros donec ac odio tempor orci. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Lacinia quis vel eros donec ac odio tempor. Nunc congue nisi vitae suscipit tellus mauris a. Eu sem integer vitae justo eget. Sem nulla pharetra diam sit amet nisl.")]),t("p",[e._v("Cursus euismod quis viverra nibh. Cras semper auctor neque vitae tempus. Tortor at risus viverra adipiscing at in. Morbi tincidunt ornare massa eget. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Enim ut tellus elementum sagittis. Urna molestie at elementum eu facilisis sed odio morbi. Duis at tellus at urna condimentum mattis pellentesque. Urna porttitor rhoncus dolor purus non enim. Lorem mollis aliquam ut porttitor leo a diam. Morbi tristique senectus et netus. Augue ut lectus arcu bibendum. Ut aliquam purus sit amet luctus venenatis. Massa vitae tortor condimentum lacinia quis. Tempus egestas sed sed risus pretium. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Egestas sed tempus urna et pharetra. Ultricies leo integer malesuada nunc.")]),t("p",[e._v("Parturient montes nascetur ridiculus mus mauris vitae ultricies. Quisque id diam vel quam. Diam maecenas sed enim ut. Lacinia at quis risus sed vulputate odio ut. Libero enim sed faucibus turpis in eu mi bibendum. Sollicitudin tempor id eu nisl. Accumsan in nisl nisi scelerisque eu ultrices vitae. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Egestas purus viverra accumsan in nisl nisi scelerisque. Nulla aliquet porttitor lacus luctus accumsan. Aliquam purus sit amet luctus. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Cursus turpis massa tincidunt dui ut ornare lectus. Amet cursus sit amet dictum sit amet justo donec enim.")]),t("p",[e._v("Sed faucibus turpis in eu mi. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Metus dictum at tempor commodo. Hendrerit dolor magna eget est lorem ipsum dolor sit. Sagittis orci a scelerisque purus semper eget duis at. Turpis egestas integer eget aliquet nibh praesent tristique magna. Mauris commodo quis imperdiet massa tincidunt nunc. Tincidunt id aliquet risus feugiat in ante metus dictum. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Eu consequat ac felis donec et odio pellentesque diam volutpat. Elementum pulvinar etiam non quam lacus suspendisse faucibus.")]),t("p",[e._v("Sit amet volutpat consequat mauris. Hac habitasse platea dictumst quisque sagittis purus sit. Vulputate odio ut enim blandit volutpat maecenas volutpat. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Nibh mauris cursus mattis molestie a iaculis. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Felis eget nunc lobortis mattis aliquam faucibus purus. Enim ut sem viverra aliquet. Morbi tincidunt ornare massa eget egestas. Lorem mollis aliquam ut porttitor. Erat pellentesque adipiscing commodo elit at. Euismod quis viverra nibh cras pulvinar. Tellus elementum sagittis vitae et leo duis ut. Auctor eu augue ut lectus arcu bibendum at varius vel. Vulputate enim nulla aliquet porttitor. Tincidunt eget nullam non nisi est. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Felis imperdiet proin fermentum leo vel orci porta.")]),t("p",[e._v("Nunc sed augue lacus viverra vitae congue eu consequat ac. Non sodales neque sodales ut. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Mus mauris vitae ultricies leo integer malesuada nunc. Cras semper auctor neque vitae tempus quam pellentesque. Mollis nunc sed id semper risus in hendrerit gravida. Sagittis eu volutpat odio facilisis mauris sit. Id leo in vitae turpis massa sed elementum tempus. Ultricies lacus sed turpis tincidunt id aliquet. Enim sed faucibus turpis in eu mi bibendum neque egestas. Nullam non nisi est sit amet facilisis magna. Arcu ac tortor dignissim convallis aenean et tortor at. Proin nibh nisl condimentum id. Ultrices sagittis orci a scelerisque purus semper. Leo in vitae turpis massa sed elementum tempus egestas sed. Sit amet luctus venenatis lectus magna fringilla. Amet tellus cras adipiscing enim eu. Pellentesque habitant morbi tristique senectus et. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Nullam vehicula ipsum a arcu cursus vitae.")]),t("p",[e._v("Enim facilisis gravida neque convallis. Vestibulum lectus mauris ultrices eros in. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Nibh venenatis cras sed felis eget. Et molestie ac feugiat sed lectus vestibulum. Sed augue lacus viverra vitae congue eu consequat ac felis. Egestas integer eget aliquet nibh praesent. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Convallis aenean et tortor at risus viverra adipiscing at in. Amet purus gravida quis blandit turpis. Vestibulum lorem sed risus ultricies. Vitae turpis massa sed elementum tempus egestas sed sed risus.")])])}],zt={computed:{...(0,F.aH)(["activatedTitle"])}},Yt=zt,Qt=(0,J.A)(Yt,Bt,Jt,!1,null,"48aa4cae",null),Zt=Qt.exports,Gt=function(){var e=this,t=e._self._c;return t("div",{staticClass:"learning-progress"},[t("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("查看学习时长")]),t("el-dialog",{attrs:{title:"学习时长",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("div",{attrs:{id:"chart"}}),t("p",[e._v("总学习时长："+e._s(e.totalLearningTime)+"分钟")])])],1)},Xt=[],Wt={data(){return{}},computed:{},methods:{},components:{},watch:{},props:{totalLearningTime:Number,todayTotalTime:Number},mounted(){let e=echarts.init(document.getElementById("chart"));e.setOption({title:{text:(this.$props.todayTotalTime/6e4).toString()+"/ 25 min",left:"center",top:"center"},series:[{type:"pie",data:[{value:this.$props.todayTotalTime/6e4,name:"今日已学习时长"},{value:25-this.$props.todayTotalTime/6e4,name:"距目标差距时长"}],radius:["40%","70%"]}]})}},Kt=Wt,es=(0,J.A)(Kt,Gt,Xt,!1,null,"0a7c0fa0",null),ts=es.exports,ss={data(){return{classLearningDataArray:[],totalLearningTime:0,todayTotalTime:0,alredyLearnedCount:0,progressPercentage:0,enterTime:0,exitTime:0}},computed:{...(0,F.aH)(["activatedTitle"]),className(){return this.$route.query.className}},methods:{...(0,F.PY)(["setActivatedTitle"]),handleIntersection(e){e.forEach((e=>{e.isIntersecting&&(this.alredyLearnedCount+=1)}))}},components:{Aside:Rt,Article:Zt,LearningProgress:ts},watch:{},props:{},async created(){const{data:{user:{user_metadata:{totalLearningTime:e,classLearningData:t}}}}=await he.auth.getUser();this.totalLearningTime=e,this.classLearningDataArray=JSON.parse(t);let s=this.classLearningDataArray.find((e=>e.className===this.$route.query.className));s||(this.classLearningDataArray.push({className:this.$route.query.className,todayTotalTime:0,progress:0}),s=this.classLearningDataArray.find((e=>e.className===this.$route.query.className)));const{time:i,progress:a}=s;this.todayTotalTime=i,this.progressPercentage=a},async beforeDestroy(){this.exitTime=new Date,this.todayTotalTime=this.exitTime-this.enterTime,this.totalLearningTime+=this.todayTotalTime;let e=this.classLearningDataArray.find((e=>e.className===this.$route.query.className));e.time=this.todayTotalTime,e.progress=this.progressPercentage;const{error:t}=await he.auth.updateUser({data:{totalLearningTime:this.totalLearningTime,classLearningData:JSON.stringfy(this.classLearningDataArray)}});t&&alert(t.message),this.setActivatedTitle("")}},is=ss,as=(0,J.A)(is,mt,pt,!1,null,"abb3f9e4",null),ns=as.exports;P["default"].use(lt.Ay);const rs=[{path:"/",component:Ve,name:"Home"},{path:"/login",component:Ye,name:"Login"},{path:"/user",component:at,meta:{requiresAuth:!0},name:"UserCenter"},{path:"/study",component:ns,meta:{requiresAuth:!0},name:"StudyDetail"}],us=new lt.Ay({routes:rs});us.beforeEach(((e,t,s)=>{e.matched.some((e=>e.meta.requiresAuth))?dt.state.isLoggedIn?s():(console.log(dt.state.isLoggedIn),alert("请先登录！"),s({path:"/login"})):s()}));var os=us,ls=s(1269),cs=s(5327),ds=s(623),ms=s(9536),ps=s(9372),gs=s(7917),vs=s(1611),fs=s(8915),hs=s(2080),bs=s(5095);ls.Y([ds.a,ms.a,ps.a,gs.a,vs.a,cs.a,fs._,hs.i,bs.a]),P["default"].config.productionTip=!1,P["default"].use(j()),P["default"].use(E()),P["default"].use(k()),P["default"].use(w()),P["default"].use(T()),P["default"].use(A()),P["default"].use(q()),P["default"].use(C()),P["default"].use(b()),P["default"].use(f()),P["default"].use(g()),P["default"].use(m()),P["default"].use(c()),P["default"].use(o()),P["default"].use(r()),P["default"].use(a()),new P["default"]({router:os,store:dt,render:e=>e(ot)}).$mount("#app")}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,i,a,n){if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],a=e[c][1],n=e[c][2];for(var u=!0,o=0;o<i.length;o++)(!1&n||r>=n)&&Object.keys(s.O).every((function(e){return s.O[e](i[o])}))?i.splice(o--,1):(u=!1,n<r&&(r=n));if(u){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[i,a,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};s.t=function(i,a){if(1&a&&(i=this(i)),8&a)return i;if("object"===typeof i&&i){if(4&a&&i.__esModule)return i;if(16&a&&"function"===typeof i.then)return i}var n=Object.create(null);s.r(n);var r={};e=e||[null,t({}),t([]),t(t)];for(var u=2&a&&i;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){r[e]=function(){return i[e]}}));return r["default"]=function(){return i},s.d(n,r),n}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,i){return s.f[i](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/"+e+".3be42ff1.js"}}(),function(){s.miniCssF=function(e){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="online-learning-platform:";s.l=function(i,a,n,r){if(e[i])e[i].push(a);else{var u,o;if(void 0!==n)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+n){u=d;break}}u||(o=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.setAttribute("data-webpack",t+n),u.src=i),e[i]=[a];var m=function(t,s){u.onerror=u.onload=null,clearTimeout(p);var a=e[i];if(delete e[i],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(s)})),t)return t(s)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),o&&document.head.appendChild(u)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var e={524:0};s.f.j=function(t,i){var a=s.o(e,t)?e[t]:void 0;if(0!==a)if(a)i.push(a[2]);else{var n=new Promise((function(s,i){a=e[t]=[s,i]}));i.push(a[2]=n);var r=s.p+s.u(t),u=new Error,o=function(i){if(s.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}};s.l(r,o,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,n,r=i[0],u=i[1],o=i[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(a in u)s.o(u,a)&&(s.m[a]=u[a]);if(o)var c=o(s)}for(t&&t(i);l<r.length;l++)n=r[l],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(c)},i=self["webpackChunkonline_learning_platform"]=self["webpackChunkonline_learning_platform"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[504],(function(){return s(8600)}));i=s.O(i)})();
//# sourceMappingURL=app.b8642c7f.js.map
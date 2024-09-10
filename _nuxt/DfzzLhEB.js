import{r as i,o as x,x as u,y as a,D as h,E as y,z as d,F as U,G as k,H as E,I as f,v as c}from"./F2qTBu9o.js";import{_ as C}from"./DlAUqK2U.js";const j={class:"container mx-auto p-4"},S={type:"submit",class:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"},T={class:"bg-white shadow-md rounded-lg"},D=["onClick"],N=["onClick"],A={key:0,class:"mt-4 text-green-500"},F={key:1,class:"mt-4 text-red-500"},M={__name:"users",setup(V){const v=i([]),l=i({name:"",email:""}),r=i(""),o=i(""),n=i(!1);let m=null;const p=async()=>{try{const e=await fetch("/api/users");e.ok?v.value=await e.json():console.error("Failed to fetch users")}catch(e){console.error("Error fetching users:",e)}},b=async()=>{try{const e=n.value?"PUT":"POST",t=await fetch("/api/users",{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify({...l.value,id:m})}),s=await t.json();t.ok?(r.value=n.value?"User updated successfully":"User added successfully",o.value="",l.value={name:"",email:""},n.value=!1,m=null,await p()):(o.value=s.error,r.value="")}catch(e){console.error("Error saving user:",e),o.value="An error occurred while saving the user.",r.value=""}},g=e=>{l.value={name:e.name,email:e.email},n.value=!0,m=e.id},w=async e=>{if(confirm("Are you sure you want to delete this user?"))try{const t=await fetch("/api/users",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}),s=await t.json();t.ok?(r.value=s.message,o.value="",await p()):(o.value=s.error,r.value="")}catch(t){console.error("Error deleting user:",t),o.value="An error occurred while deleting the user.",r.value=""}};return x(p),(e,t)=>(c(),u("div",j,[t[2]||(t[2]=a("h1",{class:"text-2xl font-bold mb-4"},"User Management",-1)),a("form",{onSubmit:U(b,["prevent"]),class:"mb-4"},[h(a("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>l.value.name=s),type:"text",placeholder:"Name",class:"border p-2 mr-2",required:""},null,512),[[y,l.value.name]]),h(a("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>l.value.email=s),type:"email",placeholder:"Email",class:"border p-2 mr-2",required:""},null,512),[[y,l.value.email]]),a("button",S,d(n.value?"Update User":"Add User"),1)],32),a("ul",T,[(c(!0),u(k,null,E(v.value,s=>(c(),u("li",{key:s.id,class:"flex justify-between items-center p-4 border-b"},[a("span",null,d(s.name)+" - "+d(s.email),1),a("div",null,[a("button",{onClick:_=>g(s),class:"px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"},"Edit",8,D),a("button",{onClick:_=>w(s.id),class:"px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"},"Delete",8,N)])]))),128))]),r.value?(c(),u("p",A,d(r.value),1)):f("",!0),o.value?(c(),u("p",F,d(o.value),1)):f("",!0)]))}},O=C(M,[["__scopeId","data-v-654d09c9"]]);export{O as default};

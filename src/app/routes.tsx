import { createBrowserRouter } from "react-router";
import { PublicLayout } from "./components";
import { BusinessHub, Dashboard, Detail, Editorial, Events, Governance, Home, Join, Library, Login, MemberLayout, Needs, PortalPage, Story, Vision } from "./pages";

export const router=createBrowserRouter([
 {path:"/",Component:PublicLayout,children:[
  {index:true,Component:Home},{path:"about",element:<Editorial kind="about"/>},{path:"about/story",Component:Story},{path:"about/leadership",Component:Governance},{path:"about/bta-2035",Component:Vision},{path:"governance",Component:Governance},
  {path:"our-people",element:<Editorial kind="people"/>},{path:"knowledge",element:<Editorial kind="knowledge"/>},{path:"knowledge/forum",element:<Detail type="forum"/>},{path:"knowledge/library",Component:Library},
  {path:"enterprise",element:<Editorial kind="enterprise"/>},{path:"enterprise/business-hub",Component:BusinessHub},{path:"community-impact",element:<Editorial kind="community"/>},{path:"community-impact/school-rehabilitation",element:<Detail type="project"/>},{path:"community-needs",Component:Needs},
  {path:"blue-economy",element:<Editorial kind="blue"/>},{path:"blue-economy/centre",element:<Detail type="centre"/>},{path:"heritage",element:<Editorial kind="heritage"/>},{path:"heritage/oral-history",element:<Detail type="oral"/>},
  {path:"events",Component:Events},{path:"events/knowledge-forum",element:<Detail type="event"/>},{path:"news",element:<Events news/>},{path:"news/community-education",element:<Detail type="article"/>},{path:"media",element:<Events news/>},
  {path:"partner",element:<Editorial kind="partners"/>},{path:"join",Component:Join},{path:"support",element:<Join support/>}
 ]},{path:"/portal",Component:Login},
 {path:"/members",Component:MemberLayout,children:[{index:true,Component:Dashboard},...["announcements","meetings","documents","events","directory","knowledge","mentorship","profile","settings"].map(path=>({path,element:<PortalPage type={path==="directory"?"member-directory":path}/>}))]}
]);

const routes = [
    {
      path: "/",
      component: "Home.jsx",
    },
    {
      path: "/text",
      component: "TextScreen.jsx",
    },
    {
      path: "/url",
      component: "URLScreen.jsx",
    },
    {
      path: "/story",
      component: "StoryBoard.jsx",
    },
    {
      path: "/modules",
      component: "ModuleScreen.jsx",
    },
    {
      path: "/modules/:id",
      component: "ModuleTemplate.jsx",
    },
  ];
  
  export default routes;
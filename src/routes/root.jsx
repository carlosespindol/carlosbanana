import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,

  } 
  
  from "react-router-dom";

  import CEAlbuns from "../components/CEAlbuns";
  import CEWiki from "../components/CEWiki";
  import CEIndex from "../components/CEIndex";
  import CEErro from "../components/CEErro";
  import CESocial from "../components/CESocial";
  import { CELayout } from "../components/CELayout";

  
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<CELayout />} errorElement={<CEErro />}>
        <Route index path="/" element={<CEIndex />}></Route>
        <Route path="wiki" element={<CEWiki />}></Route>
        <Route path="albuns" element={<CEAlbuns />}></Route>
        <Route path="social" element={<CESocial />}></Route>
      </Route>
    )
  );
  
  const Root = () => {
    return <RouterProvider router={route} />;
  };
  
  export default Root;
  
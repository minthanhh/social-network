import { LayoutMain, LayoutMessage } from '@/layouts';
import { Home } from '@/pages';

import LayoutAuth from '@/layouts/Auth/LayoutAuth';
import Auth from '@/pages/Auth/Auth';

import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
} from 'react-router-dom';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/">
         <Route element={<LayoutMain />}>
            <Route path="/" element={<Home />} />
         </Route>
         <Route element={<LayoutMessage />}>
            <Route path="/messages" element={<Home />} />
         </Route>
         <Route element={<LayoutAuth />}>
            <Route path="/login" element={<Auth />} />
         </Route>
      </Route>
   )
);

export default router;

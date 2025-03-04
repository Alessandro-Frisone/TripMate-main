import { Outlet } from "react-router";
import Header from "../components/Header";

export default function DefaultLayout(){
    return (
        <>
          <Header/>
          <main className="ml-60 p-6 flex-1">
            <Outlet />
          </main>
        </>
      )
}
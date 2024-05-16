import MainNavigation from "../components/MainNavigation";

function ErrorPage(){
    return (
        <>
            <MainNavigation></MainNavigation>
            <main>
              <h1>An Error Occur</h1>
              <p1>Could not find this page!</p1>
            </main>
        </>
    )
}

export default ErrorPage;
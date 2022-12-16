import Header from "./Header";

function Layout(props) {
  console.log(props);
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}

export default Layout;

import Header from "../Header";
import Sidebar from "../Sidebar";

export default function GroceryList() {
  return(
    <>
    <Header />
    <div className="App">
      <Sidebar />
    <section className="groc-list">
        <h1>Grocery List</h1>
          <>
          <br />
          This is the grocery list at /list

          <section className="grocery-item"> 
            <ol>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ol>
          </section>

          <br />
          </>

      </section>
      </div>
    </>
  );
}
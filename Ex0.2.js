import * as react from "react";
import * as reactDOM from "react-dom";

const root = 
 reactDOM.createRoot(document.getElementById('root'))

root.render(
   <section>
      <header>
      <h1>A header</h1>
      </header>
      <nav>
      <a href="item">Nav Item</a>
      </nav>
      <main>
      <p>The main content...</p>
      </main>
      <footer>
      <small>&copy; 2021</small>
      </footer>
    </section>
);

// import './App.css'

import { Card } from "./components/Card";

function App() {
  return (
    <>
      <p className="bg-amber-200 text-2xl text-stone-950 rounded-xl font-extralight mb-4 mt-4 py-2">
        Hi, I am Yash
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        <Card
          image="https://picsum.photos/301"
          title="How"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!"
        />
        <Card
          image="https://picsum.photos/302"
          title="Are"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!"
        />
        <Card
          image="https://picsum.photos/303"
          title="You"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!"
        />
      </div>
    </>
  );
}

export default App;

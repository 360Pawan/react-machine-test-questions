import React, { useState } from "react";
import { list } from "./list";

import "./App.css";

function App() {
  const [listItems, setListItems] = useState(list);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListItems((prevListItems) =>
      prevListItems.map((el) => ({ ...el, checked: e.target.checked }))
    );
  };

  const handleChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    setListItems((prevListItems) =>
      prevListItems.map((el) =>
        el.id === id ? { ...el, checked: e.target.checked } : el
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-300">
      <div className="flex flex-col gap-6 bg-white rounded-2xl max-w-xs w-full overflow-hidden">
        <div className="flex items-center gap-2 bg-slate-200 px-8 py-5">
          <input
            type="checkbox"
            id="selectAll"
            onChange={handleSelectAll}
            checked={listItems.every((el) => el.checked === true)}
          />
          <label htmlFor="selectAll" className="cursor-pointer">
            Select All
          </label>
        </div>
        {listItems.map((el) => (
          <div key={el.id} className="flex items-center gap-2 px-8 last:pb-5">
            <input
              type="checkbox"
              id={el.name}
              checked={el?.checked}
              onChange={(e) => handleChecked(e, el.id)}
            />
            <label htmlFor={el.name} className="cursor-pointer">
              {el.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

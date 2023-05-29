"use client";

import React, { useState, KeyboardEvent } from "react";

interface FolderProps {
  explorer: {
    id: number;
    name: string;
    isFolder: boolean;
    items?: Explorer[];
  };
}

interface Explorer {
  id: number;
  name: string;
  isFolder: boolean;
  items?: Explorer[];
}

export const Folder = ({ explorer }: FolderProps) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleFolder = (e: React.SyntheticEvent, isFolder: boolean) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({ visible: true, isFolder });
  };

  const onAddFolder = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const inputElement = e.target as HTMLInputElement;
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer?.isFolder) {
    return (
      <>
        <div
          className="max-w-md w-full p-3 bg-slate-200 rounded-md flex justify-between items-center mt-3"
          onClick={() => setExpand(!expand)}
        >
          <p className="text-xl capitalize cursor-pointer">
            📁 {explorer?.name}
          </p>
          <div className="flex items-center gap-3">
            <button onClick={(e) => handleFolder(e, true)}>➕ Folder</button>
            <button onClick={(e) => handleFolder(e, false)}>➕ File</button>
          </div>
        </div>
        {expand ? (
          <div className="ml-5">
            {showInput.visible ? (
              <div className="mt-2">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoFocus
                  onKeyDown={onAddFolder}
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                />
              </div>
            ) : null}
            {explorer?.items?.map((exp) => (
              <Folder key={exp?.id} explorer={exp} />
            ))}
          </div>
        ) : null}
      </>
    );
  } else {
    return (
      <div className="max-w-sm bg-slate-200 rounded-md flex justify-between items-center w-full mt-3 p-3 ml-auto">
        <p className="text-xl capitalize">📄 {explorer?.name}</p>
      </div>
    );
  }
};

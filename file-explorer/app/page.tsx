"use client";

import { useState } from "react";

import { Explorer, Folder } from "@/components/folder";
import { data } from "./data";
import { useTraverseTree } from "@/hooks/use-traverse-tree";

export default function Home() {
  const { insertNode, deleteNode } = useTraverseTree();
  const [explorerData, setExplorerData] = useState<Explorer>(data);

  const handleInsertNode = (
    folderId: number,
    item: string,
    isFolder: boolean
  ) => {
    const latestTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(latestTree);
  };

  const handleDeleteNode = (folderId: number) => {
    const latestTree = deleteNode(explorerData, folderId);

    setExplorerData(latestTree);
  };

  return (
    <div className="max-w-md p-5 mx-auto">
      {explorerData !== null ? (
        <Folder
          handleInsertNode={handleInsertNode}
          handleDeleteNode={handleDeleteNode}
          explorer={explorerData}
        />
      ) : (
        <p>No folder to show</p>
      )}
    </div>
  );
}

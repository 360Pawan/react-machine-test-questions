import { Explorer } from "@/components/folder";

export const useTraverseTree = () => {
  const insertNode = (
    tree: Explorer,
    folderId: number,
    item: string,
    isFolder: boolean
  ): Explorer => {
    // if (tree?.id === folderId && tree?.isFolder) {
    //   const newItem = {
    //     id: new Date().getTime(),
    //     name: item,
    //     isFolder,
    //     items: [],
    //   };
    //   const updatedItems = [newItem, ...(tree?.items ?? [])];
    //   return { ...tree, items: updatedItems };
    // }
    // if (tree?.items && tree?.items?.length > 0) {
    //   const updatedItems = (tree?.items ?? [])?.map((obj) =>
    //     insertNode(obj, folderId, item, isFolder)
    //   );
    //   return { ...tree, items: updatedItems };
    // }
    // return tree;

    const memorized: { [id: number]: Explorer } = {};

    const insertMemorizedNode = (node: Explorer): Explorer => {
      const nodeId = node?.id;

      if (memorized[nodeId]) {
        return memorized[nodeId];
      }

      const newNode = { ...node };

      if (newNode.id === folderId && newNode.isFolder) {
        const newItem = {
          id: new Date().getTime(),
          name: item,
          isFolder,
          items: [],
        };

        newNode.items = [newItem, ...(newNode?.items ?? [])];
      }

      if (newNode.items && newNode.items.length > 0) {
        newNode.items = newNode.items.map((obj) => insertMemorizedNode(obj));
      }

      memorized[nodeId] = newNode;

      return newNode;
    };

    const updatedTree = insertMemorizedNode(tree);

    return updatedTree;
  };

  const deleteNode = (tree: Explorer, folderId: number): Explorer | any => {
    const memorized: { [id: number]: Explorer } = {};

    const deleteMemorizedNode = (node: Explorer): Explorer | any => {
      const nodeId = node.id;

      if (memorized[nodeId]) {
        return memorized[nodeId];
      }

      const newNode = { ...node };

      if (newNode.id === folderId) {
        return null;
      }

      if (newNode.items && newNode.items.length > 0) {
        newNode.items = newNode.items
          .map((obj) => deleteMemorizedNode(obj))
          .filter(Boolean);
      }

      memorized[nodeId] = newNode;

      return newNode;
    };

    const updatedTree = deleteMemorizedNode(tree);

    return updatedTree;
  };

  return { insertNode, deleteNode };
};

import { Explorer } from "@/components/folder";

export const useTraverseTree = () => {
  const insertNode = (
    tree: Explorer,
    folderId: number,
    item: string,
    isFolder: boolean
  ): Explorer => {
    if (tree?.id === folderId && tree?.isFolder) {
      const newItem = {
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      };

      const updatedItems = [newItem, ...(tree?.items ?? [])];

      return { ...tree, items: updatedItems };
    }

    if (tree?.items && tree?.items?.length > 0) {
      const updatedItems = (tree?.items ?? [])?.map((obj) =>
        insertNode(obj, folderId, item, isFolder)
      );

      return { ...tree, items: updatedItems };
    }

    return tree;
  };

  const deleteNode = (tree: Explorer, folderId: number) => {
    if (tree?.id === folderId) {
      console.log("Delete the", tree?.name);

      let latestNode: Explorer[] = [];
      latestNode = (tree?.items ?? [])?.filter((item) => item?.id !== folderId);

      console.log(latestNode);

      return { ...tree, items: latestNode };
    }

    let latestNode: Explorer[] = [];
    latestNode = (tree?.items ?? [])?.map((obj) => deleteNode(obj, folderId));

    return { ...tree, items: latestNode };
  };

  return { insertNode, deleteNode };
};

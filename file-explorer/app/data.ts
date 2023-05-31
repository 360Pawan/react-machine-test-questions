export const data = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "app",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "home",
          isFolder: true,
          items: [{ id: 4, name: "home.tsx", isFolder: false, items: [] }],
        },
        { id: 5, name: "layout.tsx", isFolder: false, items: [] },
        { id: 6, name: "page.tsx", isFolder: false, items: [] },
      ],
    },
    {
      id: 7,
      name: "public",
      isFolder: true,
      items: [
        { id: 8, name: "index.html", isFolder: false, items: [] },
        { id: 9, name: "style.css", isFolder: false, items: [] },
      ],
    },
    {
      id: 10,
      name: "index.css",
      isFolder: false,
    },
  ],
};

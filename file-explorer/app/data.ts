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
          id: 7,
          name: "home",
          isFolder: true,
          items: [{ id: 8, name: "home.tsx", isFolder: false }],
        },
        { id: 3, name: "layout.tsx", isFolder: false },
        { id: 4, name: "page.tsx", isFolder: false },
      ],
    },
    {
      id: 5,
      name: "public",
      isFolder: true,
      items: [
        { id: 6, name: "index.html", isFolder: false },
        { id: 7, name: "style.css", isFolder: false },
      ],
    },
    {
      id: 6,
      name: "index.css",
      isFolder: false,
    },
  ],
};

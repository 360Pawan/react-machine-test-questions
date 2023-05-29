import { Folder } from "@/components/folder";
import { data } from "./data";

export default function Home() {
  return (
    <div className="max-w-md p-5 mx-auto">
      <Folder explorer={data} />
    </div>
  );
}

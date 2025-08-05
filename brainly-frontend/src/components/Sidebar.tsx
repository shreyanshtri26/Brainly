import { ArticleIcon } from "../icons/ArticleIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ImageIcon } from "../icons/ImageIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div className={`h-screen bg-white border-r w-72 fixed left-0 top-0 p-4 transform ${
        open ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 transition-transform duration-300 ease-in-out`}>

      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="text-2xl font-bold italic">Brainly</div>
          <div className="mt-4">
            <SidebarItem icon={<ImageIcon />} text="Images" />
            <SidebarItem icon={<YoutubeIcon />} text="Youtube" />
            <SidebarItem icon={<TwitterIcon />} text="Twitter" />
            <SidebarItem icon={<ArticleIcon />} text="Article" />
          </div>
        </div>
        <div>
          <SidebarItem icon={<DeleteIcon />} text="Delete All" />
        </div>
      </div>
    </div>
  );
}

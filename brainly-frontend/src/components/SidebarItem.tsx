import { ReactNode } from "react";

export function SidebarItem({
  icon,
  text,
  onClick,
}: {
  icon: ReactNode;
  text: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="p-2 flex items-center gap-2 hover:bg-gray-100 rounded-md cursor-pointer"
    >
      {icon}
      <div className="text-md">{text}</div>
    </div>
  );
}

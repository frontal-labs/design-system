"use client";

import type { IconComponent } from "@frontal-labs/icons";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@frontal-labs/ui";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: IconComponent;
    isActive?: boolean;
  }[];
}) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.isActive}>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

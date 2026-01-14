"use client";

import {
  BellIcon,
  CheckIcon,
  GlobeIcon,
  HomeIcon,
  KeyboardIcon,
  LinkIcon,
  LockIcon,
  MenuIcon,
  MessageIcon,
  PaintBrushIcon,
  SettingsIcon,
  VideoIcon,
} from "@frontal-ds/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@frontal-ds/ui";
import * as React from "react";

const data = {
  nav: [
    { name: "Notifications", icon: BellIcon },
    { name: "Navigation", icon: MenuIcon },
    { name: "HomeIcon", icon: HomeIcon },
    { name: "Appearance", icon: PaintBrushIcon },
    { name: "Messages & media", icon: MessageIcon },
    { name: "Language & region", icon: GlobeIcon },
    { name: "Accessibility", icon: KeyboardIcon },
    { name: "Mark as read", icon: CheckIcon },
    { name: "Audio & video", icon: VideoIcon },
    { name: "Connected accounts", icon: LinkIcon },
    { name: "Privacy & visibility", icon: LockIcon },
    { name: "Advanced", icon: SettingsIcon },
  ],
};

export function SettingsDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="small">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
        <DialogTitle className="sr-only">SettingsIcon</DialogTitle>
        <DialogDescription className="sr-only">
          Customize your settings here.
        </DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar collapsible="none" className="hidden md:flex">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {data.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={item.name === "Messages & media"}
                        >
                          <a href="/sign-in">
                            <item.icon />
                            <span>{item.name}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex h-[480px] flex-1 flex-col overflow-hidden">
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="/sign-in">
                        SettingsIcon
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Messages & media</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
              {Array.from({ length: 10 }, () => (
                <div
                  key={crypto.randomUUID()}
                  className="aspect-video max-w-3xl rounded-xl bg-muted/50"
                />
              ))}
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}

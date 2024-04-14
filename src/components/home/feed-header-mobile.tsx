import React from "react";
import { CustomIcon } from "../ui/custom-icon";
import useWindow from "@/lib/hooks/window-context";
import { AvatarProfile } from "../tweet/ui/avatar";
import { useGetUser } from "@/api/useGetUser";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { SidebarLink } from "../sidebar/sidebar-link";
import { cn } from "@/lib/utils";
import Link from "next/link";

function FeedHeaderMobile() {
  const { isMobile } = useWindow();
  const { data: user } = useGetUser();

  const navLinks = [
    {
      href: `/${user?.username}`,
      linkName: "Profile",
      iconName: "ProfileIcon",
    },
    {
      href: "/premium",
      linkName: "Premium",
      iconName: "PremiumIcon",
      disabled: true,
      // canBeHidden: true,
    },
    {
      href: "/lists",
      linkName: "List",
      iconName: "ListIcon",
      disabled: true,
      // canBeHidden: true,
    },
    {
      href: "/bookmarks",
      linkName: "Bookmarks",
      iconName: "BookmarkIcon",
      // canBeHidden: true,
    },
    {
      href: "/communities",
      linkName: "Communities",
      iconName: "CommunitiesIcon",
      disabled: true,
      // canBeHidden: true,
    },
    {
      href: "/monetization",
      linkName: "Monetization",
      iconName: "MonetizationIcon",
      disabled: true,
      // canBeHidden: true,
    },
    {
      href: "/ads",
      linkName: "Ads",
      iconName: "AdsIcon",
      disabled: true,
      // canBeHidden: true,
    },
    {
      href: "/job",
      linkName: "Jobs",
      iconName: "JobIcon",
      disabled: true,
      // canBeHidden: true,
    },
    {
      href: "/settings",
      linkName: "Settings and Privacy",
      iconName: "SettingsIcon",
      disabled: true,
      // canBeHidden: true,
    },

    {
      href: "/logout",
      linkName: "Logout",
      iconName: "LogoutIcon",
      // disabled: true,
      // canBeHidden: true,
    },
  ];

  return (
    <header className="flex h-14 max-h-screen justify-between items-center px-4 text-light-primary dark:text-dark-primary font-bold">
      <Sheet>
        <SheetTrigger>
          <div>
            <AvatarProfile className="w-8 h-8" src={user?.profile_pic} />
          </div>
        </SheetTrigger>

        <div>
          <CustomIcon iconName="TwitterIcon" />
        </div>

        <div className="bg-r300 flex items-center justify-center">
          <CustomIcon
            iconName="SettingsIcon"
            className="fill-light-primary dark:fill-dark-primary h-6 w-6"
          />
        </div>

        <SheetContent
          side={"left"}
          className="w-3/4 bg-main-background overflow-auto max-h-screen pb-10 outline-none border-0"
        >
          <div className="p-6 ">
            <div className="flex justify-between items-center bg-slae-300">
              <AvatarProfile src={user?.profile_pic} />
              <div className=" rounded-full border p-[6px] dark:border-dark-secondary border-light-primary">
                <CustomIcon
                  iconName="PlusIcon"
                  className="w-5 h-5 fill-white"
                />
              </div>
            </div>

            <div className="bg-blu00 mt-2">
              <p className="text-xl font-bold">{user?.name}</p>
              <p className="text-dark-secondary">@{user?.username}</p>
            </div>

            <div className="flex flex-row">
              <div className=" flex flex-row mt-3 text-sm">
                <p className="mr-2 flex flex-row hover:underline cursor-pointer">
                  <p className="font-bold mr-1">{user?._count?.following}</p>
                  <p className=" text-light-secondary dark:text-dark-secondary">
                    Following
                  </p>
                </p>
                <p className="flex flex-row hover:underline cursor-pointer">
                  <p className="font-bold mr-1 ">{user?._count?.followedBy}</p>
                  <p className="text-light-secondary dark:text-dark-secondary ">
                    Follower
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div>
            {navLinks.map(({ ...linkData }) => (
              <Link
                href={linkData.href as string}
                className={cn(
                  "group py-2 outline-none ",
                  linkData.disabled && "pointer-events-none"
                )}
                aria-disabled={linkData?.disabled}
              >
                <div
                  className={cn(
                    `flex items-center gap-4 self-start py-3 pl-6 font-semibold text-xl transition
                       duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2  
                       group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 
                       dark:group-focus-visible:ring-white xs:p-3 xl:pr-5`
                  )}
                >
                  <CustomIcon
                    iconName={linkData.iconName as any}
                    className="w-7 h-7 fill-light-primary dark:fill-dark-primary"
                  />
                  <p className=" ">{linkData.linkName}</p>
                </div>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default FeedHeaderMobile;
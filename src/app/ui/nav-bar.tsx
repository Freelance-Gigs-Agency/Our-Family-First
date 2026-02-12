"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { NAVIGATION_LINKS, EVENTS } from "@/app/lib/constants";

function handleHashNavigation(href: string) {
  if (!href.startsWith("#")) return;
  if (window.location.pathname === "/") {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = `/${href}`;
  }
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuItemClick = (href: string) => {
    setMobileMenuOpen(false);
    handleHashNavigation(href);
  };

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Our Family First</span>
            <Image
              alt=""
              src="/our-family-first-logo.png"
              width={75}
              height={68}
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {NAVIGATION_LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={(e) => {
                if (item.href.startsWith("#")) {
                  e.preventDefault();
                  handleHashNavigation(item.href);
                }
              }}
            >
              {item.name}
            </Link>
          ))}
          <Popover className="relative">
            <PopoverButton className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-x-1">
              Events
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </PopoverButton>
            <PopoverPanel className="absolute z-10 mt-3 w-screen max-w-xs transform -translate-x-1/2 left-1/2 bg-white shadow-lg ring-1 ring-black ring-opacity-5 rounded-md">
              {({ close }) => (
                <div className="p-4">
                  {EVENTS.map((event) => (
                    <Link
                      key={event.name}
                      href={event.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      onClick={() => close()}
                    >
                      {event.name}
                    </Link>
                  ))}
                </div>
              )}
            </PopoverPanel>
          </Popover>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <Link
            href="/donate"
            className="rounded-md bg-customBlue px-3 py-2 sm:px-10 sm:py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Donate
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Our Family First</span>
              <Image
                alt=""
                src="/our-family-first-logo.png"
                width={75}
                height={68}
                className="h-10 w-auto"
              />
            </Link>
            <Link
              href="/donate"
              className="ml-auto rounded-md bg-customBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Donate
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NAVIGATION_LINKS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => handleMenuItemClick(item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Popover className="relative">
                  <PopoverButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Events
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    />
                  </PopoverButton>
                  <PopoverPanel className="mt-2 space-y-2 px-2">
                    {({ close }) => (
                      <>
                        {EVENTS.map((event) => (
                          <Link
                            key={event.name}
                            href={event.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={() => {
                              handleMenuItemClick(event.href);
                              close();
                            }}
                          >
                            {event.name}
                          </Link>
                        ))}
                      </>
                    )}
                  </PopoverPanel>
                </Popover>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";

type NavDropdownItem = {
  slug: string;
  title: string;
};

type NavDropdownProps = {
  label: string;
  href: string;
  allLabel: string;
  items: NavDropdownItem[];
};

export function NavDropdown({ label, href, allLabel, items }: NavDropdownProps) {
  const pathname = usePathname();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const current = pathname === href || pathname.startsWith(`${href}/`);

  const close = () => setOpenPath(null);
  const show = () => setOpenPath(pathname);
  const toggle = () =>
    setOpenPath((currentPath) => (currentPath === pathname ? null : pathname));

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpenPath(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="nav-dropdown" onMouseEnter={show} onMouseLeave={close}>
      <button
        type="button"
        className="nav-link nav-dropdown__button text-sm"
        aria-expanded={open}
        aria-controls={menuId}
        aria-current={current ? "page" : undefined}
        onClick={toggle}
      >
        {label}
        <Icon name="chevron-right" className="nav-dropdown__chevron size-3.5" />
      </button>
      <div id={menuId} className="nav-dropdown__panel" hidden={!open}>
        <ul>
          {items.map((item) => (
            <li key={item.slug}>
              <Link href={`${href}/${item.slug}`} onClick={close}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={href} className="nav-dropdown__all" onClick={close}>
          {allLabel}
          <Icon name="arrow-right" className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}

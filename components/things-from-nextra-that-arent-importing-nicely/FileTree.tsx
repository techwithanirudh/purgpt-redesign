import cn from "clsx";
import { createContext, memo, useCallback, useContext, useState } from "react";
import type { ReactElement, ReactNode } from "react";

const ctx = createContext(0);

function useIndent() {
  return useContext(ctx);
}

interface FolderProps {
  name: string;
  label?: ReactElement;
  open?: boolean;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  children: ReactNode;
}

interface FileProps {
  name: string;
  label?: ReactElement;
  active?: boolean;
  className?: string;
}

interface TreeProps {
  name: string;
  label?: ReactElement;
  active?: boolean;
}

function Tree({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}): ReactElement {
  return (
    <div
      className={cn(
        "nextra-filetree nx-mt-6 nx-select-none nx-text-sm nx-text-gray-800 dark:nx-text-gray-300",
        "nx-not-prose" // for nextra-theme-blog
      )}
    >
      <div
        className={cn(
          "nx-inline-block nx-rounded-lg nx-border nx-px-4 nx-py-2 dark:nx-border-neutral-800",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

function Ident(): ReactElement {
  const length = useIndent();
  return (
    <>
      {Array.from({ length }, (_, i) => (
        <span className="nx-w-5" key={i} />
      ))}
    </>
  );
}

const Folder = memo<FolderProps>(
  ({ label, name, open, children, defaultOpen = false, onToggle }) => {
    const indent = useIndent();
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggle = useCallback(() => {
      onToggle?.(!isOpen);
      setIsOpen(!isOpen);
    }, [isOpen, onToggle]);

    const isFolderOpen = open === undefined ? isOpen : open;

    return (
      <li className="nx-flex nx-list-none nx-flex-col">
        <button
          onClick={toggle}
          title={name}
          className="nx-inline-flex nx-cursor-pointer nx-items-center nx-py-1 hover:nx-opacity-60"
        >
          <Ident />
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isFolderOpen
                  ? "M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2Z"
                  : "M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z"
              }
            />
          </svg>
          <span className="nx-ml-1">{label ?? name}</span>
        </button>
        {isFolderOpen && (
          <ul>
            <ctx.Provider value={indent + 1}>{children}</ctx.Provider>
          </ul>
        )}
      </li>
    );
  }
);
Folder.displayName = "Folder";

const File = memo<FileProps>(({ label, name, active, className }) => (
  <li
    className={cn(
      "nx-flex nx-list-none",
      active && "nx-text-primary-600 contrast-more:nx-underline",
      className
    )}
  >
    <span className="nx-inline-flex nx-cursor-default nx-items-center nx-py-1">
      <Ident />
      <svg width="1em" height="1em" viewBox="0 0 24 24">
        {name.endsWith(".mp3") ? (
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
          />
        ) : (
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"
          />
        )}
      </svg>
      <span className="nx-ml-1">{label ?? name}</span>
    </span>
  </li>
));
File.displayName = "File";

export const FileTree = Object.assign(Tree, { Folder, File });

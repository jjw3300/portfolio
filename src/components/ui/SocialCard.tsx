import React from "react";

interface SocialCardProps {
  href: string;
  icon?: string | React.ReactNode;
  label: string;
  subLabel?: string;
  isGithub?: boolean;
  className?: string;
}

const SocialCard: React.FC<SocialCardProps> = ({
  href,
  icon,
  label,
  subLabel,
  isGithub,
  className = "",
}) => {
  const isImage = typeof icon === "string";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] shadow-sm group ${className}`}
    >
      {icon && (
        <div className="w-6 h-6 md:w-7 md:h-7 relative flex items-center justify-start origin-top-left transition-transform group-hover:scale-110 mb-2">
          {isImage ? (
            <img
              src={icon as string}
              alt={label}
              className={`w-full h-full object-contain ${
                isGithub ? "dark:invert" : ""
              }`}
            />
          ) : (
            <div className="text-zinc-900 dark:text-white">{icon}</div>
          )}
        </div>
      )}
      <div className={icon ? "mt-auto" : "flex items-center h-full"}>
        <div>
          <div className="text-sm md:text-base font-bold text-zinc-900 dark:text-white leading-tight truncate">
            {label}
          </div>
          {subLabel && (
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1 truncate">
              {subLabel}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default SocialCard;

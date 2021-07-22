import { SecondaryButton } from "./ui/button";

import { ClipboardCopyIcon } from "@heroicons/react/outline";

export function OpenMapButton({ address }: { address: string }) {
  function btnClick(e: React.FormEvent<HTMLButtonElement>) {
    e.currentTarget.blur();
    window.open(`https://www.google.com/maps/place/${address}`);
  }

  return (
    <div className="flex items-start">
      <SecondaryButton
        aria-label="Buka Map"
        className="relative z-10"
        icon={ClipboardCopyIcon}
        onClick={btnClick}
        size="xs"
        type="button"
      >
        Buka Map
      </SecondaryButton>
    </div>
  );
}

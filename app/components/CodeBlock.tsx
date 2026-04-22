"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative group bg-[#f5f5f5] border border-neutral-200 rounded-xl p-5 font-mono text-[13px] text-neutral-800 shadow-sm">
      <div className="overflow-x-auto">
        <pre className="whitespace-pre leading-relaxed">{code}</pre>
      </div>
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 p-2 rounded-lg bg-white border border-neutral-200 hover:border-black transition-all duration-200 text-neutral-500 hover:text-black shadow-sm"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-600" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}

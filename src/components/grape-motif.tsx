import type { SVGProps } from "react";

export function GrapeMotif({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={`grape-motif ${className}`.trim()}
      viewBox="0 0 180 230"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M92 65c-4-23 3-43 21-59" stroke="#337A51" strokeWidth="10" strokeLinecap="round" />
      <path d="M103 43c17-25 47-28 66-9-16 24-42 31-66 9Z" fill="#5B9C57" />
      <path d="M86 52C67 25 38 23 20 42c18 22 42 27 66 10Z" fill="#73AC63" />

      <g fill="#A73543">
        <circle cx="66" cy="82" r="22" />
        <circle cx="94" cy="78" r="22" />
        <circle cx="121" cy="85" r="22" />
        <circle cx="53" cy="111" r="22" />
        <circle cx="81" cy="108" r="22" />
        <circle cx="109" cy="111" r="22" />
        <circle cx="135" cy="116" r="22" />
        <circle cx="66" cy="139" r="22" />
        <circle cx="95" cy="138" r="22" />
        <circle cx="121" cy="143" r="22" />
        <circle cx="81" cy="168" r="22" />
        <circle cx="108" cy="171" r="22" />
        <circle cx="95" cy="199" r="22" />
      </g>
      <g fill="#174A78">
        <circle cx="66" cy="82" r="17" />
        <circle cx="94" cy="78" r="17" />
        <circle cx="121" cy="85" r="17" />
        <circle cx="53" cy="111" r="17" />
        <circle cx="81" cy="108" r="17" />
        <circle cx="109" cy="111" r="17" />
        <circle cx="135" cy="116" r="17" />
        <circle cx="66" cy="139" r="17" />
        <circle cx="95" cy="138" r="17" />
        <circle cx="121" cy="143" r="17" />
        <circle cx="81" cy="168" r="17" />
        <circle cx="108" cy="171" r="17" />
        <circle cx="95" cy="199" r="17" />
      </g>
      <g fill="#FFFFFF" opacity=".28">
        <circle cx="60" cy="76" r="4" />
        <circle cx="88" cy="72" r="4" />
        <circle cx="47" cy="105" r="4" />
        <circle cx="75" cy="102" r="4" />
        <circle cx="89" cy="132" r="4" />
      </g>
    </svg>
  );
}

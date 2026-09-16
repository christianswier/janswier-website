import { GrapeMotif } from "@/components/grape-motif";

export function ProduceIllustration() {
  return (
    <svg className="produce-illustration" viewBox="0 0 560 460" fill="none" aria-hidden="true">
      <path d="M67 267C25 209 54 103 136 71c69-27 105 8 164-20 77-36 174 5 195 89 22 87-18 141-1 200 11 41-34 78-90 66-77-17-102 27-185 10-78-15-105-85-152-149Z" fill="#FFF3D6" />

      <g className="illustration-leaves">
        <path d="M269 133c-17-42 9-75 50-81 3 40-9 71-50 81Z" fill="#4B9366" />
        <path d="M276 134c34-39 78-37 105-3-34 27-70 33-105 3Z" fill="#73AC63" />
        <path d="M300 121c6-26 23-43 46-57" stroke="#337A51" strokeWidth="8" strokeLinecap="round" />
      </g>

      <g className="illustration-produce">
        <path d="M118 198c-18-56 51-91 92-54 39-39 109-7 94 50-16 62-86 111-93 115-9-4-75-49-93-111Z" fill="#C9404F" />
        <path d="M208 142c-2-21 7-40 26-52" stroke="#337A51" strokeWidth="11" strokeLinecap="round" />
        <path d="M211 122c-30-24-61-13-73 17 32 8 57 3 73-17Z" fill="#5B9C57" />
        <circle cx="378" cy="208" r="83" fill="#F2A634" />
        <path d="M365 127c5-24 20-40 43-49" stroke="#337A51" strokeWidth="10" strokeLinecap="round" />
        <path d="M388 111c20-22 45-20 64 0-20 18-43 20-64 0Z" fill="#6DA85D" />
        <path d="M314 236c-5-63 71-90 111-48 42 45 5 121-55 116-31-2-53-30-56-68Z" fill="#E45842" />
        <path d="M362 168c2-22 13-39 34-49" stroke="#337A51" strokeWidth="9" strokeLinecap="round" />
        <path d="M361 181c-16-8-28-22-32-39 20-3 36 4 46 22 5-17 18-29 37-34 4 21-2 39-18 53" fill="#4E945C" />
        <path d="M108 265c-16-37 9-82 48-93 39-11 78 17 81 58 4 47-47 95-65 109-23-11-49-40-64-74Z" fill="#86B84F" />
        <path d="M166 177c-1-24 11-42 34-52" stroke="#337A51" strokeWidth="9" strokeLinecap="round" />
        <path d="M123 243c-13-18-12-40 3-56 20 15 27 35 17 58" fill="#A8CC68" />
      </g>

      <g className="illustration-carrots">
        <path d="M408 266 368 380c-5 14 12 25 23 15l75-93-58-36Z" fill="#F4863D" />
        <path d="M423 275c16-39 44-55 78-48-7 32-31 51-78 48Z" fill="#4E945C" />
        <path d="M424 276c-4-39 15-66 47-79 11 33-2 61-47 79Z" fill="#73AC63" />
        <path d="M429 278c28-25 58-25 85-3-24 24-53 28-85 3Z" fill="#337A51" />
      </g>

      <GrapeMotif className="crate-grape-motif" x="197" y="128" width="170" height="217" />

      <g className="illustration-crate">
        <path d="M82 287h392l-30 129H112L82 287Z" fill="#2F628B" />
        <path d="M96 317h365M103 352h350M110 386h335" stroke="#5F8CB0" strokeWidth="12" />
        <path d="M82 287h392" stroke="#163F65" strokeWidth="18" strokeLinecap="round" />
        <path d="M120 297 136 408M436 297l-20 111" stroke="#163F65" strokeWidth="12" strokeLinecap="round" />
      </g>

      <g fill="#F4C450">
        <path d="m63 129 7 18 18 7-18 7-7 18-7-18-18-7 18-7 7-18Z" />
        <path d="m491 103 5 12 12 5-12 5-5 12-5-12-12-5 12-5 5-12Z" />
      </g>
    </svg>
  );
}

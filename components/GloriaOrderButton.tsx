const CUID = process.env.NEXT_PUBLIC_GLORIA_CUID
const RUID = process.env.NEXT_PUBLIC_GLORIA_RUID

export default function GloriaOrderButton({ className }: { className?: string }) {
  return (
    <span
      className={`glf-button ${className}`}
      data-glf-cuid={CUID}
      data-glf-ruid={RUID}
    >
      See MENU & Order
    </span>
  )
}
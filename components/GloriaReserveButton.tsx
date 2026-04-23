export default function GloriaReserveButton({ className }: { className?: string }) {
  return (
    <span
      className="glf-button glf-button-booking"
      data-glf-cuid={process.env.NEXT_PUBLIC_GLORIA_CUID}
      data-glf-ruid={process.env.NEXT_PUBLIC_GLORIA_RUID}
    >
      Reserve a Table
    </span>
  )
}

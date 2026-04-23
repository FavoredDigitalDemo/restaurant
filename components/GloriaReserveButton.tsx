export default function GloriaReserveButton({ className }: { className?: string }) {
  return (
    <span
      className="glf-button reservation"
      data-glf-cuid={process.env.NEXT_PUBLIC_GLORIA_CUID}
      data-glf-ruid={process.env.NEXT_PUBLIC_GLORIA_RUID}
      data-glf-reservation="true"
    >
      Reserve a Table
    </span>
  )
}

"use client"

const WHATSAPP_NUMBER = "50369207547"
const WHATSAPP_MESSAGE = "Somos parejas y nos gustaría saber más sobre SwingerSV"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 sm:h-8 sm:w-8"
      >
        <path
          d="M16.004 2.667A13.26 13.26 0 0 0 2.73 15.94a13.18 13.18 0 0 0 1.796 6.629L2.667 29.333l6.982-1.832A13.27 13.27 0 0 0 16.004 29.333 13.334 13.334 0 1 0 16.004 2.667Zm0 24.29a11.02 11.02 0 0 1-5.608-1.534l-.403-.239-4.173 1.094 1.114-4.073-.263-.418a10.95 10.95 0 0 1-1.684-5.847 11.018 11.018 0 1 1 11.017 11.018Z"
          fill="#fff"
        />
        <path
          d="M22.86 18.896c-.374-.188-2.215-1.093-2.559-1.218-.344-.125-.594-.188-.844.188-.25.374-.969 1.218-1.188 1.468-.218.25-.437.28-.812.094-.374-.188-1.58-.583-3.01-1.857-1.113-.991-1.864-2.215-2.083-2.59-.219-.374-.023-.576.164-.763.169-.168.375-.437.562-.656.188-.218.25-.374.375-.624.125-.25.063-.468-.031-.656-.094-.188-.844-2.034-1.156-2.784-.305-.731-.614-.632-.844-.643-.218-.01-.468-.013-.718-.013s-.656.094-1 .468c-.344.375-1.312 1.282-1.312 3.126s1.343 3.626 1.531 3.876c.187.25 2.644 4.036 6.406 5.66.895.386 1.593.616 2.138.789.898.286 1.715.246 2.361.149.72-.108 2.216-.906 2.529-1.781.313-.875.313-1.625.219-1.781-.094-.157-.344-.25-.719-.438Z"
          fill="#fff"
        />
      </svg>
    </a>
  )
}

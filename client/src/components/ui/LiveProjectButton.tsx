interface LiveProjectButtonProps {
  href: string
  label?: string
}

export default function LiveProjectButton({ href, label = 'Live Project' }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
        font-medium uppercase tracking-widest cursor-pointer
        px-5 py-2 sm:px-10 sm:py-3.5
        text-xs sm:text-base
        transition-colors duration-200 hover:bg-[#D7E2EA]/10"
    >
      {label}
    </a>
  )
}

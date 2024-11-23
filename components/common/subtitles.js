import { TYPO_STYLES, Typography } from "./typography"

export function Subtitles({ children }) {
  return (
    <div className="flex items-center gap-4">
      <Typography
        tag={"h3"}
        size={TYPO_STYLES.SIZE["2XL"]}
        family={TYPO_STYLES.FAMILY.CORN}
        color={TYPO_STYLES.COLOR.PRIMARY}
        others={"flex-shrink-0"}
      >
        {children}
      </Typography>
      <div className="h-[1px] w-full bg-primary"></div>
    </div>
  )
}

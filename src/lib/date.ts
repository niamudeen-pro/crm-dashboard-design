import { LOCALES } from "@/constants";

/**
 * Formats a Date object into a short, human-readable string based on provided locale and options.
 * Defaults to "en-IN" locale and "DD MMM YYYY" format.
 * Returns a fallback string if date is invalid or missing.
 *
 * @param props - Object containing date, locale, and options.
 * @returns Formatted date string or fallback "Pick a date".
 */

type FormatShortDateProps = {
    date?: Date;
    locale?: string;
    options?: Intl.DateTimeFormatOptions;
}

export function formatShortDate({
    date,
    locale = LOCALES.INDIA,
    options = { day: "numeric", month: "short", year: "numeric" },
}: FormatShortDateProps): string {

    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return "Pick a date";
    }
    return date.toLocaleDateString(locale, options);
}

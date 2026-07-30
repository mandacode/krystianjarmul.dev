// First paid engineering role (Junior Python Developer). Everything that quotes
// "N years of experience" derives from this date so the copy never goes stale.
const CAREER_START = Date.UTC(2020, 3, 1);

const MS_PER_YEAR = 365.2425 * 24 * 60 * 60 * 1000;

export function experienceYears(now: Date = new Date()): number {
  return Math.max(1, Math.floor((now.getTime() - CAREER_START) / MS_PER_YEAR));
}

// Polish takes "lata" for counts ending in 2-4, except the 12-14 teens, and "lat" otherwise.
export function plYears(n: number): string {
  const last = n % 10;
  const lastTwo = n % 100;
  const lata = last >= 2 && last <= 4 && !(lastTwo >= 12 && lastTwo <= 14);
  return `${n} ${lata ? "lata" : "lat"}`;
}

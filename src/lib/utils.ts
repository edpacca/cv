export function stringList(strings: string[]) {
    return `{${strings.join(", ").trimEnd()}}`;
}
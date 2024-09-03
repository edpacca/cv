export function stringList(strings: string[], charsBefore: string = "", charsAfter: string = "") {
    return `${(`${charsBefore} ${strings.join(", ").trimEnd()} ${charsAfter}`).trimStart()}`;
}
Prism.languages.dba = {
    comment: { pattern: /#.*$/m, greedy: true },
    string: [
        { pattern: /'[^']+'/, greedy: true },
        { pattern: /"[^"]+"/, greedy: true },
    ],
    constant: { pattern: /[<][^>]+[>]/, greedy: true },
    builtin: /[<]\d+[>]|@|nondet|undef|bin|dec|hex|ascii|c string/,
    keyword: /\b(?:starting|from|replace|by|hook|with|end|if|then|else|for|in|to|do|case|is|assert|assume|return|reach|such|that|cut|halt|at|as|load|section|sections|print)\b/,
    boolean: { pattern: /\b(:?true|false)\b/, alias: 'number' },
    number: /\b0x[\da-f]+\b|\b0b[01]+\b|\b\d+\b/i,
    operators: [
        /:=/, /=/, /</, />/, /<=/, />=/,
        /<u/, /<s/, />u/, />s/, /<=u/, /<=s/, />=u/, />=s/,
        /\+/, /-/, /\*/, /\//, /%/, /:/, /::/,
        /\/u/, /\/s/, /%u/, /%s/,
    ],
    punctuation: /\(\)\[\],/,
}
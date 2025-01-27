const palindromeChecker = (str: string): boolean => {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    const reversed = cleaned.split('').reverse().join('')
    return cleaned === reversed

}

export default palindromeChecker;
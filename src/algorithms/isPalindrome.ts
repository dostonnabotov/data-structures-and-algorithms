export default function isPalindrome(str: string): boolean {
  const regex = /[\W_]/g;
  str = str.toLowerCase().replace(regex, "");

  for (let i = 0, len = str.length; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) return false;
  }

  return true;
}

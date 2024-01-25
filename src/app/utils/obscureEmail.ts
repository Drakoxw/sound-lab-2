// TODO : llevar a pipes
export function obscureEmail(value: string = ''): string {
  if (value) {
    const [name, domain] = value.split('@')
    const letters = `${name[0]}${name[1]}${name[2]}`
    return `${letters}${new Array(name.length - letters.length).join(
      '*'
    )}@${domain}`
  }

  return ''
}

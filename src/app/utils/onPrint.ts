
function onPrint(url: string): Window | null | undefined | void {
  if (!url) return undefined

  return window.open(
    url,
    'file',
    'scrollbars=YES,width=800,height=600,left=30,top=2,resizable=yes'
  )
}

export { onPrint }

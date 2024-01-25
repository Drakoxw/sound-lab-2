type Props = {
  base64: string
  fileName?: string
  contentType: 'application/pdf'
}

function downloadBase64File(props: Props): void {
  const {
    base64,
    contentType = 'application/pdf',
    fileName
  } = props

  const element = window.document.createElement('a')
  element.href = `data:${contentType};base64,${base64}`
  element.download = fileName ?? 'default'
  return element.click()
}

export { downloadBase64File }

import { PDFDocument, StandardFonts } from 'pdf-lib'
import pdf from "../../assets/certificate.pdf"

const certificatePDF = async ( holderName, holderNumber, holderCourse, holderCourseDuration, holderFrom, holderTill) => {
  // Fetch an existing PDF document
  // const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
  const existingPdfBytes = await fetch(pdf).then(res => res.arrayBuffer())
  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes)

  // Embed the Helvetica font
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

  // Get the first page of the document
  const pages = pdfDoc.getPages()
  const firstPage = pages[0]

  // Get the width and height of the first page
  const { width, height } = firstPage.getSize()
  
  
  // holder Number
  firstPage.drawText(holderNumber, {

    x: 600,
    y: height / 2 + 109,
    font: helveticaFont,
    size: 13,
  })

  // holder Name.
  const textSizeHolderName = 25;
  const textWidthHolderName = helveticaFont.widthOfTextAtSize(holderName, textSizeHolderName);

  firstPage.drawText(holderName, {

    x: firstPage.getWidth() / 2 - textWidthHolderName / 2,
    y: height / 2 + 40,
    font: helveticaFont,
    size: textSizeHolderName,
  })

  // holder course name 
  const textSizeHolderCourse = 22;
  const textWidthHolderCourse = helveticaFont.widthOfTextAtSize(holderCourse, textSizeHolderCourse);

  firstPage.drawText(holderCourse, {

    x: firstPage.getWidth() / 2 - textWidthHolderCourse / 2,
    y: height / 2 + -33,
    font: helveticaFont,
    size: textSizeHolderCourse,
  })

  // holder course Duration
  firstPage.drawText(holderCourseDuration, {

    x: 543,
    y: height / 2 + -70,
    font: helveticaFont,
    size: 22,
  })

  // holder from
  firstPage.drawText(holderTill, {

    x: 490,
    y: height / 2 + -110,
    font: helveticaFont,
    size: 18,
  })
  // holder till
  firstPage.drawText(holderFrom, {

    x: 355,
    y: height / 2 + -110,
    font: helveticaFont,
    size: 18,
  })





  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save()

  // Trigger the browser to download the PDF document

  var blob = new Blob([pdfBytes], { type: "application/pdf" });
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  var fileName = "SMIT-CERTIFICATE";
  link.download = fileName;
  link.click();
  return (
    <iframe src={pdfBytes} frameborder="0"></iframe>
  )
}
export default certificatePDF;
import { PDFDocument, StandardFonts, rgb, degrees } from 'pdf-lib'
import pdf from "../../assets/idCardTemplate.pdf"
const createPdfDownload = async (name, fatherName, course, rollNo, cnic) => {
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

  // Draw a string of text diagonally across the first page


  //*******************************************ID CARD Front SIDE ******************************************** */
  // Student Name.
  firstPage.drawText(name, {

    x: 115,
    y: height / 2 + 209,
    font: helveticaFont,
    size: 10,
  })

  // student Course
  firstPage.drawText(course, {

    x: 123,
    y: height / 2 + 184,
    font: helveticaFont,
    size: 10,
  })

  // Student Roll No.
  firstPage.drawText(rollNo, {

    x: 123,
    y: height / 2 + 159,
    font: helveticaFont,
    size: 10,
  })


  //*******************************************ID CARD BACK SIDE ******************************************** */
  //  Name 
  firstPage.drawText(name, {
    x: 399,
    y: height / 2 + 355,
    font: helveticaFont,
    size: 8,
  })

  // father name 
  firstPage.drawText(fatherName, {
    x: 422,
    y: height / 2 + 338,
    font: helveticaFont,
    size: 8,
  })

  // cnic 
  firstPage.drawText(cnic, {
    x: 396,
    y: height / 2 + 321,
    font: helveticaFont,
    size: 8,
  })

  // course name 
  firstPage.drawText(course, {
    x: 400,
    y: height / 2 + 304,
    font: helveticaFont,
    size: 8,
  })
  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save()

  // Trigger the browser to download the PDF document

  var blob = new Blob([pdfBytes], { type: "application/pdf" });
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  var fileName = "SMIT-ID";
  link.download = fileName;
  link.click();
  return (
    <iframe src={pdfBytes} frameborder="0"></iframe>
  )
}
export default createPdfDownload;
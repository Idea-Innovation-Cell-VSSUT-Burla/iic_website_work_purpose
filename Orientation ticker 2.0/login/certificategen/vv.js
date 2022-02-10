const userName = sessionStorage.getItem("certiname");
const submitBtn = document.getElementById("submitBtn");
var textSize=30;

const { PDFDocument, rgb, degrees } = PDFLib;




submitBtn.addEventListener("click", () => {
  const val = userName;

  //check if the text is empty or not
 
    // console.log(val);
    generatePDF(val);

});


const generatePDF = async (name) => {
  
  const existingPdfBytes = await fetch("./Certificate.pdf").then((res) =>
    res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  

  //get font
  const fontBytes = await fetch("./LEMONMILK-Bold.otf").then((res) =>
    res.arrayBuffer()
  );

  

  // Embed our custom font in the document
  const LemonMilkfont = await pdfDoc.embedFont(fontBytes);
  
  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  
  textWidth = LemonMilkfont.widthOfTextAtSize(name, textSize);
  console.log(textWidth)
  if(textWidth>448){
    textSize=28;
    textWidth = LemonMilkfont.widthOfTextAtSize(name, textSize);
    console.log(textWidth)
    if(textWidth>448){
      textSize=26
      textWidth = LemonMilkfont.widthOfTextAtSize(name, textSize);
      console.log(textWidth)
      if(textWidth>448){
        textSize=24
        textWidth = LemonMilkfont.widthOfTextAtSize(name, textSize);
        console.log(textWidth)
        if(textWidth>448){
          textSize=22
          textWidth = LemonMilkfont.widthOfTextAtSize(name, textSize);
          console.log(textWidth)
          if(textWidth>448){
            textSize=20
            textWidth = LemonMilkfont.widthOfTextAtSize(name, textSize);
            console.log(textWidth)
            if(textWidth>448){
              textSize=18
              textWidth = LemonMilkfont.widthOfTextAtSize(name, textSize);
              console.log(textWidth)
              if(textWidth>448){
                textSize=16
                textWidth = LemonMilkfont.widthOfTextAtSize(name, textSize);
                console.log(textWidth)
                if(textWidth>448){
                  textSize=14
                  textWidth = LemonMilkfont.widthOfTextAtSize(name, textSize);
                  console.log(textWidth)
                  if(textWidth>448){
                    textSize=12
                    textWidth = LemonMilkfont.widthOfTextAtSize(name, textSize);
                    console.log(textWidth)
                    if(textWidth>448){
                      textSize=10
                      textWidth = LemonMilkfont.widthOfTextAtSize(name, textSize);
                      console.log(textWidth)
                      
                  }  
                }
              }
                
            }
            
              
          }

        }
      }
    }

  }
}



  // Get the width and height of the first page
  
  const {width, height } = firstPage.getSize();
console.log(width,height);
var w= width;
console.log(textWidth,"cvvvvvvv")
cursor=327-(textWidth/2)


  // Draw a string of text diagonally across the first page
  //198
  firstPage.drawText(name, {
    x: cursor,
    y: 175,
    size: textSize,
    font: LemonMilkfont,
    color: rgb(1,1,1),
  });
  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  console.log("Done creating");

  // this was for creating uri and showing in iframe

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("pdf").src = pdfDataUri;

  var file = new File(
    [pdfBytes],
    "Range Over Rocketry Certificate.pdf",
    {
      type: "application/pdf;charset=utf-8",
    }
  );
 saveAs(file);
};

// init();

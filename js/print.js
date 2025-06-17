const printContract = (contractData) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.src = "https://suqia.netlify.app/media/c.png";

  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = "#000";
    ctx.font = "500 22px Segoe UI";

    ctx.fillText(contractData.date.day, 1364, 367);
    ctx.fillText(contractData.date.month, 1284, 367);
    ctx.fillText(contractData.date.year, 1162, 367);
    ctx.fillText(contractData.contractNumber, 261, 155);
    ctx.fillText(contractData.client.name, 950, 527);
    ctx.fillText(contractData.client.phone, 350, 527);
    ctx.fillText(contractData.client.email, 900, 585);

    if (contractData.receiveReport.hand_to_hand) ctx.fillText("✔", 1200, 650);
    if (contractData.receiveReport.email) ctx.fillText("✔", 1054, 650);
    if (contractData.receiveReport.whatsapp) ctx.fillText("✔", 856, 650);
    if (contractData.receiveReport.mail) ctx.fillText("✔", 688, 650);

    ctx.fillText(contractData.project.name, 950, 787);
    ctx.fillText(contractData.project.notes, 350, 787);
    ctx.fillText(contractData.project.details, 550, 845);
    ctx.fillText(contractData.project.location, 950, 910);
    ctx.fillText(contractData.project.number, 950, 1080);
    ctx.fillText(contractData.receipt.number, 350, 1080);
    ctx.fillText(contractData.project.cost, 950, 1150);
    ctx.fillText(contractData.project.duration, 350, 1150);
    ctx.fillText(contractData.signature.clientName, 350, 1540);

    document.body.appendChild(canvas);

    setTimeout(() => {
      const link = document.createElement("a");
      link.download = `contract-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      // Clean up
      document.body.removeChild(canvas);
    }, 100);
  };
};

const printReceipt = (receiptData) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.src = "https://suqia.netlify.app/media/r.png"; 

  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = "#000";
    ctx.font = "500 27px Segoe UI";

    // Date
    ctx.fillText(receiptData.date.day, 1360, 385);
    ctx.fillText(receiptData.date.month, 1280, 385);
    ctx.fillText(receiptData.date.year, 1155, 385);

    // Basic data
    ctx.fillText(receiptData.amountText, 1202, 445); 
    ctx.fillText(receiptData.receiptNumber, 221, 365); 

    ctx.fillText(receiptData.client_name, 600, 535); 
    ctx.fillText(receiptData.amount, 700, 616); 

    // Receive method
    if (receiptData.receiveMethod.cash) ctx.fillText("✔", 1450, 717);
    if (receiptData.receiveMethod.check) ctx.fillText("✔", 1345, 717);

    // For
    ctx.fillText(receiptData.for, 500, 800); // Purpose of payment

    document.body.appendChild(canvas);

    setTimeout(() => {
      const link = document.createElement("a");
      link.download = `receipt-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      document.body.removeChild(canvas);
    }, 100);
  };
};

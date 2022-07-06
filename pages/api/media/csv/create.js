const documentsFromCSV = req?.body?.csv;

for (let i = 0; i < documentsFromCSV.length; i += 1) {
  Documents.insertOne({
    _id: generateId(),
    ...(documentsFromCSV[i] || {}),
  });
}

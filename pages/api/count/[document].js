const { document } = req.query;
db.collection(document).aggregate([{ $count: `${document}_count` }]);

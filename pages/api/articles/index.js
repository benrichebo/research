import moment from "moment";
import { connectToDatabase } from "../../../lib/mongodb";

export default async (req, res) => {
  if (req.method == "GET") {
    try {
      const { db } = await connectToDatabase();

      const articles = await db
        .collection("articles")
        .find(
          {},
          { projection: { title: 1, category: 1, image: 1, createdAt: 1 } }
        )
        .toArray();

      console.log("articles", articles);

      const date = moment(articles[0].createdAt, "YYYYMMDD").fromNow();
      console.log(date);

      let finalArticles = [];
      for (let i = 0; i < articles.length; i++) {
        const article = articles[i];

        //calculate posted at
        const date = article?.createdAt?.slice(0, 10).split("-");
        const fromNow = moment(date, "YYYYMMDD").fromNow();
        finalArticles.push({
          ...article,
          createdAt: fromNow,
        });
      }

      console.log(finalArticles);

      if (finalArticles?.length >= 0) {
        res.status(200).json(finalArticles);
      } else {
        res.status(400).json({ msg: "There are no articles" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal server error" });
    }
  }
};

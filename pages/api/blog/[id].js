// "/api/blog/:id"
import { getBlog, updateBlog, destroyBlog } from "../../../utils/actions";

export default async function (req, res) {

    const id = req.query.id

    try {
      switch (req.method) {
        case "GET":
          res.json(await getBlog(id));
          break;
  
        case "PUT":
          res.json(await updateBlog(id, req.body));
          break;

        case "DELETE":
          res.json(await destroyBlog(id, req.body));
          break;
  
        default:
          res.status(404).send("NO RESPONSE FOR THAT METHOD");
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  }
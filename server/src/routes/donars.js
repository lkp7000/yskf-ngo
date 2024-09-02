import * as donarController from "@/controllers/donar";
import { Router } from "express";

const router = Router();
router.route("/get-donar-list").get(donarController.getDonarList);

router.route("/create-user").post(donarController.register);

export default router;

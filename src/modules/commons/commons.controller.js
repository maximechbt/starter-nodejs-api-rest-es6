import {version} from "../../../package";

export default class CommonsController {
  static showVersion(req, res) {
        res.json({
            version
        })
    }
}

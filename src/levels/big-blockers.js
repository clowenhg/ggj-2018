import Line from "../shapes/line";
import Vector from "../shapes/vector";
import Blocker from "../shapes/blocker";
import Rectangle from "../shapes/rectangle";
import Collector from "../shapes/collector";
import Circle from "../shapes/circle";
import Mirror from "../shapes/mirror";

const BigBlockers = {
    emitters: [
        new Line(new Vector(1, 300), new Vector(2, 300), '#FFFFFF', 2, 1)
    ],
    blockers: [
        new Blocker(new Rectangle(new Vector(200, 300), 30, 300, 45)),
        new Blocker(new Rectangle(new Vector(400, 150), 30, 300, 45)),
        new Blocker(new Rectangle(new Vector(400, 500), 30, 300, 45)),
        new Blocker(new Rectangle(new Vector(600, 300), 30, 300, 45)),
    ],
    collectors: [
        new Collector(new Circle(new Vector(770, 300), 20))
    ],
    tools: [
    ],
    completed:false,
    playing:false,
}
export default BigBlockers;
/**
 * Created by beck.zhang on 6/13/2017.
 */
const Plane = require("./Plane");
class BigPlane extends Plane {
  constructor() {
    super("C919", "远程宽体客机", "中短程双发窄体民用运输机", "中国", "180", "C919客机是建设创新型国家的标志性工程，机体具有完全自主知识产权，当然大量部件是利用全球生产分工合作（减少成本）");
    this.status = "正常"
  }

  get passengersNumber() {
    return this.number || 0;
  }

  set passengersNumber(num) {
    this.number = num;
    return num;
  }

  get planeStatus() {
    return this.status;
  }
}


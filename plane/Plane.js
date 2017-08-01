/**
 * Created by beck.zhang on 6/13/2017.
 */
class Plane{
  constructor(...args){
    this.planeName = args[0];
    this.models = args[1];
    this.scientificName = args[2];
    this.belongTo = args[3];
    this.numberOfSeats = args[4];
    this.meaning = args[5];
  }
}

module.exports = Plane;
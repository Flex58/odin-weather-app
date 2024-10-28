class activeUnitObj {
  units = ["metric", "us"];

  currentUnit = this.units[0];

  getActiveUnit() {
    return this.currentUnit;
  }

  switchActiveUnit() {
    this.currentUnit == this.units[0]
      ? (this.currentUnit = this.units[1])
      : (this.currentUnit = this.units[0]);
  }
}

const activeUnit = new activeUnitObj();

export default activeUnit;

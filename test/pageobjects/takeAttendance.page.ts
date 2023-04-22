class TakeAttendancePage {
  public get doneAttendanceButton() {
    return $('~DoneAttendanceButton');
  }

  public async doneAttendance() {
    await this.doneAttendanceButton.click();
  }
}

export default new TakeAttendancePage();

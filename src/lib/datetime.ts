export class Datetime {

  getCurrentDateTime(dateSeparateSymbol: string = '-') {
    const dateTime = new Date();
    const dateDay: string = this.formatWithTwoDigits(String(dateTime.getDate()));
    const month: string = this.formatWithTwoDigits(String(dateTime.getMonth() + 1));

    const hour : string = this.formatWithTwoDigits(String(dateTime.getHours()));
    const minutes : string = this.formatWithTwoDigits(String(dateTime.getMinutes()));
    const seconds : string = this.formatWithTwoDigits(String(dateTime.getSeconds()));

    return `${dateTime.getFullYear()}${dateSeparateSymbol}${month}${dateSeparateSymbol}${dateDay} ${hour}:${minutes}:${seconds}`;
  }

  private formatWithTwoDigits(value: number | string) {
    if (+value < 10) {
      return `0${value}`;
    }
    return String(value);
  }

    /**
     * Add specific days count to select date or now date
     * @param days add days in select date
     * @param customDate Specify date if use select date
     */
  addDays(days: number, date: string, customDate: string = '') {
    let newDate = new Date(date);
    if (customDate !== '') {
      newDate = new Date(customDate);
    }
    newDate.setDate(newDate.getDate() + days);
    return date;
  }

}

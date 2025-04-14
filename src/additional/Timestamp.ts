import { ONE_DAY_IN_MS } from './CONST';

/**
 * Управляет датой. Поддерживает создание из объектов Date и number.
 */
export default class Timestamp {
  private readonly date: Date;

  private constructor(date: Date | number) {
    this.date = new Date(date);
  }

  static from(date: Date | number) {
    return new Timestamp(date);
  }

  minusDays(days = 1) {
    const different = this.date.getTime() - ONE_DAY_IN_MS * days;

    return new Timestamp(different);
  }

  plusDays(days = 1) {
    const different = this.date.getTime() + ONE_DAY_IN_MS * days;

    return new Timestamp(different);
  }

  getDate() {
    return new Date(this.date);
  }
}

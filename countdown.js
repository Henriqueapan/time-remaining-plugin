export default class Countdown {
    constructor(targetDate) {
        this.#_constructor(targetDate)
    }

    #_constructor(targetDate) {
        if (!targetDate) {
            throw new Error('targetDate cannot be null or undefined.')
        }
        else if (targetDate instanceof Date){
            this.targetDate = targetDate
        }
        else if (typeof targetDate === 'string') {
            const date = new Date(targetDate)
            if (date != 'Invalid Date') {
                this.targetDate = date
            }
            else {
                throw new Error('Invalid date String.')
            }
        }
        else throw new Error('Invalid data type.')
    }
    
    get #_targetDate() {
        return new Date(this.targetDate)
    }
    get #_currDate() {
        return new Date()
    }
    get timeDiff() {
        return this.#_targetDate.getTime() - this.#_currDate.getTime()
    }
    get years() {
        return Math.trunc(this.timeDiff / (365 * 3600 * 24 * 1000))
    }
    get months() {
        const _monthNumberDiff = this.#_targetDate.getMonth() - this.#_currDate.getMonth()
        if (this.#_targetDate.getDate() < this.#_currDate.getDate()) {
            return (_monthNumberDiff - 1)
        }
        else return _monthNumberDiff
    }
    get days() {
        return Math.trunc(this.timeDiff / (3600 * 24 * 1000))
    }
    get hours() {
        return Math.trunc(this.timeDiff / (3600 * 1000))
    }
    get minutes() {
        return Math.trunc(this.timeDiff / (60 * 1000))
    }
    get seconds() {
        return Math.trunc(this.timeDiff / (1000))
    }
    get fullTime() {
        return {
            days: this.days,
            hours: this.hours%24,
            minutes: this.minutes%60,
            seconds: this.seconds%60
        }
    }
    set setTargetDate(targetDate) {
        this.#_constructor(targetDate)
    }
}
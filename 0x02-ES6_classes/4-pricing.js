import Currency from './3-currency.js';

export default class Pricing {
	constructor(amount, currency) {
		this.amount = amount;
		this.currency = currency;
	}

	/**
	 * @param {Number} amount
	 */
	set amount(amount) {
		if (typeof amount !== 'number') {
			throw new TypeError('Amount must be a number');
		}
		this._amount = amount;
	}

	get amount() {
		return this._amount;
	}

	/**
	 * @param {Currency} currency
	 */
	set currency(currency) {
		if (!(currency instanceof Currency)) {
			throw new TypeError('Currency must be instance of Currency class');
		}
		this._currency = currency;
	}

	get currency() {
		return this._currency;
	}

	/**
	 * Returns a string in the format "amount currency_name (currency_code)"
	 * @returns {String}
	 */
	displayFullPrice() {
		return `${this.amount} ${this.currency.displayFullCurrency()}`;
	}

	/**
	 * Converts the price based on a given conversion rate.
	 * @param {Number} amount
	 * @param {Number} conversionRate
	 * @returns {Number}
	 */
	static convertPrice(amount, conversionRate) {
		if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
			throw new TypeError('Amount and conversion rate must be numbers');
		}
		return amount * conversionRate;
	}
}

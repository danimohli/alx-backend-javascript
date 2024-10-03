export default class Building {
	constructor(sqft) {
		if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
			throw new Error('Class extending Building must override evacuationWarningMessage');
		}
		this._sqft = sqft;
	}

	/**
	 * Getter for sqft attribute
	 * @returns {Number} sqft
	 */
	get sqft() {
		return this._sqft;
	}
}

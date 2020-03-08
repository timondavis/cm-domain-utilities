export class IdentificationGenerator {

	public static UUID() {
		let uuid = require('uuid/v4');
		return uuid();
	}
}
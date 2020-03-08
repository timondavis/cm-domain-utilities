export interface DomainType<T> extends Function {
	new (...args: any[]) : T;
}

export class DomainConverter {

	public static hydrateModelFromData<T>(domain: DomainType<T>, data: any): T {
		const instance = Object.create(domain.prototype);
		instance.state = data;
		return instance as T;
	}

	public static hydrateModelStateFromData<T>(domain: any) {
		return domain.state as T;
	}

}


export interface ISerializableModel {}

export abstract class SerializableModel {
	protected state: ISerializableModel;
	public toState() : ISerializableModel {
		return this.state;
	}
	public stringify(): string {
		return JSON.stringify(this.toState());
	}
}

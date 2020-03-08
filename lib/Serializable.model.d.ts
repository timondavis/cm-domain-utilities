export interface ISerializableModel {
}
export declare abstract class SerializableModel {
    protected state: ISerializableModel;
    toState(): ISerializableModel;
    stringify(): string;
}

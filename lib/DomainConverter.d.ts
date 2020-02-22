export interface DomainType<T> extends Function {
    new (...args: any[]): T;
}
export declare class DomainConverter {
    static hydrateModelFromData<T>(domain: DomainType<T>, data: any): T;
    static hydrateModelStateFromData<T>(domain: any): T;
}

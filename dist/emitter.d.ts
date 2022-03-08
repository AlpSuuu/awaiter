interface Data {
    status: string;
    target: any;
    date: (Date | string);
    hitch: string;
}
declare class Emitter {
    private functions;
    constructor();
    private getFuncs;
    private pushFuncs;
    call(caller: Function): void;
    emit(data: Data): void;
}
declare let _Emitter_: (Emitter);
export = _Emitter_;

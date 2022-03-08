interface Data {
    status : string;
    target : any;
    date : (Date | string);
    hitch : string;
}

class Emitter {
    private functions:Array<Function>;
    constructor() {
        this.functions = [];
    }
 
    private getFuncs() {
        return this.functions;
    }

    private pushFuncs(func : Function) {
        this.functions.push(func)
    }
    
    public call(caller:Function) {
        this.pushFuncs(caller);
    }
  
    public emit(data:Data) {
        function emit(callback:Function) : void {
            callback.call(void 0 , data)
        }
    
        this.getFuncs().forEach(emit);
    }
}
let _Emitter_:(Emitter) = new Emitter()
export = _Emitter_ 
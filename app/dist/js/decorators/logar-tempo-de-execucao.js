export function logarTempoDeExecucao() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function () {
            const t1 = performance.now();
            const retorno = metodoOriginal();
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execuxao: ${(t2 - t1) / 1000}`);
            retorno;
        };
        return descriptor;
    };
}

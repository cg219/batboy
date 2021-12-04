export function wait(ms: number) {
    return new Promise(function resolver(resolve: any) {
        setTimeout(resolve, ms);
    })
}

export default {
    vow,
    wait,
    batch
}

interface VowResponse {
    success: any;
    error: any;
}

export function batch(array: Array<any>, limit: number): Array<any> {
    return array.reduce(function reduce(acc: any, current: any, index: number) {
        if (index % limit == 0) acc.push([]);

        acc[acc.length - 1].push(current);
        return acc;
    }, [])
}

export function wait(ms: number) {
    return new Promise(function resolver(resolve: any) {
        setTimeout(resolve, ms);
    })
}

export function vow(promise: Promise<any>): Promise<VowResponse> {
    let response: VowResponse;

    return promise
        .then(function success(res: any) {
            response = { success: res, error: null };
            return response;
        })
        .catch(function error(err: Error) {
            response = { success: null, error: err };
            return response;
        });
}

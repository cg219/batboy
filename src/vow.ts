interface VowResponse {
    success: any;
    error: any;
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

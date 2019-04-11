export interface restRequestOptions {
    method: restMethodType;
    url: string;
    body?: any;
    headers?: object;
    log?: boolean;
    xhrDebug?: boolean;
}

export interface restApiOptions {
    apiRestUrl: string;
    activeLog?: boolean;
    xhrDebug?: boolean;
}

export interface restRequestError {
    statusCode: number;
    message: string;
    key: string;
    data: any
}

export type restMethodType =
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'DELETE';
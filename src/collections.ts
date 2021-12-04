function batch(array: Array<any>, limit: number): Array<any> {
    return array.reduce(function reduce(acc: any, current: any, index: number) {
        if (index % limit == 0) acc.push([]);

        acc[acc.length - 1].push(current);
        return acc;
    }, [])
}


export {
    batch
}

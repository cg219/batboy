import { wait } from './../mod.ts';
import { assert } from 'https://deno.land/std@0.117.0/testing/asserts.ts';

Deno.test({
    name: 'wait 3 seconds',
    async fn() {
        let start = Date.now();
        await wait(3000);
        let end = Date.now();

        assert(end - start >= 3000);
    }
})

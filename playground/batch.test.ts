import { batch } from './../mod.ts';
import { assert, assertEquals } from 'https://deno.land/std@0.117.0/testing/asserts.ts';

Deno.test({
    name: 'batch in couples',
    fn() {
        const array = [1, 2, 3, 4, 5];
        const results = batch(array, 2);

        assertEquals(results.length, 3);
        results.forEach(o => assert(o.length <= 2));
    }
})

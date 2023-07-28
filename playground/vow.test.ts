import { vow } from './../mod.ts';
import { assert, assertEquals } from 'https://deno.land/std@0.117.0/testing/asserts.ts';

const resolvedObject = { data: "This was Completed" }
const rejectObject = { data: "This was Rejected" }

Deno.test({
    name: 'vow resolved promise',
    async fn() {
        const promise = new Promise((resolve) => resolve(resolvedObject));
        const { success, error } = await vow(promise);

        assert(error == null);
        assertEquals(success, resolvedObject);
    }
})

Deno.test({
    name: 'vow rejected promise',
    async fn() {
        const promise = new Promise((_, reject) => reject(rejectObject));
        const { success, error } = await vow(promise);

        assert(success == null);
        assertEquals(error, rejectObject);
    }
})

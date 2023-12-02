import { expect, it } from 'vitest';
import { generateUsername, convertToSlug } from '$lib/utils';


it("should yield valid username", () => {
    expect(generateUsername())
        .toContain("user")
        .toHaveLength(9);
})

it("should yield expected slugs", () => {
    expect(convertToSlug("test")).toBe("test");
    expect(convertToSlug("test two")).toBe("test-two");
    expect(convertToSlug("TeSt ThREE")).toBe("test-three");
    expect(convertToSlug("/T)Est #%4")).toBe("test-4");
})
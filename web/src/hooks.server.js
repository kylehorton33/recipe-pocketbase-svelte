import PocketBase from 'pocketbase'

const PB_HOST = process.env.POCKETBASE_HOST || "http://localhost:8090";

export const handle = async ({ event, resolve }) => {

    event.locals.host = PB_HOST
    event.locals.pb = new PocketBase(PB_HOST);

    event.locals.pb.authStore.loadFromCookie(
        event.request.headers.get("cookie") || ""
    );

    if (event.locals.pb.authStore.isValid) {
        event.locals.user = structuredClone(event.locals.pb.authStore.model);
        event.locals.user.host = PB_HOST;
    } else {
        event.locals.user = undefined;
    }

    const response = await resolve(event);

    response.headers.set(
        "set-cookie",
        event.locals.pb.authStore.exportToCookie({ secure: false })
    );

    return response;

}
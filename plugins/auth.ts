export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        // const { $auth } = useNuxtApp()
        const userCookie = useCookie("userCookie");
        // console.log('firebase', userCookie.value);

        if (!userCookie.value) {
            return navigateTo('/admin/signin')
        }
    })
})
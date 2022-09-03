import { initializeApp } from "firebase/app";
import {
    getAuth,
} from "firebase/auth";
import { incrementPageView } from "~~/composables/useFirebase";
export default async function (req, res, next) {

    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        projectId: config.FIREBASE_PROJECT_ID,
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // console.log(req)
    let slug = req.url.split("/");
    if (slug[1] == "blog") {
        slug = slug[2];

        incrementPageView("posts", slug)

        // console.log("blog",)
    } else {
        // console.log(slug)
    }
    next();
}
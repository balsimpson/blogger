import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { addDoc, collection, getFirestore, getDocs, getDoc, doc, query, onSnapshot, writeBatch, deleteDoc, updateDoc, orderBy, DocumentData, Query } from "firebase/firestore"

export const createUser = async (email: string, password: string) => {
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credentials;
};

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);

    if (errorCode === "auth/user-not-found") {
      return "You are not authorised";
    }
    if (errorCode === "auth/wrong-password") {
      return "Wrong password";
    }
    if (errorCode === "auth/too-many-requests") {
      return "Too many requests";
    }
    if (errorCode === "auth/user-disabled") {
      return "User disabled";
    }
    if (errorCode === "auth/invalid-email") {
      return "Invalid email";
    }
    if (errorCode === "auth/email-already-in-use") {
      return "Email already in use";
    }
    if (errorCode === "auth/invalid-credential") {
      return "Invalid credential";
    }
  });
  return credentials;
};

export const initUser = async () => {
  const auth = getAuth();
  const db = getFirestore();
  const firebaseUser = useFirebaseUser();
  const firebaseItems = useFirebaseItems();
  firebaseUser.value = auth.currentUser;

  const userCookie = useCookie("userCookie");

  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
    } else {
      //if signed out
      // router.push("/");
    }

    firebaseUser.value = user;

    // @ts-ignore
    userCookie.value = user; //ignore error because nuxt will serialize to json

    $fetch("/api/auth", {
      method: "POST",
      body: { user },
    });
  });

  // listen to posts

};

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await auth.signOut();
  return result;
};

/**
* Add a document to a collection
* @param {string} collectionName - collection name
* @param {object} doc - document to add
* @example addDocToFirestore('products', { title: "test", body: "test" })
*/
export const addDocToFirestore = async (collectionName: string, doc: any) => {
  const db = getFirestore();
  try {
    let docRef = collection(db, collectionName);
    let res = await addDoc(docRef, doc);
    return res;
  } catch (error) {
    console.log('firebase-error', error);
    return error;
  }
}

/**
* Get documents from a collection
* @param {String} collectionName - name of the collection
* @returns {Array} array of items
* @example getDocsFromFirestore('products', 'published_at')
*/
export const getDocsFromFirestore = async (collectionName: string) => {
  try {
    const db = getFirestore();
    // const q = query(collection(db, collectionName), orderBy("release_date", "desc"));
    let items = [];
    let q = query(collection(db, collectionName));

    let res = await getDocs(q);
    res.forEach((doc) => {
      let newdoc = doc.data();
      newdoc.uid = doc.id;
      items.push(newdoc);
    });
    return items;
  } catch (error) {
    console.log('firebase-error', error);
    return error;
  }
}

/**
* Get documents from a collection
* @param {String} collectionName - name of the collection
* @param {String} order - the property to order by
* @returns {Array} array of items
* @example getDocsFromFirestore('products', 'published_at')
*/
export const getOrderedDocsFromFirestore = async (collectionName: string, order: string) => {
  try {
    const db = getFirestore();
    // const q = query(collection(db, collectionName), orderBy("release_date", "desc"));
    let items = [];
    let q: Query<DocumentData>;
    
    if (order) {
      q = query(collection(db, collectionName), orderBy(order, "desc"));
    } else {
      q = query(collection(db, collectionName));
    }

    let res = await getDocs(q);
    res.forEach((doc) => {
      let newdoc = doc.data();
      newdoc.uid = doc.id;
      items.push(newdoc);
    });
    return items;
  } catch (error) {
    console.log('firebase-error', error);
    return error;
  }
}

/**
* Get a single document from a collection
* @param {String} collectionName - collection name
* @param {String} docId - document id
* @example getDocFromFirestore('products', '123')
*/
export const getDocFromFirestore = async (collectionName: string, docId: string) => {
  try {
    const db = getFirestore();
    const docRef = doc(db, collectionName, docId);
    let res = await getDoc(docRef);
    // console.log("getDocFromFirestore", res.data());
    return res.data();
  } catch (error) {
    console.log('getDocFromFirestore-error', error);
    return error;
  }
}

/**
 * Delete a document in a collection
 * @param  {string} collectionName - the name of the collection
 * @param  {string} docId - document id
 */
 export const deleteDocFromFirestore = async (collectionName: string, docId: string) => {
	try {
    const db = getFirestore();
		const docRef = doc(db, collectionName, docId);
		let res = await deleteDoc(docRef);
		return res;
	} catch (error) {
		console.log('firebase-error', error);
		return error;
	}
}

/**
 * Update a document in a collection
 * @param {string} collectionName - the collection name
 * @param {string} uid - the document id
 * @param {object} data - the data to update
 * @example updateDocInFirestore('products', '123', { title: "test", body: "test" })
 */
 export const updateDocInFirestore = async (collectionName: string, uid: string, data: any) => {
	try {
    const db = getFirestore();
		let res = await updateDoc(doc(db, collectionName, uid), data);
		return res;
	} catch (error) {
		console.log('updateDocInFirestore-error', error);
		return error;
	}
}

export const batchWrite = async (collectionName: string, items: any[]) => {
  console.log('batchWrite', items);
  const db = getFirestore();
  const batch = writeBatch(db);
  items.forEach((item: any) => {
    const docRef = doc(collection(db, collectionName));
    batch.set(docRef, item);
  });
  await batch.commit();
};
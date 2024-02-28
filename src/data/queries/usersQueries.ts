import {DatabaseCollectionEnum, db, auth} from "../firebase.ts";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {FirebaseError} from "@firebase/util";
import {AuthCredentialsType, AuthUserType} from "../../types/AuthUser.ts";

export const setAndGetUser = async (user: AuthUserType) => {
    try {
        localStorage.setItem("user", JSON.stringify(user));
        return await getDoc(doc(db, DatabaseCollectionEnum.USERS, user.uid));
    } catch (e) {
        console.error(e);
    }
};

export const getUser = async () => {
    const user = localStorage.getItem("user");
    if (user != null) {
        try {
            const userData: AuthUserType = JSON.parse(user);
            return await getDoc(
                doc(db, DatabaseCollectionEnum.USERS, userData.uid.toString()),
            );
        } catch (e) {
            console.error(e);
        }
    }
};

export const signIn = async (data: AuthCredentialsType) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password,
        );
        return await setAndGetUser(userCredential.user as unknown as AuthUserType);
    } catch (error: unknown) {
        console.error(error);
        if (!(error instanceof FirebaseError)) {
            return "An error has occurred";
        }
        switch (error.code) {
            case "auth/invalid-credential":
                return "Les informations que vous avez renseignées sont fausses";
            case "auth/invalid-email":
                return "Le format de l'email est invalide";
            case "auth/email-already-in-use":
                return "L'email est déjà utilisé";
            case "auth/too-many-requests":
                return "Trop de requêtes envoyées au serveur. Patientez quelques instants...";
            default:
                return "Une erreur est survenue : " + error.code;
        }
    }
};

export const createUser = async (data: AuthCredentialsType) => {
    try {
        const {user} = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password,
        );
        await setDoc(doc(db, DatabaseCollectionEnum.USERS, user.uid), {});
    } catch (error: unknown) {
        console.error(error);
        if (!(error instanceof FirebaseError)) {
            return "An error has occurred";
        }
        switch (error.code) {
            case "auth/invalid-email":
                return "Le format de l'email est invalide";
            case "auth/email-already-in-use":
                return "L'email est déjà utilisé";
            case "auth/too-many-requests":
                return "Trop de requêtes envoyées au serveur. Patientez quelques instants...";
            case "auth/weak-password":
                return "Le mot de passe est trop faible";
            default:
                return "Une erreur est survenue : " + error.code;
        }
    }
};

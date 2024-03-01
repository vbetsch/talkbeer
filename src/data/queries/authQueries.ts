import { auth } from '../firebase.ts';
import {
    User,
    UserCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseError } from '@firebase/util';
import { AuthCredentialsType } from '../../types/Auth.ts';

export const signIn = async (data: AuthCredentialsType) => {
    let result: { user: User; error: string } = {
        user: {} as User,
        error: '',
    };
    try {
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
        result.user = userCredential.user;
        return result;
    } catch (error: unknown) {
        console.error(error);
        if (!(error instanceof FirebaseError)) {
            result.error = 'An error has occurred';
            return result;
        }
        switch (error.code) {
            case 'auth/invalid-credential':
                result.error = 'Les informations que vous avez renseignées sont fausses';
                return result;
            case 'auth/invalid-email':
                result.error = "Le format de l'email est invalide";
                return result;
            case 'auth/email-already-in-use':
                result.error = "L'email est déjà utilisé";
                return result;
            case 'auth/too-many-requests':
                result.error =
                    'Trop de requêtes envoyées au serveur. Patientez quelques instants...';
                return result;
            default:
                result.error = 'Une erreur est survenue : ' + error.code;
                return result;
        }
    }
};

export const createUser = async (data: AuthCredentialsType) => {
    let result: { user: UserCredential; error: string } = {
        user: {} as UserCredential,
        error: '',
    };
    try {
        result.user = await createUserWithEmailAndPassword(auth, data.email, data.password);
        return result;
    } catch (error: unknown) {
        console.error(error);
        if (!(error instanceof FirebaseError)) {
            result.error = 'An error has occurred';
            return result;
        }
        switch (error.code) {
            case 'auth/invalid-email':
                result.error = "Le format de l'email est invalide";
                return result;
            case 'auth/email-already-in-use':
                result.error = "L'email est déjà utilisé";
                return result;
            case 'auth/too-many-requests':
                result.error =
                    'Trop de requêtes envoyées au serveur. Patientez quelques instants...';
                return result;
            case 'auth/weak-password':
                result.error = 'Le mot de passe est trop faible';
                return result;
            default:
                result.error = 'Une erreur est survenue : ' + error.code;
                return result;
        }
    }
};

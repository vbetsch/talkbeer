export interface AuthUserType {
    uid: string;
    email: string;
    createdAt: Date;
    lastLoginAt: Date;
}

export interface AuthCredentialsType {
    email: string;
    password: string;
}

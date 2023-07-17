export interface ILoginForm {
    usernameOrEmail: string
    password: string
}

export interface IUser {
    uid: string
    email: string
    username: string
    password: string
    avatarColor: string
}

export interface UserResponse {
  user: IUser;
  token: string;
}
export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}
export enum UNPROTECTED_API {
  LOGIN = "/auth/signin",
  VERIFY_JWT = "/auth/verify?token=",
  CMU_OAUTH = "/auth/oauth_student/?code=",
}

export enum REQUIRED_AUTH_API {
  INSTRUCTOR_DASHOBOARD = "/getDatas/test",
  COURSE_CSO_SO = "/getDatas/edit",
  REGISTER_ONE = "/register-page1",
}

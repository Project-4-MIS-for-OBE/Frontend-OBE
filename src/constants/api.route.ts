export enum UNPROTECTED_API {
	ME = "/auth/me",
	LOGIN = "/auth/signin",
	VERIFY_JWT = "/auth/verify?token=",
	CMU_OAUTH = "/auth/oauth_student",
}

export enum REQUIRED_AUTH_API {
	INSTRUCTOR_DASHOBOARD = "/getDatas/test",
	COURSE_CSO_SO = "/getDatas/edit",
	REGISTER_ONE = "/register-page1",
}

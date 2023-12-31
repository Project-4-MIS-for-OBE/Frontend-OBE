export enum UNPROTECTED_PATH {
	LOGIN = "/",
	OAUTH_REDIRECT = "/cmuOAuthCallback",
}

export enum PROTECTED_PATH {
  INSTRUCTOR_SUBJECT = "/instructor_subject",
  EDIT_POINT = "/edit-point",
  INSTRUCTOR_CONCLUDE = "/instructor-conclude",
  ERROR_CONCLUDE = "/instructor-conclude-error",
  STUDENT_SUBJECT = "/student-subject",
  STUDENT_CONCLUDE = "/student-conclude",
}

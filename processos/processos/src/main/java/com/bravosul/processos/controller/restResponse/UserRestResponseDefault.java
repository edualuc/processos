package com.bravosul.processos.controller.restResponse;

import com.bravosul.processos.DTO.UserDTO;

public class UserRestResponseDefault {

	private UserDTO user = null;
	private String success;
	private String error = null;

	public UserRestResponseDefault(UserDTO user, String error, String success) {
		this.user = null;
		this.success = "true";
		this.error = error;
	}

	public UserRestResponseDefault(UserDTO user, String error) {
		this.user = user;
		this.error = error;
		this.success = error == null ? "true" : "false";
	}

	public UserDTO getUser() {
		return user.getId() != null ? user : null;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public String getSuccess() {
		return success;
	}

	public void setSuccess(String success) {
		this.success = success;
	}

}

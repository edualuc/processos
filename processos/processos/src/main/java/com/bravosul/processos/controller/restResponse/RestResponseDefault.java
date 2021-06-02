package com.bravosul.processos.controller.restResponse;

import com.bravosul.processos.DTO.UserDTO;

public class RestResponseDefault {

	private UserDTO user;
	private boolean success;
	private String error;

	public RestResponseDefault(UserDTO user, String error, String success) {
		this.success = true;
		this.error = error;
	}

	public RestResponseDefault(UserDTO user, String error) {
		this.user = user;
		this.error = error;
		this.success = error == null ? true : false;
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

	public boolean getSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

}

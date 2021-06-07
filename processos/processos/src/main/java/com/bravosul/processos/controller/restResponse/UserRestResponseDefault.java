package com.bravosul.processos.controller.restResponse;

import com.bravosul.processos.DTO.UserDTO;

public class UserRestResponseDefault extends RestResponseDefault {

	private UserDTO user = null;

	public UserRestResponseDefault(UserDTO user, String error, String success) {
		this.user = null;
		super.setSuccess("true");
		super.setError(error);
	}

	public UserRestResponseDefault(UserDTO user, String error) {
		this.user = user;
		super.setSuccess(error == null ? "true" : "false");
		super.setError(error);
	}

	public UserDTO getUser() {
		return user.getId() != null ? user : null;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

}

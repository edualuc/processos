package com.bravosul.processos.controller.restResponse;

abstract class RestResponseDefault {

	private String success;
	private String error = null;

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

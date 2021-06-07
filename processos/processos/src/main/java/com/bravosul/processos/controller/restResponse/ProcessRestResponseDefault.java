package com.bravosul.processos.controller.restResponse;

import com.bravosul.processos.DTO.ProcessDTO;

public class ProcessRestResponseDefault {

	private ProcessDTO process = null;
	private String success;
	private String error = null;

	public ProcessRestResponseDefault(ProcessDTO process, String error, String success) {
		this.process = null;
		this.success = "true";
		this.error = error;
	}

	public ProcessRestResponseDefault(ProcessDTO process, String error) {
		this.process = process;
		this.error = error;
		this.success = error == null ? "true" : "false";
	}

	public ProcessDTO getProcess() {
		return process.getId() != null ? process : null;
	}

	public void setProcess(ProcessDTO process) {
		this.process = process;
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

package com.bravosul.processos.controller.restResponse;

import com.bravosul.processos.DTO.ProcessDTO;

public class ProcessRestResponseDefault extends RestResponseDefault {

	private ProcessDTO process = null;

	public ProcessRestResponseDefault(ProcessDTO process, String error, String success) {
		this.process = null;
		super.setSuccess("true");
		super.setError(error);
	}

	public ProcessRestResponseDefault(ProcessDTO process, String error) {
		this.process = process;
		super.setSuccess(error == null ? "true" : "false");
		super.setError(error);
	}

	public ProcessDTO getProcess() {
		return process.getId() != null ? process : null;
	}

	public void setProcess(ProcessDTO process) {
		this.process = process;
	}

}

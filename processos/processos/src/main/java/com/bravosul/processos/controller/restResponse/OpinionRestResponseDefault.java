package com.bravosul.processos.controller.restResponse;

import com.bravosul.processos.DTO.OpinionDTO;

public class OpinionRestResponseDefault extends RestResponseDefault {

	private OpinionDTO opinion = null;

	public OpinionRestResponseDefault(OpinionDTO opinion, String error, String success) {
		this.opinion = null;
		super.setSuccess("true");
		super.setError(error);
	}

	public OpinionRestResponseDefault(OpinionDTO opinion, String error) {
		this.opinion = opinion;
		super.setSuccess(error == null ? "true" : "false");
		super.setError(error);
	}

	public OpinionDTO getOpinion() {
		return opinion.getId() != null ? opinion : null;
	}

	public void setOpinion(OpinionDTO opinion) {
		this.opinion = opinion;
	}

}

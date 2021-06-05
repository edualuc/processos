// package com.bravosul.processos.DTO;

// import java.io.Serializable;
// import java.util.Optional;

// import com.bravosul.processos.Entities.Opinion;
// import com.bravosul.processos.Entities.User;
// import com.bravosul.processos.Entities.Process;

// public class OpinionDTO implements Serializable, Cloneable {
//   private Optional<Integer> id;
//   private Optional<Process> process;
//   private Optional<User> user;
//   private Optional<String> description;

//   public OpinionDTO () {
//   }
  
//   public OpinionDTO (Integer opinionId) {
//     setId(opinionId);
//   }
  
//   public OpinionDTO (Integer opinionId, Process process, User user, String description) {
//     setId(opinionId);
//     setProcess(process);
//     setUser(user);
//     setDescription(description);
//   }
  
//   public OpinionDTO (Opinion opinionParam) {
//     fromOpinion(opinionParam);
//   }

//   public OpinionDTO (Optional<Opinion> opinionParam) {
//     if(opinionParam.isPresent()) {
//       Opinion opinionPresent = opinionParam.get();
//       fromOpinion(opinionPresent);
//     }
//   }
  
//   private void fromOpinion(Opinion opinionParam) {
//     this.id = opinionParam.getId();
//     this.process = opinionParam.getProcess();
//     this.user = opinionParam.getUser();
//     this.description = opinionParam.getDescription();
//   }
  
//   public Opinion toOpinion() {
//     return new Opinion(id, process, user, description);
//   }

//   public Optional<Integer> getId() {
//     return this.id;
//   }
//   public void setId(Integer id) {
//     this.id = Optional.ofNullable(id);
//   }
  
//   public Optional<Process> getProcess() {
//     return this.process;
//   }
//   public void setProcess(Process process) {
//     this.process = Optional.ofNullable(process);
//   }
  
//   public Optional<User> getUser() {
//     return this.user;
//   }
//   public void setUser(User user) {
//     this.user = Optional.ofNullable(user);
//   }
  
//   public Optional<String> getDescription() {
//     return this.description;
//   }
//   public void setDescription(String description) {
//     this.description = Optional.ofNullable(description);
//   }

//   @Override
//   public String toString() {
//     return "OpinionDTO:" + id + " | " + user.toString() + " | " + process;
//   }
// }

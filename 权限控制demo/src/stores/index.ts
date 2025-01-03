import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore("login", () => {
  const userToken = ref<string | null>(localStorage.getItem("token"));
  function LOGIN_IN(token: string) {
    userToken.value = token;
    localStorage.setItem("token", token);
  }
  function LOGIN_OUT() {
    userToken.value = "";
    localStorage.setItem("token", "");
  }

  return { userToken, LOGIN_IN, LOGIN_OUT };
});

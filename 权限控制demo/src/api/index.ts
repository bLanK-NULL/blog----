import { http } from "@/utils/http";
import { useLoginStore } from "@/stores";

function login() {
  return http.post("/login", {
    user: useLoginStore().userToken,
  });
}

function fetchPermission() {
  return http.post("/permission", {
    user: useLoginStore().userToken,
  });
}
export { login, fetchPermission };

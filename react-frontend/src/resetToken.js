export default function resetToken() {
  localStorage.setItem("token", null);
  sessionStorage.setItem("token", null);
}

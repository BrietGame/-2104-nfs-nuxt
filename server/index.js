// exporter les headers

export const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + sessionStorage.getItem('token')
}

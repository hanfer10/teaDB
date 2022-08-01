export const withCsrf = () => {
  const csrfParam = document.querySelector('[name=csrf-param]').content
  const csrfToken = document.querySelector('[name=csrf-token]').content

  return {
    [csrfParam]: csrfToken
  }
}

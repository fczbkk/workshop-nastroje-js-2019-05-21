/**
 * Check if input is valid email address.
 * @param {string} input
 * @returns {boolean}
 */
export function isEmail (input) {
  if (!/\@/.test(input)) {
    return false
  }

  if (input.length < 3) {
    return false
  }

  return true
}

/**
 * Checks if input is valid phone number.
 * @param {string} input
 * @returns {boolean}
 */
export function isPhoneNumber (input) {
  if (input.length !== 9) {
    return false
  }

  if (/\D/.test(input)) {
    return false
  }

  return true
}

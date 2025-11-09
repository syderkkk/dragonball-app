export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateName = (name) => {
  return name.trim().length >= 3;
};

export const validateSubject = (subject) => {
  return subject.trim().length > 0;
};

export const validateMessage = (message) => {
  return message.trim().length >= 10;
};

export const validateForm = (formData) => {
  const errors = {};

  if (!validateName(formData.name)) {
    errors.name = 'El nombre debe tener al menos 3 caracteres';
  }

  if (!validateEmail(formData.email)) {
    errors.email = 'Email inválido';
  }

  if (!validateSubject(formData.subject)) {
    errors.subject = 'El asunto es requerido';
  }

  if (!validateMessage(formData.message)) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
